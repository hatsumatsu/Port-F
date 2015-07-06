<?php
/**
 * i11n
 */
load_theme_textdomain( 'hm-theme', get_stylesheet_directory() . '/languages' );


/** 
 * Register theme CSS
 */
function hm_theme_css() {
    wp_register_style( 'hm-normalize', get_template_directory_uri() . '/css/normalize.css', 0, 'screen' );
    wp_register_style( 'hm-theme', get_template_directory_uri() . '/style.css', array( 'hm-normalize' ), 0, 'screen' );

    wp_enqueue_style( 'hm-normalize' );
    wp_enqueue_style( 'hm-theme' );
} 

add_action( 'wp_enqueue_scripts', 'hm_theme_css' );


/** 
 * Register theme JS 
 */
function hm_theme_js() {
    // load the bundled jQuery in the footer 
    if( !is_admin() ) {  
        wp_deregister_script( 'jquery' );  
        wp_register_script( 'jquery', includes_url( 'js/jquery/jquery.js' ), array(), '1.11.1', true );  
        wp_enqueue_script('jquery');  
    }  

    wp_register_script( 'hm-critical', get_template_directory_uri() . '/js/critical.min.js', array( 'jquery' ), '0.4', true );
    
    wp_enqueue_script( 'hm-critical' );
} 

add_action( 'wp_enqueue_scripts', 'hm_theme_js' );


/**
 * Register admin CSS
 */
function hm_admin_css() {
    wp_register_style( 'hm-admin', get_template_directory_uri() . '/css/admin.css', array(), 0 );
    wp_enqueue_style( 'hm-admin' );
}

add_action( 'admin_print_styles', 'hm_admin_css' );
add_action( 'admin_print_styles-media-upload-popup', 'hm_admin_css' );


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
 * Remove unneccessary or unsafe <meta> tags
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
 * Enable page excerpts
 *
 */
function hm_page_excerpts() {
    add_post_type_support( 'page', 'excerpt' );
}

add_filter( 'init', 'hm_page_excerpts' );


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
            'name' => __( 'Project Types', 'hm-theme' ), 
            'singular_name' => __( 'Project Type', 'hm-theme' )
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
        'name' => __( 'Projects', 'hm-theme' ), 
        'singular_name' => __( 'Project', 'hm-theme' ),
        'menu_name' => __( 'Projects', 'hm-theme' ),
        'menu_admin_bar' => __( 'Project', 'hm-theme' ),
		'all_items' => __( 'All Projects', 'hm-theme' ),
		'add_new_item' => __( 'Add new Project', 'hm-theme' ),
		'edit_item' => __( 'Edit Project', 'hm-theme' ),
		'new_item' => __( 'Add Project', 'hm-theme' ),
		'view_item' => __( 'View Project', 'hm-theme' ),
        'search_items' => __( 'Search Projects', 'hm-theme' )
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
register_nav_menu( 'head-primary', __( 'Primary Header Navigation', 'hm-theme' ) );
register_nav_menu( 'footer-primary', __( 'Primary Footer Navigation', 'hm-theme' ) );


/**
 * Add a toggle to the primary navigation menu
 *
 * @param   array   $args options of wp_nav_menu()
 * @return  array   $args
 */
