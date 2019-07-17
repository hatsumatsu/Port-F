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
 * Disable welcome panel on dashboard
 */
remove_action( 'welcome_panel', 'wp_welcome_panel' );



/**
 * Configure tinyMCE features
 * http://www.tinymce.com/wiki.php/Configuration
 */
function customizeTinyMCE( $init ) {

    // disable rich text pasting
    $init['paste_as_text'] = true;

    // disable object resizing
    $init['object_resizing'] = false;

    // format select entries
    $init['block_formats'] = __( 'Paragraph', 'port-f' ) . '=p;' . __( 'Heading 3', 'port-f' ) . '=h3;' . __( 'Heading 4', 'port-f' ) . '=h4';


    // style formats
    $style_formats = array(
        array(
            'title' => __( 'Bigger', 'port-f' ),
            'block' => 'p',
            'classes' => 'bigger',
            'wrapper' => false
        ),
        array(
            'title' => __( 'Button', 'port-f' ),
            'selector' => 'a',
            'classes' => 'button',
            'wrapper' => false
        )
    );

    $init['style_formats'] = json_encode( $style_formats );

    return $init;
}

add_filter( 'tiny_mce_before_init', 'customizeTinyMCE' );



/**
 * Configure tinyMCE button row 1
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function customizeTinyMCEButtonsRow1( $buttons ) {
    return array(
        'formatselect',
        'styleselect',
        'bold',
        'italic',
        'bullist',
        'link',
        'unlink',
        'undo',
        'redo',
        'removeformat'
    );
}

add_filter( 'mce_buttons', 'customizeTinyMCEButtonsRow1' );



/**
 * Configure tinyMCE button row 2
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function customizeTinyMCEButtonsRow2( $buttons ) {
    return array();
}

add_filter( 'mce_buttons_2', 'customizeTinyMCEButtonsRow2' );



/**
 * Register tinyMCE editor CSS
 */
function registerTinyMCECSS() {
    add_editor_style( 'css/editor.min.css' );
}

add_action( 'init', 'registerTinyMCECSS' );



/**
 * Hide admin bar on frontend for all users
 */
add_filter( 'show_admin_bar', '__return_false' );



/**
 * Show admin warning when String Normalizer is not available
 */
function testForNormalizer() {
    if( !function_exists( 'normalizer_normalize' ) ) {
?>
<div class="error notice">
    <p>
        <?php echo __( 'It seems that <strong>PHP Intl</strong> is missing on the server. International file names are not sanitized on upload.', 'port-f' ); ?>
    </p>
</div>
<?php
    }
}

add_action( 'admin_notices', 'testForNormalizer' );
