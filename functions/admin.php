<?php

/**
 * Remove admin menus
 */
function removeAdminMenus() {
    // remove_menu_page( 'edit.php' );                  /* Posts */
    // remove_menu_page( 'edit.php?post_type=page' );   /* Pages */
    // remove_menu_page( 'upload.php' );                /* Media */
    remove_menu_page( 'edit-comments.php' );            /* Comments */
    // remove_menu_page( 'tools.php' );                 /* Tools */
}

add_action( 'admin_menu', 'removeAdminMenus' );



/**
 * Remove admin dashboard widgets
 */
function removeAdminDashboardWidgets() {
    global $wp_meta_boxes;

    unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins'] );
    unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments'] );
    unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_primary'] );
    unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary'] );
    unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_site_health'] );
}

add_action( 'wp_dashboard_setup', 'removeAdminDashboardWidgets' );



/**
 * Remove Admin Bar nodes
 * @param  WP_Admin_Bar $wp_admin_bar admin bar instance
 *
 */
function removeAdminBarNodes( $wp_admin_bar ) {
    $wp_admin_bar->remove_node( 'wp-logo' );
    // $wp_admin_bar->remove_node( 'site-name' );
    $wp_admin_bar->remove_node( 'updates' );
    $wp_admin_bar->remove_node( 'comments' );
    $wp_admin_bar->remove_node( 'new-content' );
    // $wp_admin_bar->remove_node( 'my-account' );
    // $wp_admin_bar->remove_node( 'search' );
    // $wp_admin_bar->remove_node( 'customize' );
}

add_action( 'admin_bar_menu', 'removeAdminBarNodes', 99 );



/**
 * Disable welcome panel on dashboard
 */
remove_action( 'welcome_panel', 'wp_welcome_panel' );



/**
 * Disable Admin Bar on frontend
 */
add_filter( 'show_admin_bar', '__return_false' );



/**
 * Modify user greeting
 */
add_filter( 'admin_bar_menu', function( &$wp_admin_bar ) {
    $node = $wp_admin_bar->get_node( 'my-account' );

    if( !$node ) return;
    if( !property_exists( $node, 'title' ) ) return;

    $label = str_replace( 'Howdy, ', '', $node->title );

    $wp_admin_bar->add_node( 
        array(
            'id' => 'my-account',
            'title' => $label,
        ) 
    );
}, 9999 );



/**
 * Disable profile avatars on theme activation
 */
add_action( 'after_switch_theme', function() {
    update_option( 'show_avatars', '' );
} );



/**
 * Remove footer text
 */
add_filter( 'admin_footer_text', '__return_empty_string', 11 ); 
add_filter( 'update_footer', '__return_empty_string', 11 );



/**
 * Custom admin theme
 * https://wpadmincolors.com/
 */
add_action('admin_init', function() {
    wp_admin_css_color( 
        'port-f', 
        'Port F',
        get_stylesheet_directory_uri() . '/css/admin-themes/port-f.css',
        array( '#282828', '#fff', '#7101e0' , '#565656')
    );
} );
