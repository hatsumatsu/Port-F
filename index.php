<?php get_header(); ?>

<section class="Posts Posts<?php echo esc_attr( ucfirst( get_post_type_advanced() ) ); ?>">

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();

            getPart( 'Post', get_post_type(), true );
        }

        getPart( 'Pagination' );

    } else {
        getPart( 'Post', 'none', true );
    }
?>

</section>

<?php get_footer(); ?>
