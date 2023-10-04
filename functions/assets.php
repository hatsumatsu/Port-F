<?php

/**
 * Register / Deregister theme CSS
 */
function assetsRegisterThemeCSS() {
    // - block library styles
    wp_dequeue_style( 'wp-block-library' );

    // + theme
    wp_register_style(
        'port-f',
        ( themeIsDev() ) ? get_template_directory_uri() . '/css/app.css' : get_template_directory_uri() . '/css/app.min.css',        
        array(),
        ( themeIsDev() ) ? time() : wp_get_theme()->version
    );

    wp_enqueue_style( 'port-f' );
}

add_action( 'wp_enqueue_scripts', 'assetsRegisterThemeCSS' );



/**
 * Register / Deregister theme JS
 */
function assetsRegisterThemeJS() {
    // - post embed script
    wp_deregister_script( 'wp-embed' );

    // + theme
    wp_register_script(
        'port-f--app',
        ( themeIsDev() ) ? get_template_directory_uri() . '/js/app.js' : get_template_directory_uri() . '/js/app.min.js',
        array(),
        ( themeIsDev() ) ? time() : wp_get_theme()->version,
        true
    );

    wp_enqueue_script( 'port-f--app' );
}

add_action( 'wp_enqueue_scripts', 'assetsRegisterThemeJS' );



/**
 * Register admin CSS
 */
function assetsRegisterAdminCSS() {
    wp_register_style(
        'port-f--admin',
        ( themeIsDev() ) ? get_template_directory_uri() . '/css/admin.css' : get_template_directory_uri() . '/css/admin.min.css',
        array(),
        ( themeIsDev() ) ? time() : wp_get_theme()->version
    );

    wp_enqueue_style( 'port-f--admin' );
}

add_action( 'admin_print_styles', 'assetsRegisterAdminCSS' );
add_action( 'admin_print_styles-media-upload-popup', 'assetsRegisterAdminCSS' );
add_action( 'login_enqueue_scripts', 'assetsRegisterAdminCSS' );


/**
 * Register admin JS
 */
function assetsRegisterAdminJS() {
    wp_register_script(
        'port-f-admin',
        get_template_directory_uri() . '/js/admin.js',
        array(),
        wp_get_theme()->version,
        true
    );

    wp_enqueue_script( 'port-f-admin' );
}

add_action( 'admin_enqueue_scripts', 'assetsRegisterAdminJS' );
