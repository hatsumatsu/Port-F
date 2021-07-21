<?php get_header(); ?>

<?php getPart( 'Before', get_post_type() ); ?>

<section class="Posts Posts<?php echo esc_attr( ucfirst( get_post_type_advanced() ) ); ?>">

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();

            getPart( 'Post', get_post_type(), true );
        }

        getPart( 'Pagination' );

    } else {
        getPart( 'Post', 'noposts', true );
    }
?>

</section>

<?php get_footer(); ?>
