<?php get_header(); ?>

<section class="Posts">

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();

            getPart( 'Post' );
        }

        getPart( 'Pagination' );

    } else {
        getPart( 'PostNone' );
    }
?>

</section>

<?php get_footer(); ?>
