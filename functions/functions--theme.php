<?php

/**
 * i11n
 */
function loadI11n() {
    load_theme_textdomain( 'port-f', get_stylesheet_directory() . '/languages' );
}

add_action( 'after_setup_theme', 'loadI11n' );



/**
 * Add markup to <head>
 */
function modifyThemeHead() {

}

add_action( 'wp_head', 'modifyThemeHead', 1 );



/**
 * Add inline HTML to <section class="footer">
 */
function modifyThemeFooter() {
?>
<!-- W3TC-include-js-head -->
<?php
}

add_action( 'wp_footer', 'modifyThemeFooter', 1 );



/**
 * Remove <meta> tags
 */
remove_action( 'wp_head', 'rsd_link' );             // remove Really Simple Discovery Entry
remove_action( 'wp_head', 'wlwmanifest_link' );     // remove Windows Live Writer Link
remove_action( 'wp_head', 'wp_generator' );         // remove Version number



/**
 * Remove emoji inline CSS and JS
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );



/**
 * Add theme support
 */
function themeSetup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'menus' );
    add_theme_support(
        'html5',
        array(
            'comment-list',
            'comment-form',
            'search-form',
            'gallery',
            'caption'
        )
    );
}

add_action( 'after_setup_theme', 'themeSetup' );



/**
 * Modify <body> classes
 * @param  array $classes body classes
 * @return array          body classes
 */
function modifyBodyClasses( $classes ) {
    return $classes;
}

add_filter( 'body_class', 'modifyBodyClasses' );



/**
 * Get the theme directory name
 * @return string directory name
 */
function get_theme_directory_name() {
    $url = get_template_directory_uri();
    $url = str_replace( '/', '', str_replace( get_theme_root_uri(), '', $url ) );

    return $url;
}



/**
 * Wrap oembed in <div>
 * @param  string $html  original markup
 * @param  string $url  URL
 * @param  array $attributes  config
 * @param  int $id  post ID
 * @return string   modified markup
 */
function wrapOembed( $html, $url, $attributes, $id ) {
    $class = '';

    if( strpos( $url, 'youtu' ) || strpos( $url, 'vimeo' ) ) {
        $class .= ' embed embed--video';
    }

    return '<div class="' . esc_attr( $class ) . '">' . $html . '</div>';
}

add_filter( 'embed_oembed_html', 'wrapOembed', 99, 4 );



/**
 * Redirect views not used by the theme
 * + author archive > home
 */
function redirectViews() {
    if( is_author() ) {
        wp_redirect( home_url() );
        exit;
    }
}

add_action( 'template_redirect', 'redirectViews' );



/**
 * Modify pagination permalink fragment
 */
function modifyPaginationPermalinkSlug() {
    global $wp_rewrite;

    $wp_rewrite->pagination_base = __( 'page', 'port-f' );
}

add_action( 'init', 'modifyPaginationPermalinkSlug', 1 );



/**
 * Modify the separator of the automatic <title>
 * @param  [type] $separator [description]
 * @return [type]            [description]
 */
function modifyDocumentTitleSeparator( $separator ){
    $separator = '•';

    return $separator;
}

add_filter( 'document_title_separator', 'modifyDocumentTitleSeparator', 10 );



/**
 * Modify the parts of the automatic <title>
 * @param  array $title original title parts
 * @return array        modified title parts
 */
function modifyPostTitle( $title ){
    if( is_home() || is_front_page() ) {
        $title['tagline'] = null;
    }

    return $title;
}

add_filter( 'document_title_parts', 'modifyPostTitle', 10 );



/**
 * Template tag:
 * Get <meta> description
 * @return string description text
 */
function get_site_description() {
    global $wp_query,
           $post;

    $description = get_bloginfo( 'description' );

    // single / page
    if( ( is_single() || is_page() ) && !is_front_page() ) {
        $excerpt = $post->post_content;
        $description = ( !empty( $excerpt ) ) ? $excerpt : $description;
    }

    // custom taxonomy terms
    if( !empty( $wp_query->query_vars['term'] ) ) {
        $term = get_term_by( 'slug', $wp_query->query_vars['term'], $wp_query->query_vars['taxonomy'] );
        if( $term ) {
            $description = ( !empty( $term->description ) ) ? $term->description : $description;
        }
    }

    // tags
    if( is_tag() ) {
        $tag = get_term_by( 'slug', $wp_query->query['tag'], 'post_tag' );
        if( $tag ) {
            $description = ( !empty( $tag->description ) ) ? $tag->description : $description;
        }
    }

    // category
    if( is_category() ) {
        $category = get_term_by( 'slug', $wp_query->query['category_name'], 'category' );
        if( $category ) {
            $description = ( !empty( $category->description ) ) ? $category->description : $description;
        }
    }

    // author
    if( !empty( $wp_query->query['author_name'] ) ) {
        $author = get_user_by( 'slug', $wp_query->query['author_name'] );
        if( $author ) {
            $biography = get_the_author_meta( 'description', $author->ID );
            $description = ( !empty( $biography ) ) ? $biography : $description;
        }
    }

    return wp_trim_words( $description, 115, null );
}



/**
 * Get the current archive URL without page number
 * @return  int  $url URL of the archive
 */
function get_current_archive_url() {
    global $wp;

    $url = home_url( $wp->request );
    $url = explode( __( 'page', 'port-f' ) . '/', $url );
    $url = trailingslashit( $url[0] );

    return $url;
}



/**
 * More reliable way to get a post type
 * (works outside of The Loop, too)
 *
 * @return  string  post type
 */
function get_post_type_advanced() {

    $post_type = get_post_type();

    if( is_post_type_archive() ) {
        $post_type = get_query_var( 'post_type' );
    }

    if( is_tax() ) {
        $post_type = get_taxonomy( get_queried_object()->taxonomy )->object_type[0];
    }

    return $post_type;
}



/**
 * Load polyfill for PHP Normalizer when not available
 */
function loadNormalizerPolyfill() {
    if( !function_exists( 'normalizer_normalize' ) ) {
        require_once( __DIR__ . '/../lib/Normalizer/Normalizer.php' );
        require_once( __DIR__ . '/../lib/Normalizer/bootstrap.php' );
    }
}

loadNormalizerPolyfill();
