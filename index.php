<?php get_header(); ?>

<section class="posts posts--<?php echo get_post_type_advanced(); ?>">

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();

            get_inc( 'post', get_post_type(), true );
        }

        get_inc( 'pagination', 0, 0 );

    } else {
        get_inc( 'post', 'noposts', true );
    }
?>

</section>

<?php get_footer(); ?>
