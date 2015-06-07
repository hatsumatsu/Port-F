<?php wp_nav_menu( array( 
	'theme_location' => 'footer-primary', 
	'container' => 0,
	'items_wrap' => '<nav class="%2$s-container" role="navigation"><ul id="%1$s" class="%2$s">%3$s</ul></nav>',
	'menu_class' => 'footer-primary' 
) ); ?>