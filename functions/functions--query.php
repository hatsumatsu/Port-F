<?php

/**
 * Modify query
 */
function modifyQuery( $query ) {
    if( !is_admin() && is_home() ) {
        $query->set( 'post_type', 'projects' );
    }
}

// add_action( 'pre_get_posts', 'modifyQuery' );
