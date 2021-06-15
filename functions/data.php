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
                'menu_admin_bar'        => __( 'Project', 'port-f' ),
                'all_items'             => __( 'All Projects', 'port-f' ),
                'add_new'               => __( 'Add new', 'port-f' ),
                'add_new_item'          => __( 'Add new Project', 'port-f' ),
                'edit_item'             => __( 'Edit Project', 'port-f' ),
                'new_item'              => __( 'Add Project', 'port-f' ),
                'view_item'             => __( 'View Project', 'port-f' ),
                'search_items'          => __( 'Search Projects', 'port-f' ),
                'not_found'             => __( 'No Projects found', 'port-f' ),
                'not_found_in_trash'    => __( 'No Projects found in trash', 'port-f' ),
                'parent_item_colon'     => __( 'Parent Project:', 'port-f' ),
                'filter_items_list'     => __( 'Filter Projects list', 'port-f' ),
                'items_list_navigation' => __( 'Projects list navigation', 'port-f' ),
                'items_list'            => __( 'Projects list', 'port-f' )
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
            'menu_icon'         => 'dashicons-smiley',
            'rewrite'           => array(
                'slug' => __( 'projects', 'port-f' )
            ),
            'has_archive'       => __( 'projects', 'port-f' ),
            'taxonomies'        => array(
                'project_types'
            )
        )
    );
}

add_action( 'init', 'registerDataStructure' );
