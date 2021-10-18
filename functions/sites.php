<?php

/**
 * Modify admin bar entries
 * + Rename 'My Sites' --> 'Languages'
 * + Remove WP logo
 */
function sitesModifyAdminBar() {
    global $wp_admin_bar;

    $wp_admin_bar->remove_menu( 'wp-logo' );

    if( $node = $wp_admin_bar->get_node( 'my-sites' ) ) {
        $node->title = __( 'Languages', 'port-f' );

        $wp_admin_bar->add_node( $node );
    }


    foreach( $wp_admin_bar->get_nodes() as $node ) {
        if( $node->parent === 'my-sites-list' ) {
            $siteId = str_replace( 'blog-', '', $node->id );

            switch_to_blog( intval( $siteId ) );
            $language = ( get_option( 'WPLANG' ) ) ? get_option( 'WPLANG' ) : 'en_US';
            restore_current_blog();


            if( $language ) {
                $node->title = Locale::getDisplayLanguage( $language, get_user_locale() );
                $wp_admin_bar->add_node( $node );
            }
        }
    }
}

add_action( 'wp_before_admin_bar_render', 'sitesModifyAdminBar' );
