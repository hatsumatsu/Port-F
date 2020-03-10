<?php

/**
 * Modify core image sizes
 * thumbnail:    400 x  600px
 * medium:       800 x 1200px
 * large:       1200 x 1800px
 */
function modifyImageSizes() {
    // thumbnail
    update_option( 'thumbnail_size_w', 400 );
    update_option( 'thumbnail_size_h', 600 );
    update_option( 'thumbnail_crop', 0 );

    // medium
    update_option( 'medium_size_w', 800 );
    update_option( 'medium_size_h', 1200 );
    update_option( 'medium_crop', 0 );

    // large
    update_option( 'large_size_w', 1200 );
    update_option( 'large_size_h', 1800 );
    update_option( 'large_crop', 0 );
}

add_action( 'after_switch_theme', 'modifyImageSizes' );



/**
 * Add custom image sizes
 * tiny:          80 x  120px
 * larger:      1800 x 2700px
 * huge:        2400 x 3600px
 */
function registerImageSizes() {
    // tiny
    add_image_size( 'tiny', 40, 60, false );

    // larger
    add_image_size( 'larger', 1800, 2700, false );

    // huge
    add_image_size( 'huge', 2400, 3600, false );
}

add_action( 'after_setup_theme', 'registerImageSizes' );



/**
 * Define custom jpeg quality
 */
function modifyJPEGQuality() {
    return 90;
}

add_filter( 'jpeg_quality', 'modifyJPEGQuality' );



/**
 * Modify allowed mime types
 * + Add SVG
 * @param  array $mimes allowed mime types
 * @return array        allowed mime types
 */
function modifyMimeTypes( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';

    return $mimes;
}

add_filter( 'upload_mimes', 'modifyMimeTypes' );



/**
 * Modify the threshold to downscale images
 */
add_filter( 'big_image_size_threshold', function() {
    return 3800;
} );




/**
 * Save post ID’s of inline content images
 * @param  integer $post_id post ID
 */
function saveInlineImages( $post_id ) {
    $post = get_post( $post_id );

    $images = array();
    preg_match_all( '/data-id="([0-9]*)"/i', $post->post_content, $images );

    $images = $images[1];

    // convert strings to integers
    foreach( $images as &$id ) {
        $id = intval( $id );
    }
    unset( $id );

    // save as postmeta
    update_post_meta( $post_id, 'inline-images', json_encode( $images ) );
}

add_action( 'save_post', 'saveInlineImages' );



/**
 * Modify the markup of inline images added via the visual editor
 * to follow the srcset responsive image pattern
 *
 * This filter is used when an image is added via the media modal.
 * Do not add <figure> tags here, because when we add a caption later
 * we end up with a nested <figure>[caption]<img> structure...
 * @param  string $html  original image markup
 * @param  int    $id    attachment ID
 * @param  string $alt   alt text
 * @param  string $title image title
 * @return string        modified markup
 */
function responsiveImageEmbed( $html, $id, $alt, $title, $align = null, $size = null ) {
    $orientation = get_post_meta( $id, 'orientation', true );

    $class = '';
    $class .= ( $orientation ) ? ' orientation--' . $orientation : '';
    $class .= ( $align ) ? ' align--' . str_replace( 'align', '', $align ) : '';

    $html = '';

    $html .= getTheResponsiveImage(
        $id,
        array(
            'sizes'   => '100vw',
            'alt'     => $alt,
            'title'   => $title,
            'class'   => 'inline-image ' . $class,
            'data-id' => $id
        ),
        array(
            'tiny',
            'thumbnail',
            'medium',
            'large',
            'larger',
            'full'
        )
    );

    return $html;
}

add_filter( 'get_image_tag', 'responsiveImageEmbed', 10, 1000 );



/**
 * Save base64 encoded version of the tiny image size as post meta
 * @param  array $metadata metadata
 * @param  integer $id     attachment ID
 * @return array           metadata
 */
