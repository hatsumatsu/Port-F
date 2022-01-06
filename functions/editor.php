<?php

/**
 * Configure tinyMCE features
 * http://www.tinymce.com/wiki.php/Configuration
 */
function editorCustomize( $init ) {

    // disable rich text pasting
    $init['paste_as_text'] = true;

    // disable object resizing
    $init['object_resizing'] = false;

    // format select entries
    $init['block_formats'] = __( 'Paragraph', 'port-f' ) . '=p;' . __( 'Heading 1', 'port-f' ) . '=h3;' . __( 'Heading 2', 'port-f' ) . '=h4';


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

add_filter( 'tiny_mce_before_init', 'editorCustomize' );



/**
 * Configure tinyMCE button row 1
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function editorCustomizeToolbar( $buttons ) {
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

add_filter( 'mce_buttons', 'editorCustomizeToolbar' );



/**
 * Configure tinyMCE button row 2
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function editorCustomizeToolbar2( $buttons ) {
    return array();
}

add_filter( 'mce_buttons_2', 'editorCustomizeToolbar2' );



/**
 * Register tinyMCE editor CSS
 */
function editorRegisterCSS() {
    add_editor_style( 
      ( themeIsDev() ) ? 'css/editor.css' : 'css/editor.min.css'
    );
}

add_action( 'init', 'editorRegisterCSS' );
