<?php



/**
 * Disable the custom post type and taxonomy registration feature of ACF 
 * 
 */
add_filter( 'acf/settings/enable_post_types', '__return_false' );


/**
 * Modify ACF's WYSIWYG field toolbar
 * @param  array $toolbars toolbars
 * @return array           toolbars
 */
function ACFModifyEditorToolbars( $toolbars ) {
    $toolbars['Minimal'] = array();
    $toolbars['Minimal'][1] = array(
        'italic',
        'link',
        'unlink',
        'removeformat'
    );

    return $toolbars;
}

add_filter( 'acf/fields/wysiwyg/toolbars' , 'ACFModifyEditorToolbars'  );



/**
 * Prevent overwriting ACF fields when doing field changes in the live site
 * Useful when on multisite and sharing the same theme
 * so changes in one site don't affect other sites...
 */
add_filter( 'acf/settings/save_json', function( $path ) {
    if( wp_get_environment_type() === 'production' ) {
        $path = $path . '/live';
    }

    return $path;
} );



/**
 * Add ACF option page
 */
if( function_exists( 'acf_add_options_page' ) ) {

    function ACFAddOptionsPage() {
        // top level page
        acf_add_options_page(
            array(
                'menu_slug' => 'options-a',
                'page_title' => __( 'Options A', 'port-f' ),
                'capability' => 'edit_posts',
                'position' => false,
                'icon_url' => false,
                'autoload' => false
            )
        );

        // page under 'Settings'
        acf_add_options_page(
            array(
                'menu_slug' => 'options-b',
                'page_title' => __( 'Options B', 'port-f' ),
                'capability' => 'manage_options',
                'parent_slug' => 'options-general.php',
                'position' => false,
                'icon_url' => false,
                'autoload' => false
            )
        );        
    }

    add_action( 'acf/init', 'ACFAddOptionsPage' );
}



/**
 * Disable custom post types and taxonomies feature
 */
add_filter( 'acf/settings/enable_post_types', '__return_false' );



/**
 * Disable option page feature
 */
add_filter( 'acf/settings/enable_options_pages_ui', '__return_false' );
