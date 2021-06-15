<?php

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
    if( strpos( get_bloginfo( 'blogurl' ), 'local' ) !== false ) {
        $path = $path . '/live';
    }

    return $path;
} );



/**
 * Add ACF option page
 */
if( function_exists( 'acf_add_options_page' ) ) {

    function ACFAddOptionsPage() {
        acf_add_options_page(
            array(
                'menu_slug' => 'options',
                'page_title' => __( 'Options', 'port-f' ),
                'capability' => 'edit_posts',
                'position' => false,
                'icon_url' => false,
                'autoload' => false
            )
        );
    }

    add_action( 'acf/init', 'ACFAddOptionsPage' );
}