function hm_nav_add_toggle( $args = '' ) {

    if( $args['theme_location'] == 'head-primary' ) {
        $html  = '';
        $html .= '<nav class="nav-%2$s" role="navigation" id="nav-%2$s"><a href="#content" title="' . __( 'Skip Navigation', 'hm-theme' ) . '">' . __( 'Skip Navigation', 'hm-theme' ) . '</a>';
        $html .= '<a class="toggle ' . $args['theme_location'] . '-toggle" title="' . __( 'Toggle Navigation', 'hm-theme' ) . '">' . __( 'Navigation', 'hm-theme' ) . '</a>';
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
	'name'=> __( 'Footer Widgets', 'hm-theme' ),
	'id' => 'footer', 
    'before_widget' => '<div id="%1$s" class="widget widget--footer %2$s">',
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

    /* tinyMCE 3.X - format select entries */ 
    $init['theme_advanced_blockformats'] = 'h3,h4,p';

    /* tinyMCE 4.X - format select entries */ 
    $init['block_formats'] = __( 'Paragraph', 'hm-theme' ) . '=p;' . __( 'Heading 3', 'hm-theme' ) . '=h3;' . __( 'Heading 4', 'hm-theme' ) . '=h4';

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
 * Customize auto excerpt
 * + custom word count
 * + Add ellispsis to auto-excerpts when text is too long 
 * + keep basic text formats
 */
function customize_auto_excerpt( $text ) {
    global $post;

    $raw_excerpt = $text;

    if( !$post->post_excerpt || $post->post_excerpt == '' ) {
        $text = get_the_content();
        $text = strip_shortcodes( $text );
        $text = apply_filters( 'the_content', $text );
        $text = str_replace( '\]\]\>', ']]&gt;', $text );
        $text = preg_replace( '@<script[^>]*?>.*?</script>@si', '', $text );
        $text = strip_tags( $text, '<strong><b><em><i><code><p>' );
        $words = explode( ' ', $text, 40 + 1 );

        $words = preg_split( "/[\n\r\t ]+/", $text, 40 + 1, PREG_SPLIT_NO_EMPTY );
        
        if( count( $words ) > 40 ) {
            array_pop( $words );
            array_push( $words, '&hellip;' );
            $text = implode( ' ', $words );

            $text = force_balance_tags( $text );
        } 

    } 

    return apply_filters( 'wp_trim_excerpt', $text, $raw_excerpt );
}

add_filter( 'get_the_excerpt', 'customize_auto_excerpt' );


/** 
 * Custom template part include 
 */
function get_inc( $type, $context, $fallback ) {
    if( $context ) {
        if( is_file( TEMPLATEPATH . '/inc/' . $type . '--' . $context . '.php' ) ) {
            get_template_part( '/inc/' . $type . '--' . $context );
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
 * Template tag: 
 * the_post_time
 * Display post date and time based on global WP settings.  
 */
function the_post_time() {
    echo get_the_time( get_option( 'date_format' ) ) . ' ' . get_the_time( get_option( 'time_format' ) );
}


/** 
 * Template tag: 
 * get_the_super_title
 * Combines post type label and title
 *
 * @return     string  super title
 */
function get_the_super_title() {
    $html = '';

    // archive & single
    if( is_archive () || is_single() || is_home() ) {
        if( get_post_type() == 'post' ) {
            $html = __( 'News', 'hm-theme' );
        } else { 
            $html = get_post_type_object( get_post_type() )->labels->name;
        }
    }

    // category, tag or taxonomy archive
    if( is_category() || is_tag() || is_tax() ) {
        $html .= ' &ndash; ' . single_cat_title( '', 0 );
    }

    // pages 
    if( is_page() ) {
        $html .= get_the_title();
    }

    // 404 
    if( is_404() ) {
        $html .= __( '404', 'hm-theme' );
    }
    
    // search 
    if( is_search() ) {
        $html .= __( 'Search results', 'hm-theme' );
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
 * Set default of link field to 'none' in media library modal
 */
update_option( 'image_default_link_type', 'none' );


/**
 * Get post type wherever get_post_type() is unreliable
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
 * 
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


/**
 * Template tag:
 * Get <title> text
 * @param  string $separator String separator
 * @return string            title text
 */
function get_site_title( $separator = ' – ' ) {
    global $wp_query;

    $title = array();

    // global site title
    $title['global'] = get_bloginfo( 'name' );

    // single / page
    $title['single'] = ( is_single() || is_page() ) ? get_the_title() : 0;

    // custom post type 
    $title['post_type'] = 0;
    if( !empty( $wp_query->query['post_type'] ) ) {
        $post_type = get_post_type_object( $wp_query->query['post_type'] );
        $title['post_type'] = $post_type->labels->name;
    }

    // paged
    $title['paged'] = ( !empty( $wp_query->query['paged'] ) ) ? __( 'Page' ) . ' ' . $wp_query->query['paged'] : 0;

    // date archive
    $title['date'] = 0;
    if( is_date() ) {
        if( is_year() ) {
            $title['date'] = $wp_query->query['year'];
        }

        if( is_month() ) {
            $title['date'] = $wp_query->query['monthnum'] . $separator . $wp_query->query['year'];
        }

        if( is_day() ) {
            $title['date'] = $wp_query->query['day'] . $separator . $wp_query->query['monthnum'] . $separator . $wp_query->query['year'];
        }
    }

    // tags
    $title['tag'] = ( is_tag() ) ? __( 'Tag' ) . ': ' . single_cat_title( '', false ) : 0;   

    //categories
    $title['tag'] = ( is_category() ) ? __( 'Category' ) . ': ' . single_cat_title( '', false ) : 0;   

    // custom taxonomy terms
    $title['term'] = 0;
    if( !empty( $wp_query->query_vars['term'] ) ) {
        $taxonomy_labels = get_taxonomy_labels( get_taxonomy( $wp_query->query_vars['taxonomy'] ) );
        $term = get_term_by( 'slug', $wp_query->query_vars['term'], $wp_query->query_vars['taxonomy'] );
        if( $taxonomy_labels && $term ) {
            $title['term'] = $taxonomy_labels->name . ': ' . $term->name;
        }
    }

    // author
    $title['author'] = 0;
    if( !empty( $wp_query->query['author_name'] ) ) {
        $author = get_user_by( 'slug', $wp_query->query['author_name'] );
        $title['author'] = $author->first_name . ' ' . $author->last_name;
    }
        
    $title_string = '';
    $title_string .= ( $title['single'] ) ? $title['single'] . $separator : '';
    $title_string .= ( $title['term'] ) ? $title['term'] . $separator : '';
    $title_string .= ( $title['tag'] ) ? $title['tag'] . $separator : '';
    $title_string .= ( $title['post_type'] ) ? $title['post_type'] . $separator : '';
    $title_string .= ( $title['date'] ) ? $title['date'] . $separator : '';
    $title_string .= ( $title['author'] ) ? $title['author'] . $separator : '';
    $title_string .= ( $title['paged'] ) ? $title['paged'] . $separator : '';
    $title_string .= $title['global'];

    return $title_string;
}


/**
 * Template tag:
 * Get <meta> description
 * @return string description text
 */
function get_site_description() {
    global $wp_query,
           $post;

    $description = get_bloginfo( 'description' );

    // single / page
    if( ( is_single() || is_page() ) && !is_front_page() ) {
        $excerpt = $post->post_content;
        $description = ( !empty( $excerpt ) ) ? $excerpt : $description;
    }

    // custom taxonomy terms
    if( !empty( $wp_query->query_vars['term'] ) ) {
        $term = get_term_by( 'slug', $wp_query->query_vars['term'], $wp_query->query_vars['taxonomy'] );
        if( $term ) {
            $description = ( !empty( $term->description ) ) ? $term->description : $description;
        }
    }

    // tags
    if( is_tag() ) {
        $tag = get_term_by( 'slug', $wp_query->query['tag'], 'post_tag' );
        if( $tag ) {
            $description = ( !empty( $tag->description ) ) ? $tag->description : $description;
        }
    }

    // category
    if( is_category() ) {
        $category = get_term_by( 'slug', $wp_query->query['category_name'], 'category' );
        if( $category ) {
            $description = ( !empty( $category->description ) ) ? $category->description : $description;
        }
    }

    // author
    if( !empty( $wp_query->query['author_name'] ) ) {
        $author = get_user_by( 'slug', $wp_query->query['author_name'] );
        if( $author ) {
            $biography = get_the_author_meta( 'description', $author->ID );
            $description = ( !empty( $biography ) ) ? $biography : $description;
        }    
    }

    return wp_trim_words( $description, 115, null );
}


/**
 * Responsive image template tag
 * Needs picturefill.js included
 * Example:
 * the_responsive_image( 
 *     $image_id, 
 *     array( 
 *         'medium', 
 *         'large', 
 *         'full' 
 *     ), 
 *     array( 
 *         'sizes' => '100vw', 
 *         'alt' => 'Alt text', 
 *         'class' => 'wp-image' 
 *     ),
 *     true,
 *     true 
 *  )
 * 
 * @param  integer $id               image ID
 * @param  array $sizes              array of image size key words
 * @param  array $attributes         array of attribute / value pairs
 * @param  boolean $dimensions       add dimension attributes to <img>
 * @param  boolean|string $fallback  true to use first item in sizes array as fallback src, string to define custom fallback image size
 * @return string                    HTML <img> tag
 */
function the_responsive_image( $id, $sizes = array( 'medium', 'large', 'full' ), $attributes = array(), $dimensions = false, $fallback = false ) {
    $html = '';
    $html .= '<img';

    // srcset
    $srcset = '';
    foreach( $sizes as $size ) {
        $src = wp_get_attachment_image_src( $id, $size );
        $srcset .= $src[0] . ' ' . $src[1] . 'w,';

        if( $dimensions ) {
            $width = $src[1];
            $height = $src[2];
        }
    }

    $srcset = rtrim( $srcset, ',' );
    $attributes['srcset'] = $srcset;

    // dimensions
    if( $dimensions ) {
        $attributes['width'] = $width;
        $attributes['height'] = $height;
    }

    // src
    if( $fallback ) {
        if( is_string( $fallback ) ) {
            $src = wp_get_attachment_image_src( $id, $fallback );
        } else  {
            $src = wp_get_attachment_image_src( $id, $sizes[0] );        
        }

        $attributes['src'] = $src[0];        
    }

    // attributes
    foreach( $attributes as $attribute => $value ) {
        $html .= ' ' . $attribute . '="' . esc_attr( $value ) . '"';
    }    

    $html .= '>';

    echo $html;
}


/**
 * Modify markup of inline images added via the visual editor
 * to follow the srcset responsive image pattern
 * @param  string $html  original image markup
 * @param  int    $id    attachment ID
 * @param  string $alt   alt text 
 * @param  string $title image title
 * @return string        modified markup
 */
function responsive_image_embed( $html, $id, $alt, $title, $align = null, $size = null ) {
    $orientation = get_post_meta( $id, 'orientation', true );

    $class = '';
    $class .= ( $orientation ) ? ' orientation--' . $orientation : '';
    $class .= ( $align ) ? ' align--' . $align : '';

    $html = '';
    $html .= '<figure class="' . esc_attr( $class ) . '">';

    $fallback = wp_get_attachment_image_src( $id, 'thumbnail' );
    $html .= get_responsive_image( 
        $id, 
        array(
            'thumbnail',
            'medium',
            'large',
            'full'
        ),
        array( 
            'alt'   => $alt,
            'title' => $title,
            'src'   => $fallback[0],
            'class' => 'inline-image'
        ), 
        true 
    );

    if( $title ) {
        $html .= '<figcaption>';
        $html .= $title;
        $html .= '</figcaption>';
    }

    $html .= '</figure>';

    return $html;
}

add_filter( 'get_image_tag', 'responsive_image_embed', 10, 4 );


/**
 * Modify output of [caption] shortcode
 * @param  ?? $empty        ??
 * @param  array $attr      shortcode attribuutes
 * @param  string $content  the image markup inside [caption][/caption]
 * @return strings          HTML makrup          
 */
function modify_caption_shortcode( $empty, $attr, $content ){
    $attr = shortcode_atts( array(
        'id'      => '',
        'align'   => '',
        'width'   => '',
        'caption' => ''
    ), $attr );

    $id = ( $attr['id'] ) ? intval( str_replace( 'attachment_', '', $attr['id'] ) ) : null;

    $classes = '';
    $classes .= ( get_post_meta( $id, 'orientation', true ) ) ? ' orientation--' .  get_post_meta( $id, 'orientation', true ) : '';
    $classes .= ( $attr['align'] ) ? ' align--' .  $attr['align'] : '';

    $html = '';
    $html .= '<figure class="' . esc_attr( $classes ) . '">';

    $html .= do_shortcode( strip_tags( $content, '<img><img/><figcaption>' ) );

    if( $attr['caption'] ) {
        $html .= '<figcaption>';
        $html .= $attr['caption'];
        $html .= '</figcaption>';
    }

    $html .= '</figure>';

    return $html;
}

add_filter( 'img_caption_shortcode', 'modify_caption_shortcode', 10, 3 );


/**
 * Force minimum images dimensions on upload
 * @param  array $file file object
 * @return array       file object
 */
function minimum_image_dimensions( $file ) {
    $minimum = array( 
        'width' => 800, 
        'height' => 600 
        );
    
    $mimes = array( 
        'image/jpeg', 
        'image/png', 
        'image/gif' 
        );

    if( !in_array( $file['type'], $mimes ) ) { 
        return $file;
    }

    $image = getimagesize( $file['tmp_name'] );

    if ( $image[0] < $minimum['width'] ) {
        $file['error'] = sprintf( __( 'Image too small. Minimum width is %1$spx. Uploaded image width is %2$spx', 'hm-theme' ), $minimum['width'], $image[0] );
    } elseif ( $image[1] < $minimum['height'] ) {
        $file['error'] = sprintf( __( 'Image too small. Minimum width is %1$spx. Uploaded image width is %2$spx', 'hm-theme' ), $minimum['width'], $image[0] );
    }

    return $file;
}

add_filter( 'wp_handle_upload_prefilter', 'minimum_image_dimensions' ); 


/**
 * Get the current archive URL without page number 
 * @return  int  $url URL of the archive 
 */
function get_current_archive_url() {
    global $wp;

    $url = home_url( $wp->request );
    $url = explode( 'page/', $url );
    $url = trailingslashit( $url[0] );

    return $url;
}


/**
 * Get the theme directory name
 * @return string directory name
 */
function get_theme_directory_name() {
    $url = get_template_directory_uri();
    $url = str_replace( '/', '', str_replace( get_theme_root_uri(), '', $url ) );

    return $url;
}


/**
 * Wrap oembed in <div>
 * @param  string $html  original markup
 * @param  string $url  URL
 * @param  array $attributes  config
 * @param  int $id  post ID
 * @return string   modified markup
 */
function wrap_oembed( $html, $url, $attributes, $id ) {
    $class = '';

    if( strpos( $url, 'youtu' ) || strpos( $url, 'vimeo' ) ) {
        $class .= ' embed-video';
    }

    return '<div class="' . esc_attr( $class ) . '">' . $html . '</div>';
}

add_filter( 'embed_oembed_html', 'wrap_oembed', 99, 4 );