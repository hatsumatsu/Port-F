<?php
/**
 * i11n
 */
load_theme_textdomain( 'hm_theme', get_stylesheet_directory() . '/languages' );


/** 
 * Register theme CSS
 */
function hm_theme_css() {
    wp_register_style( 'hm_normalize', get_template_directory_uri() . '/css/normalize.css', 0 );
    wp_register_style( 'hm_theme', get_template_directory_uri() . '/style.css', array( 'hm_normalize' ) );

    wp_enqueue_style( 'hm_normalize' );
    wp_enqueue_style( 'hm_theme' );
} 

add_action( 'wp_enqueue_scripts', 'hm_theme_css' );


/** 
 * Register theme JS
 */
function hm_theme_js() {
    wp_register_script( 'hm_dependencies', get_template_directory_uri() . '/js/dependencies-global.min.js', 0, false );
    wp_register_script( 'hm_theme', get_template_directory_uri() . '/js/site-global.min.js', array( 'jquery','hm_dependencies' ), 0, false );
    wp_register_script( 'hm_loader', get_template_directory_uri() . '/js/loader.js', array( 'hm_theme' ), 0, false );
    
    wp_enqueue_script( 'hm_dependencies' );
    wp_enqueue_script( 'hm_theme' );
    wp_enqueue_script( 'hm_loader' );
} 

add_action( 'wp_enqueue_scripts', 'hm_theme_js' );


/** 
 * Add inline HTML to <head>
 */
function hm_theme_head() { ?>
<!--[if lte IE 8]>
    <link rel="stylesheet" type="text/css" href="css/ie-lte8.css" />
<![endif]-->
<?php 
}

add_action( 'wp_head', 'hm_theme_head', 1 );


/** 
 * Add inline HTML to <div id="footer">
 */
function hm_theme_footer() { ?>
<!-- W3TC-include-js-head -->
<?php 
}

add_action( 'wp_footer', 'hm_theme_footer', 1 );


/** 
 * Remove unneccessary or unsave <meta> tags
 */
remove_action( 'wp_head', 'rsd_link' ); // remove Really Simple Discovery Entry
remove_action( 'wp_head', 'wlwmanifest_link' );  // remove Windows Live Writer Link 
remove_action( 'wp_head', 'wp_generator' );  // remove Version number


/** 
 * Add theme support 
 */
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );
add_theme_support( 'html5', array( 
    'comment-list', 
    'comment-form', 
    'search-form', 
    'gallery', 
    'caption' 
    ) 
);


/** 
 * Custom taxonomy
 * http://codex.wordpress.org/Function_Reference/register_taxonomy
 */
register_taxonomy( 
	'project_types', 
	array( 'projects' ), 
	array( 
        'hierarchical' => true,
    	'labels' => array( 
            'name' => __( 'Project Types', 'hm_theme' ), 
            'singular_name' => __( 'Project Type', 'hm_theme' )
    	 ),
    'show_ui' => true,
    'show_admin_column' => true,
    'rewrite' => array( 'slug' => 'projects/filter' )
    ) 
);


/** 
 * Custom post type
 * http://codex.wordpress.org/Function_Reference/register_post_type
 */
register_post_type( 
	'projects', 
	array( 'labels' => array( 
        'name' => __( 'Projects', 'hm_theme' ), 
        'singular_name' => __( 'Project', 'hm_theme' ),
        'menu_name' => __( 'Projects', 'hm_theme' ),
        'menu_admin_bar' => __( 'Project', 'hm_theme' ),
		'all_items' => __( 'All Projects', 'hm_theme' ),
		'add_new_item' => __( 'Add new Project', 'hm_theme' ),
		'edit_item' => __( 'Edit Project', 'hm_theme' ),
		'new_item' => __( 'Add Project', 'hm_theme' ),
		'view_item' => __( 'View Project', 'hm_theme' ),
        'search_items' => __( 'Search Projects', 'hm_theme' )
	),
    'capability_type' => 'post',
    'supports' => array( 
        'title', 
        'editor', 
        'author', 
        'thumbnail' 
        ),
    'public' => true,
    'menu_position' => 5,
    // http://melchoyce.github.io/dashicons/
    'menu_icon' => 'dashicons-smiley',
    'rewrite' => array( 'slug' => 'projects' ),
    'has_archive' => 'projects',
    'taxonomies' => array( 'project_types' )
    )
);


/** 
 * Hide admin bar on frontend for all users
 */
add_filter( 'show_admin_bar', '__return_false' );


/** 
 * Register navigation menus 
 */
