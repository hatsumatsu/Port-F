<?php

/**
 * Modify query
 */
function queryModifyQuery( $query ) {
    if( is_admin() ) {
        return $query;
    }

    if( !$query->is_main_query() ) {
        return $query;
    }

    if( is_home() ) {
        $query->set( 'post_type', 'projects' );
    }
}

// add_action( 'pre_get_posts', 'queryModifyQuery' );
