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