register_nav_menu( 'head_primary', __( 'Primary Header Navigation', 'hm_theme' ) );
register_nav_menu( 'footer_primary', __( 'Primary Footer Navigation', 'hm_theme' ) );


/**
 * Add a toggle to the primary navigation menu
 *
 * @param   array   $args options of wp_nav_menu()
 * @return  array   $args
 */
function hm_nav_add_toggle( $args = '' ) {

    if( $args['theme_location'] == 'head_primary' ) {
        $html  = '';
        $html .= '<nav class="%2$s-container" role="navigation"><a href="#content" title="' . __( 'Skip Navigation', 'hm_theme' ) . '">' . __( 'Skip Navigation', 'hm_theme' ) . '</a>';
        $html .= '<input type="checkbox" id="' . $args['theme_location'] . '-toggle" class="toggle ' . $args['theme_location'] . '-toggle" />';
        $html .= '<label class="toggle ' . $args['theme_location'] . '-toggle" for="' . $args['theme_location'] . '-toggle">' . __( 'Navigation', 'hm_theme' ) . '</label>';
        $html .= '<ul id="%1$s" class="%2$s">%3$s</ul>';
        $html .= '</nav>';

        $args[ 'items_wrap' ] = $html;
    }

    return $args;
}

add_filter( 'wp_nav_menu_args', 'hm_nav_add_toggle' );


/** 
 * Register footer widget area 
 */
register_sidebar( array(
	'name'=> __( 'Footer Widgets', 'hm_theme' ),
	'id' => 'footer_widgets',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h4>',
    'after_title'   => '</h4>'
	) 
);	


/** 
 * Define custom image size 
 */
add_image_size( '300x200', 300, 200, true );


/** 
 * Define custom jpeg quality 
 */
function hm_jpeg_quality() {
    return 94;
}

add_filter( 'jpeg_quality', 'hm_jpeg_quality' );


/** 
 * Remove unneccessary admin menus 
 */
function hm_remove_admin_menus () {
    // remove_menu_page( 'edit.php' );                  /* Posts */
    // remove_menu_page( 'edit.php?post_type=page' );   /* Pages */
    // remove_menu_page( 'upload.php' );                /* Media */
    remove_menu_page( 'edit-comments.php' );            /* Comments */
    // remove_menu_page( 'tools.php' );                 /* Tools */
}

add_action( 'admin_menu', 'hm_remove_admin_menus' );


/** 
 * Remove unneccessary admin dashboard widgets 
 */
