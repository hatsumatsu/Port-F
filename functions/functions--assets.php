<?php

/**
 * Register / Deregister theme CSS
 */
function registerThemeCSS() {
    // - block library styles
    wp_dequeue_style( 'wp-block-library' );

    // + theme
    wp_register_style(
        'port-f',
        get_template_directory_uri() . '/css/app.min.css',
        array(),
        wp_get_theme()->version
    );

    wp_enqueue_style( 'port-f' );
}

add_action( 'wp_enqueue_scripts', 'registerThemeCSS' );



/**
 * Register / Deregister theme JS
 */
function registerThemeJS() {
    // - post embed script
    wp_deregister_script( 'wp-embed' );

    // + theme
    wp_register_script(
        'port-f--app',
        ( themeIsDev() ) ? get_template_directory_uri() . '/js/app.js' : get_template_directory_uri() . '/js/app.min.js',
        array(),
        wp_get_theme()->version,
        true
    );

    wp_enqueue_script( 'port-f--app' );
}

add_action( 'wp_enqueue_scripts', 'registerThemeJS' );



/**
 * Register admin CSS
 */
function registerAdminCSS() {
    wp_register_style(
        'port-f--admin',
        get_template_directory_uri() . '/css/admin.min.css',
        array(),
        wp_get_theme()->version
    );

    wp_enqueue_style( 'port-f--admin' );
}

add_action( 'admin_print_styles', 'registerAdminCSS' );
add_action( 'admin_print_styles-media-upload-popup', 'registerAdminCSS' );



/**
 * Register admin JS
 */
function registerAdminJS() {
    wp_register_script(
        'port-f-admin',
        get_template_directory_uri() . '/js/admin.js',
        array(),
        wp_get_theme()->version,
        true
    );

    wp_enqueue_script( 'port-f-admin' );
}

add_action( 'admin_enqueue_scripts', 'registerAdminJS' );