function saveBase64ThumbnailImage( $metadata, $id ) {
    // quit if image size is not found in metadata
    if( !isset( $metadata['sizes']['tiny'] ) ) {
        delete_post_meta( $id, 'base64--tiny' );

        return $metadata;
    }

    // save attachment meta data first to make it available to 'wp_get_attachment_image_src'
    wp_update_attachment_metadata( $id, $metadata );
    $src = wp_get_attachment_image_src( $id, 'tiny' );

    // quit if source is not found
    if( !$src ) {
        delete_post_meta( $id, 'base64--tiny' );

        return $metadata;
    }

    $base64 = getBase64( $src[0] );

    // quit if base64 encoding failed
    if( !$base64 ) {
        delete_post_meta( $id, 'base64--tiny' );

        return $metadata;
    }

    // save as meta field
    update_post_meta( $id, 'base64--tiny', $base64 );

    return $metadata;
}

add_filter( 'wp_generate_attachment_metadata', 'saveBase64ThumbnailImage', 99, 2 );



/**
 * Modify output of [caption] shortcode
 * @param  ?? $empty        ??
 * @param  array $attr      shortcode attributes
 * @param  string $content  the image markup inside [caption][/caption]
 * @return strings          HTML makrup
 */
function modifyCaptionShortcode( $empty, $attr, $content ){
    $attr = shortcode_atts( array(
        'id'      => '',
        'align'   => '',
        'width'   => '',
        'caption' => ''
    ), $attr );

    $id = ( $attr['id'] ) ? intval( str_replace( 'attachment_', '', $attr['id'] ) ) : null;

    // hack to get the orientation of the child image
    if( strpos( $content, 'orientation--portrait' ) != false  ) {
        $orientation = 'portrait';
    } elseif( strpos( $content, 'orientation--square' ) != false ) {
        $orientation = 'square';
    } elseif( strpos( $content, 'orientation--landscape' ) != false ) {
        $orientation = 'landscape';
    } else {
        $orientation = false;
    }

    $class = '';
    // $classes .= ( get_post_meta( $id, 'orientation', true ) ) ? ' orientation--' .  get_post_meta( $id, 'orientation', true ) : '';
    $class .= ( $orientation ) ? ' orientation--' . $orientation : '';
    $class .= ( $attr['align'] ) ? ' align--' .  str_replace( 'align', '', $attr['align'] ) : '';

    $html = '';
    $html .= '<figure class="inline-image ' . esc_attr( $class ) . '">';

    $html .= do_shortcode( strip_tags( $content, '<img><img/><figcaption>' ) );

    if( $attr['caption'] ) {
        $html .= '<figcaption class="inline-image-caption">';
        $html .= $attr['caption'];
        $html .= '</figcaption>';
    }

    $html .= '</figure>';

    return $html;
}

add_filter( 'img_caption_shortcode', 'modifyCaptionShortcode', 10, 3 );



/**
 * Modify output of the [gallery] shortcode
 * @param  string  $output      original output
 * @param  array   $attributes  shortcode attributes
 * @param  integer $instance    unique ID of the gallery instance
 * @return string               output
 */
function modifyGalleryShortcode( $output = '', $attributes, $instance ) {
    if( !$attributes['ids'] ) {
        return false;
    }

    $ids = explode( ',', $attributes['ids'] );

    if( !$ids ) {
        return false;
    }

    $html = '';

    $html .= '<div class="inline-gallery">';
    foreach( $ids as $id ) {
        $attachment = get_post( $id );

        $html .= '<figure class="inline-gallery-image">';
        $html .=  getTheResponsiveImage(
            $id,
            array(
                'class' => 'inline-gallery-image-image'
            ),
            array(
                'tiny',
                'thumbnail',
                'medium',
                'large',
                'larger',
                'full'
            )
        );

        if( $attachment->post_excerpt ) {
            $html .= '<figcaption class="inline-gallery-image-caption">';
            $html .= wptexturize( $attachment->post_excerpt );
            $html .= '</figcaption>';
        }

        $html .= '</figure>';
    }
    $html .= '</div>';

    return $html;
}

add_filter( 'post_gallery', 'modifyGalleryShortcode', 10, 100 );



/**
 * Force minimum images dimensions on upload
 * @param  array $file file object
 * @return array       file object
 */