function hm_remove_admin_dashboard_widgets() {
    global $wp_meta_boxes;

	unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press'] );
//	unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links'] );
	unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now'] );
	unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins'] );
	unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_recent_drafts'] );
	unset( $wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments'] );
	unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_primary'] );
	unset( $wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary'] );
}

add_action( 'wp_dashboard_setup', 'hm_remove_admin_dashboard_widgets' );


/** 
 * Configure tinyMCE features 
 * http://www.tinymce.com/wiki.php/Configuration
 */
function hm_customize_tinyMCE( $init ) {
    /* tinyMCE 3.X - disable rich text pasting */
    $init['paste_text_sticky'] = true;
    $init['paste_text_sticky_default'] = true;

    /* tinyMCE 4.X - disable rich text pasting */
    $init['paste_as_text'] = true;

    /* tinyMCE 3.X - configre format select entries */ 
    $init['theme_advanced_blockformats'] = 'h3,h4,p';

    /* tinyMCE 4.X - configre format select entries */ 
    $init['block_formats'] = __( 'Paragraph', 'hm_theme' ) . '=p;' . __( 'Heading 3', 'hm_theme' ) . '=h3;' . __( 'Heading 4', 'hm_theme' ) . '=h4';

    return $init;
}

add_filter( 'tiny_mce_before_init', 'hm_customize_tinyMCE' );


/** 
 * Configure tinyMCE button row 1 
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function hm_tinyMCE_buttons_1( $buttons ) {
    return array(
        'formatselect',
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

add_filter( 'mce_buttons', 'hm_tinyMCE_buttons_1' );


/** 
 * Configure tinyMCE button row 2 
 * http://www.tinymce.com/wiki.php/TinyMCE3x:Buttons/controls
 */
function hm_tinyMCE_buttons_2( $buttons ) {
    return array(); 
}

add_filter( 'mce_buttons_2', 'hm_tinyMCE_buttons_2' );


/** 
 * Register tinyMCE editor CSS 
 */
function hm_tinymce_custom_css() {
    add_editor_style( 'css/editor.css' );
}

add_action( 'init', 'hm_tinymce_custom_css' );


/** 
 * Custom excerpt length 
 */
function hm_custom_excerpt_length( $length ) {
    return 40;
}

add_filter( 'excerpt_length', 'hm_custom_excerpt_length' );


/** 
 * Custom template part include 
 */
function get_inc( $type, $context, $fallback ) {
    if( $context ) {
        if( is_file( TEMPLATEPATH . '/inc/' . $type . '-' . $context . '.php' ) ) {
            get_template_part( '/inc/' . $type . '-' . $context );
        } else {
            if( $fallback ) {
                get_template_part( '/inc/' . $type );
            }
        }
    } else {
        get_template_part( '/inc/' . $type );
    }
}


/** 
 * Custom template tag: the_post_time
 * Display post date and time based on global WP settings.  
 */
function the_post_time() {
    echo get_the_time( get_option( 'date_format' ) ) . ' ' . get_the_time( get_option( 'time_format' ) );
}


/** 
 * Custom template tag: get_the_super_title
 * Combines post type label and title
 *
 * @return     string  super title
 */
function get_the_super_title() {
    $html = '';

    /* archive & single */
    if( is_archive () || is_single() || is_home() ) {
        if( get_post_type() == 'post' ) {
            $html = __( 'News', 'hm_theme' );
        } else { 
            $html = get_post_type_object( get_post_type() )->labels->name;
        }
    }

    /* category, tag or taxonomy archive */
    if( is_category() || is_tag() || is_tax() ) {
        $html .= ' &ndash; ' . single_cat_title( '', 0 );
    }

    /* pages */
    if( is_page() ) {
        $html .= get_the_title();
    }

    /* 404 */
    if( is_404() ) {
        $html .= __( '404', 'hm_theme' );
    }
    
    /* search */
    if( is_search() ) {
        $html .= __( 'Search results', 'hm_theme' );
    }

    return $html;
}


/** 
 * Rewrite the search page's permalink 
 * http://example.com/search/{query} 
 */
function hm_rewrite_search() {
    if( is_search() && !empty( $_GET['s'] ) && !is_admin() ) {
        wp_redirect( home_url( '/search/' ) . urlencode( get_query_var( 's' ) ) );
        exit();
    }
}

add_action( 'template_redirect', 'hm_rewrite_search' );


/** 
 * Set search result post count to infinity 
 */
function hm_search_post_count( $query ) {
    if( is_search() && !is_admin() ) {
        $query->set( 'posts_per_page', -1 );
    }
}

add_action( 'pre_get_posts', 'hm_search_post_count' );


/**
 * Set the media library's default view to 'uploaded to this post'
 */
function hm_media_library_default_view() { ?>
<script>
    jQuery( '#wpcontent' ).ajaxStop( function() {
        var called = 0;
        if( 0 == called && jQuery( '[value="uploaded"]' ).length > 0 ) {
            jQuery( '[value="uploaded"]' ).attr( 'selected', true ).parent().trigger('change');
            called = 1;
        }
    } );
</script>
<?php
}

add_action( 'admin_footer-post-new.php', 'hm_media_library_default_view' );
add_action( 'admin_footer-post.php', 'hm_media_library_default_view' );


/**
 * Set default of link field to 'none' in media library modal
 */
update_option( 'image_default_link_type', 'none' );


/**
 * Returns post type when get_post_type() is unreliable
 * p.e. outside of loop or on taxonomy archives
 * 
 * @return  string  post type
 */
function get_post_type_advanced() {

    $post_type = get_post_type();

    if( is_post_type_archive() ) {
        $post_type = get_query_var( 'post_type' );
    }

    if( is_tax() ) {
        $post_type = get_taxonomy( get_queried_object()->taxonomy )->object_type[0];
    }

    return $post_type;
}


/**
 * Save IDs of images inserted inline to a post or page
 * to later exclude them from imagelist.php
 * @param  integer $post_id post ID
 */
function hm_save_inline_images( $post_id ) {
    $post = get_post( $post_id );

    $exclude = array();
    preg_match_all( '/wp-image-([0-9]*)/i', $post->post_content, $exclude );

    $exclude = $exclude[1];

    // convert strings to integers
    foreach( $exclude as &$id ) {
        $id = intval( $id );
    }
    unset( $id );

    // add post thumbnail ID to exlude array
    $exclude[] = get_post_thumbnail_id( $post_id );

    // save as postmeta
    update_post_meta( $post_id, 'inline-images', json_encode( $exclude ) );
}

add_action( 'save_post', 'hm_save_inline_images' );