<?php

/**
 * Register theme CSS
 */
function registerThemeCSS() {
    wp_register_style(
        'port-f--normalize',
        get_template_directory_uri() . '/css/normalize.css',
        '8.0.1'
    );

    wp_register_style(
        'port-f',
        get_template_directory_uri() . '/css/app.css',
        array(
            'port-f--normalize'
        ),
        '0.7' );

    wp_enqueue_style( 'port-f--normalize' );
    wp_enqueue_style( 'port-f' );
}

add_action( 'wp_enqueue_scripts', 'registerThemeCSS' );


/**
 * Register theme JS
 */
function registerThemeJS() {
    // replace bundled jquery with more current version
    if( !is_admin() ) {
        wp_deregister_script( 'jquery' );

        wp_register_script(
            'jquery',
            get_template_directory_uri() . '/js/jquery-3.3.1.min.js',
            array(),
            '3.3.1',
            true
        );

        wp_enqueue_script('jquery');
    }

    // app.js
    wp_register_script(
        'port-f--app',
        get_template_directory_uri() . '/js/app.min.js',
        array(
            'jquery'
        ),
        '0.6',
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
        get_template_directory_uri() . '/src/css/admin.css',
        array(),
        0
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
        0,
        true
    );

    wp_enqueue_script( 'port-f-admin' );
}

add_action( 'admin_enqueue_scripts', 'registerAdminJS' );
