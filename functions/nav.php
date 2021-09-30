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
    $html  = '';

    $html .= '<nav class="Nav ' . esc_attr( ucfirst( $args['theme_location'] ) ) . 'Nav" id="' . esc_attr( ucfirst( $args['theme_location'] ) ) . 'Nav" role="navigation" data-Nav-role="nav" data-Nav-id="' . esc_attr( $args['theme_location'] ) . '">';
    
    if( $args['theme_location'] === 'head' ) {
        $html .= '<a href="#content" class="Nav-skip ' . esc_attr( ucfirst( $args['theme_location'] ) ) . 'Nav-skip" title="' . esc_attr( __( 'Skip Navigation', 'port-f' ) ) . '">' . __( 'Skip Navigation', 'port-f' ) . '</a>';
    }

    $html .= '<ul class="Nav-list ' . esc_attr( ucfirst( $args['theme_location'] ) ) . 'Nav-list">%3$s</ul>';
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
    $classes[] = 'Nav-list-item';
    $classes[] = '' . esc_attr( ucfirst( $args->theme_location ) ) . 'Nav-list-item';

    return $classes;
}

add_filter( 'nav_menu_css_class', 'navModifyItemClasses', 10, 4 );