function registerMinimumImageDimensions( $file ) {
    $minimum = array(
        'width' => 800,
        'height' => 600
        );

    $mimes = array(
        'image/jpeg',
        'image/png',
        'image/gif'
        );

    if( !in_array( $file['type'], $mimes ) ) {
        return $file;
    }

    $image = getimagesize( $file['tmp_name'] );

    if ( $image[0] < $minimum['width'] ) {
        $file['error'] = sprintf( __( 'Image is too small. Minimum width is %1$spx. Uploaded image width is %2$spx', 'port-f' ), $minimum['width'], $image[0] );
    } elseif ( $image[1] < $minimum['height'] ) {
        $file['error'] = sprintf( __( 'Image is too small. Minimum height is %1$spx. Uploaded image height is %2$spx', 'port-f' ), $minimum['height'], $image[1] );
    }

    return $file;
}

add_filter( 'wp_handle_upload_prefilter', 'registerMinimumImageDimensions' );



/**
 * Add custom meta data to uploaded images
 * + orientation
 * @param  array $metadata original meta data
 * @param  int   $id       attachment ID
 * @return array           modified meta data
 */
function addImageMetaData( $metadata, $id ) {
    // orientation
    if( intval( $metadata['width'] ) == intval( $metadata['height'] ) ) {
        $orientation = 'square';
    } elseif( intval( $metadata['width'] ) < intval( $metadata['height'] ) ) {
        $orientation = 'portrait';
    } else {
        $orientation = 'landscape';
    }

    update_post_meta( $id, 'orientation', $orientation );

    return $metadata;
}

add_filter( 'wp_generate_attachment_metadata', 'addImageMetaData', 10, 2 );



/**
 * Sanitize upload file names to prevent encoding problem in perticular server / browser environments
 * namely NFD / NFC confusion
 * + normalize NFD > NFC
 * + remove accents
 * @param  string $filename file name
 * @return string           file name
 */
function sanitizeUploadsFileName( $filename ) {
    if( function_exists( 'normalizer_normalize' ) ) {
        $filename = normalizer_normalize( $filename );
    }

    $filename = remove_accents( $filename );

    return $filename;
}

add_filter( 'sanitize_file_name', 'sanitizeUploadsFileName' );



/**
 * Set default of link field to 'none' in media library modal
 */
update_option( 'image_default_link_type', 'none' );



/**
 * Get the base64 encoded content of a file
 * @param  string $url file URL
 * @return string      base64 encoded file content
 */
function getBase64( $url ) {
    $file = @file_get_contents( $url );

    if( !$file ) {
        return false;
    }

    $string = base64_encode( $file );

    return $string;
}



/**
 * Get responsive image tag
 * Example:
 * getTheResponsiveImage(
 *     $image_id
 *     array(
 *         'sizes' => '100vw',
 *         'alt' => 'Alt text',
 *         'class' => 'wp-image'
 *     ),
 *     array(
 *         'medium',
 *         'large',
 *         'full'
 *     )
 *  )
 *
 * @param  integer $id               image ID
 * @param  array $attributes         array of attribute / value pairs
 * @param  array $sizes              array of image size key words
 * @return string                    HTML <img> tag
 */
function getTheResponsiveImage(
    $id,
    $attributes = array(),
    $sizes = array(
        'tiny',
        'thumbnail',
        'medium',
        'large',
        'larger',
        'huge',
        'full',
    )
) {
    $html = '';
    $html .= '<img';

    // srcset
    $srcset = '';
    $widths = array();
    foreach( $sizes as $size ) {
        $src = wp_get_attachment_image_src( $id, $size );
        // check if width is equal to one of the previous versions
        if( !in_array( $src[1], $widths ) ) {
            $srcset .= $src[0] . ' ' . $src[1] . 'w ' . $src[2] . 'h,';

            $widths[] = $src[1];

            $width = $src[1];
            $height = $src[2];
        }

        // set src to smallest image
        if( $size === $sizes[0] ) {
            $attributes['src'] = $src[0];
        }
    }

    $srcset = rtrim( $srcset, ',' );
    $attributes['data-srcset'] = $srcset;
    $attributes['data-sizes'] = 'auto';

    // dimensions
    $attributes['width'] = $width;
    $attributes['height'] = $height;

    $attributes['class'] .= ' lazyload';


    // attributes
    foreach( $attributes as $attribute => $value ) {
        $html .= ' ' . $attribute . '="' . esc_attr( $value ) . '"';
    }

    $html .= '>';

    return $html;
}
