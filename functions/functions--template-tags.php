<?php

/**
 * Template tag:
 * Responsive image
 *
 * Example:
 * the_responsive_image(
 *     $image_id,
 *     array(
 *         'medium',
 *         'large',
 *         'full'
 *     ),
 *     array(
 *         'sizes' => '100vw',
 *         'alt' => 'Alt text',
 *         'class' => 'wp-image'
 *     )
 *  )
 *
 * @param  integer $id               image ID
 * @param  array $sizes              array of image size key words
 * @param  array $attributes         array of attribute / value pairs
 * @return string                    HTML <img> tag
 */
function the_responsive_image( $id, $sizes = array( 'medium', 'large', 'full' ), $attributes = array() ) {
    echo getTheResponsiveImage( $id, $sizes, $attributes );
}


/**
 * Template tag:
 * Post date and time based on global WP settings.
 */
function the_post_time() {
    echo get_the_time( get_option( 'date_format' ) ) . ' ' . get_the_time( get_option( 'time_format' ) );
}



/**
 * Template tag:
 * Custom template part include
 * @param  string $type       template ID e.g. 'post'
 * @param  string $context    context of template e.g. post_type 'projects'
 * @param  boolean $fallback  ignore context in case temoplate does not exist
 */
function get_inc( $type, $context, $fallback ) {
    if( $context ) {
        if( is_file( TEMPLATEPATH . '/inc/' . $type . '--' . $context . '.php' ) ) {
            get_template_part( '/inc/' . $type . '--' . $context );
        } else {
            if( $fallback ) {
                get_template_part( '/inc/' . $type );
            }
        }
    } else {
        get_template_part( '/inc/' . $type );
    }
}

