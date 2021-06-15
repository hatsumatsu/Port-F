<?php

/**
 * Register navigation menus
 */
function navRegisterMenus() {
    register_nav_menu( 'head', __( 'Primary Header Navigation', 'port-f' ) );
    register_nav_menu( 'footer', __( 'Primary Footer Navigation', 'port-f' ) );
}

add_action( 'after_setup_theme', 'navRegisterMenus' );



/**
 * Modify navigation markup
 * + Wrap in <nav>
 * + Add toggle
 *
 * @param   array   $args options of wp_nav_menu()
 * @return  array   $args
 */
function navModifyMarkup( $args = '' ) {
    $html  = '';

    $html .= '<nav class="nav--' . esc_attr( $args['theme_location'] ) . '" id="nav--' . esc_attr( $args['theme_location'] ) . '" role="navigation" data-nav-role="nav" data-nav-id="' . esc_attr( $args['theme_location'] ) . '">';
    
    if( $args['theme_location'] === 'head' ) {
        $html .= '<a href="#content" class="nav-skip nav-skip--' . esc_attr( $args['theme_location'] ) . '" title="' . esc_attr( __( 'Skip Navigation', 'port-f' ) ) . '">' . __( 'Skip Navigation', 'port-f' ) . '</a>';
    }

    $html .= '<ul class="nav-list nav-list--' . esc_attr( $args['theme_location'] ) . '">%3$s</ul>';
    $html .= '</nav>';

    $args['items_wrap'] = $html;
    $args['container']  = false;

    return $args;
}

add_filter( 'wp_nav_menu_args', 'navModifyMarkup' );



/**
 * Modify nav item class attributes
 * @param  array $classes original class
 * @param  object $item   nav menu item object
 * @param  array $args    nav menu arguments
 * @param  int $depth     nav menu item depth
 * @return array          classes
 */
function navModifyItemClasses( $classes, $item, $args, $depth ) {
    $classes[] = 'nav-list-item';
    $classes[] = 'nav-list-item--' . esc_attr( $args->theme_location );

    return $classes;
}

add_filter( 'nav_menu_css_class', 'navModifyItemClasses', 10, 4 );
