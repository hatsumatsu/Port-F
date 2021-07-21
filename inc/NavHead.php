<button
    class="Nav-toggle NavHead-toggle"
    title="<?php echo esc_attr( __( 'Toggle Navigation', 'port-f' ) ); ?>"
    data-nav-role="toggle"
    data-nav-id="head">

    <?php echo __( 'Navigation', 'port-f' ); ?>

</button>


<?php

wp_nav_menu(
    array(
        'theme_location' => 'head'
    )
);
