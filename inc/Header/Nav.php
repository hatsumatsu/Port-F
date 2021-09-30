<button
    class="HeaderNav-toggle"
    title="<?php echo esc_attr( __( 'Toggle Navigation', 'port-f' ) ); ?>"
    data-HeaderNav-role="toggle"
    data-HeaderNav-id="header">

    <?php echo __( 'Navigation', 'port-f' ); ?>

</button>


<?php

wp_nav_menu(
    array(
        'theme_location' => 'header'
    )
);
