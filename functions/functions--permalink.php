<?php

/**
 * Add custom permalink settings
 */
function permalinkRegisterSettings() {    
    // Pagination base
    add_settings_field(
        'custom_pagination_base', 
        __( 'Pagination Base', 'port-f' ), 
        function() {
            $value = get_option( 'custom_pagination_base' );	
            echo '<input type="text" value="' . esc_attr( $value ) . '" name="custom_pagination_base" id="custom_pagination_base" class="regular-text" />';
        }, 
        'permalink', 
        'optional'
    );


    // Search base
     add_settings_field(
        'custom_search_base', 
        __( 'Search Base', 'port-f' ), 
        function() {
            $value = get_option( 'custom_search_base' );	
            echo '<input type="text" value="' . esc_attr( $value ) . '" name="custom_search_base" id="custom_search_base" class="regular-text" />';
        }, 
        'permalink', 
        'optional'
    );     
}

add_action( 'admin_init', 'permalinkRegisterSettings' );



/**
 * Save custom permalink settings
 */
function permalinkSaveSettings() {

    if( !current_user_can( 'manage_options' ) ) {
        return;
    }

    if( !array_key_exists( 'permalink_structure', $_POST ) ) {
        return;
    }

    if( !wp_verify_nonce( $_REQUEST['_wpnonce'], 'update-permalink' ) ) {
        return;
    }    
    
    update_option( 'custom_pagination_base', sanitize_text_field( trim( $_POST['custom_pagination_base'] ) ) );
    update_option( 'custom_search_base', sanitize_text_field( trim( $_POST['custom_search_base'] ) ) );
}

add_action( 'admin_init', 'permalinkSaveSettings' );



/**
 * Modify pagination permalink fragment
 */
function permalinkModifyPaginationSlug() {
    global $wp_rewrite;

    $wp_rewrite->pagination_base = get_option( 'custom_pagination_base', 'page' );
}

add_action( 'init', 'permalinkModifyPaginationSlug', 1 );



/**
 * Modify pagination permalink fragment
 */
function permalinkModifySearchSlug() {
    global $wp_rewrite;

    $wp_rewrite->search_base = get_option( 'custom_search_base', 'search' );
}

add_action( 'init', 'permalinkModifySearchSlug', 1 );