<?php

/**
 * Register navigation menus
 */
function registerNavigation() {
    register_nav_menu( 'head', __( 'Primary Header Navigation', 'port-f' ) );
    register_nav_menu( 'footer', __( 'Primary Footer Navigation', 'port-f' ) );
}

add_action( 'after_setup_theme', 'registerNavigation' );



/**
 * Modify navigation markup
 * + Wrap in <nav>
 * + Add toggle
 *
 * @param   array   $args options of wp_nav_menu()
 * @return  array   $args
 */
function modifyNavigationMarkup( $args = '' ) {
    $html  = '';

    if( $args['theme_location'] == 'head' ) {
        $html .= '<a class="nav-toggle nav-toggle--' . esc_attr( $args['theme_location'] ) . '" title="' . esc_attr( __( 'Toggle Navigation', 'port-f' ) ) . '" data-nav-role="toggle" data-nav-id="' . esc_attr( $args['theme_location'] ) . '">' . __( 'Navigation', 'port-f' ) . '</a>';
    }

    $html .= '<nav class="nav--' . esc_attr( $args['theme_location'] ) . '" id="nav--' . esc_attr( $args['theme_location'] ) . '" role="navigation" data-nav-role="nav" data-nav-id="' . esc_attr( $args['theme_location'] ) . '">';
    $html .= '<a href="#content" class="nav-skip nav-skip--' . esc_attr( $args['theme_location'] ) . '" title="' . esc_attr( __( 'Skip Navigation', 'port-f' ) ) . '">' . __( 'Skip Navigation', 'port-f' ) . '</a>';

    $html .= '<ul class="nav-list nav-list--' . esc_attr( $args['theme_location'] ) . '">%3$s</ul>';
    $html .= '</nav>';

    $args['items_wrap'] = $html;
    $args['container']  = false;

    return $args;
}

add_filter( 'wp_nav_menu_args', 'modifyNavigationMarkup' );



/**
 * Modify nav item class attributes
 * @param  array $classes original class
 * @param  object $item   nav menu item object
 * @param  array $args    nav menu arguments
 * @param  int $depth     nav menu item depth
 * @return array          classes
 */
function modifyNavigationItemClasses( $classes, $item, $args, $depth ) {
    $classes[] = 'nav-list-item';
    $classes[] = 'nav-list-item--' . esc_attr( $args->theme_location );

    return $classes;
}

add_filter( 'nav_menu_css_class', 'modifyNavigationItemClasses', 10, 4 );