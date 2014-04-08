<?php wp_nav_menu( array( 
	'theme_location' => 'head_primary', 
	'container' => 0,
	'items_wrap' => '<nav class="%2$s-container" role="navigation"><a href="#content" title="' . __( 'Skip Navigation', 'hm_theme' ) . '">' . __( 'Skip Navigation', 'hm_theme' ) . '</a><ul id="%1$s" class="%2$s">%3$s</ul></nav>',
	'menu_class' => 'head_primary' 
) ); ?>