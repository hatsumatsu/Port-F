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
function responsiveImage( $id, $sizes = array( 'medium', 'large', 'full' ), $attributes = array() ) {
    echo getTheResponsiveImage( $id, $sizes, $attributes );
}



/**
 * Template tag:
 * Post date and time based on global WP settings.
 */
function postTime() {
    echo get_the_time( get_option( 'date_format' ) ) . ' ' . get_the_time( get_option( 'time_format' ) );
}



/**
 * Template tag:
 * Custom template part include
 * @param  string $type       template ID e.g. 'post'
 * @param  string $context    context of template e.g. post_type 'projects'
 * @param  boolean $fallback  ignore context in case temoplate does not exist
 */
function getPart( $type, $context = null, $fallback = false ) {
    if( $context ) {
        if( is_file( TEMPLATEPATH . '/inc/' . $type . ucfirst( $context ) . '.php' ) ) {
            get_template_part( '/inc/' . $type . ucfirst( $context ) );
        } else {
            if( $fallback ) {
                get_template_part( '/inc/' . $type );
            }
        }
    } else {
        get_template_part( '/inc/' . $type );
    }
}