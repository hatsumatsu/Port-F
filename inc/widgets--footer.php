<?php
    if( is_active_sidebar( 'footer' ) ) {
?>

<aside class="widgets widgets--footer">

    <?php dynamic_sidebar( 'footer' ) ?>

</aside>

<?php
    }
?>
