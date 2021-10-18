<?php

/**
 * Register navigation menus
 */
function navRegisterMenus() {
    register_nav_menu( 'header', __( 'Primary Header Navigation', 'port-f' ) );
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
    if( isset( $args['base_class'] ) ) {
        $baseClass = $args['base_class'];
    } else {
        $baseClass =  ucfirst( $args['theme_location'] ) . 'Nav';
    }

    $html  = '';

    $html .= '<nav class="Nav ' . esc_attr( $baseClass ) . '" id="' . esc_attr( $baseClass ) . '" role="navigation" data-Nav-role="nav" data-Nav-id="' . esc_attr( $args['theme_location'] ) . '">';

    $html .= '<ul class="Nav-list ' . esc_attr( $baseClass ) . '-list">%3$s</ul>';
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
    if( isset( $args->base_class ) ) {
        $baseClass = $args->base_class;
    } else {
        $baseClass =  ucfirst( $args['theme_location'] ) . 'Nav';
    }

    $classes[] = 'Nav-list-item';
    $classes[] = '' . esc_attr( $baseClass ) . '-list-item';

    return $classes;
}

add_filter( 'nav_menu_css_class', 'navModifyItemClasses', 10, 4 );
