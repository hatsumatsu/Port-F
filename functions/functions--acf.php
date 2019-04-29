<?php

/**
 * Modify ACF's WYSIWYG field toolbar
 * @param  array $toolbars toolbars
 * @return array           toolbars
 */
function modifyACFEditorToolbars( $toolbars ) {
    $toolbars['Minimal' ] = array();
    $toolbars['Minimal' ][1] = array(
        'italic',
        'link',
        'unlink',
        'removeformat'
    );

    return $toolbars;
}

add_filter( 'acf/fields/wysiwyg/toolbars' , 'modifyACFEditorToolbars'  );