<?php

/**
 * Register custom post types and taxonomies
 */
function registerDataStructure() {
    register_taxonomy(
        'project_types',
        array(
            'projects'
        ),
        array(
            'hierarchical'      => true,
            'labels'            => array(
                'name'                          => __( 'Project Types', 'port-f' ),
                'singular_name'                 => __( 'Project Type', 'port-f' ),
                'menu_name'                     => __( 'Project Types', 'port-f' ),
                'all_items'                     => __( 'All Types', 'port-f' ),
                'edit_item'                     => __( 'Edit Type', 'port-f' ),
                'view_item'                     => __( 'View Type', 'port-f' ),
                'update_item'                   => __( 'Update Type', 'port-f' ),
                'add_new_item'                  => __( 'Add New Type', 'port-f' ),
                'new_item_name'                 => __( 'New Type Name', 'port-f' ),
                'parent_item'                   => __( 'Parent Type', 'port-f' ),
                'parent_item_colon'             => __( 'Parent Type:', 'port-f' ),
                'search_items'                  => __( 'Search Types', 'port-f' ),
                'popular_items'                 => __( 'Popular Types', 'port-f' ),
                'separate_items_with_commas'    => __( 'Separate types with commas', 'port-f' ),
                'add_or_remove_items'           => __( 'Add or remove types', 'port-f' ),
                'choose_from_most_used'         => __( 'Choose from the most used types', 'port-f' ),
                'not_found'                     => __( 'No types found.', 'port-f' ),
                'items_list_navigation'         => __( 'Project Types list navigation', 'port-f' ),
                'items_list'                    => __( 'Project Types list', 'port-f' )
             ),
            'show_ui'           => true,
            'show_admin_column' => true,
            'rewrite'           => array(
                'slug' => __( 'projects', 'port-f' ) . '/' . __( 'filter', 'port-f' )
            )
        )
    );

    register_post_type(
        'projects',
        array(
            'labels'            => array(
                'name'                  => __( 'Projects', 'port-f' ),
                'singular_name'         => __( 'Project', 'port-f' ),
                'menu_name'             => __( 'Projects', 'port-f' ),
                'all_items'             => __( 'All Entries', 'port-f' ),
                'add_new'               => __( 'Add new', 'port-f' ),
                'add_new_item'          => __( 'Add New Entry', 'port-f' ),
                'edit_item'             => __( 'Edit Entry', 'port-f' ),
                'new_item'              => __( 'New Entry', 'port-f' ),
                'view_item'             => __( 'View Entry', 'port-f' ),
                'view_items'            => __( 'View Entries', 'port-f' ),
                'search_items'          => __( 'Search Entries', 'port-f' ),
                'not_found'             => __( 'No entries found', 'port-f' ),
                'not_found_in_trash'    => __( 'No entries found in trash', 'port-f' ),
                'parent_item_colon'     => __( 'Parent Entry:', 'port-f' ),
                'filter_items_list'     => __( 'Filter list', 'port-f' ),
                'items_list_navigation' => __( 'List navigation', 'port-f' ),
                'items_list'            => __( 'List', 'port-f' ),
                'uploaded_to_this_item' => __( 'Uploaded to this entry', 'port-f' ),
                'item_published'        => __( 'Entry published.', 'port-f' ),
                'item_published_privately' => __( 'Entry published privately.', 'port-f' ),
                'item_reverted_to_draft' => __( 'Entry reverted to draft.', 'port-f' ),
                'item_scheduled'        => __( 'Entry scheduled.', 'port-f' ),
                'item_updated'          => __( 'Entry updated.', 'port-f' )
            ),
            'capability_type'   => 'post',
            'supports'          => array(
                'title',
                'editor',
                'author',
                'thumbnail',
                'revisions'
            ),
            'public'            => true,
            'show_in_rest'      => true,
            'menu_position'     => 5,
            'menu_icon'         => 'dashicons-screenoptions',
            'rewrite'           => array(
                'slug' => __( 'projects', 'port-f' )
            ),
            'has_archive'       => __( 'projects', 'port-f' ),
            'query_var'         => __( 'projects', 'port-f' ),
            'taxonomies'        => array(
                'project_types'
            )
        )
    );
}

add_action( 'init', 'registerDataStructure' );
