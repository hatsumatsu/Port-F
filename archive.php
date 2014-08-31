<?php get_header(); ?>

<?php get_inc( 'before', get_post_type(), false ); ?>

<?php if( have_posts() ) { ?>

<section class="posts posts-<?php echo get_post_type_advanced(); ?>">

    <?php while( have_posts() ) { the_post(); ?>

        <?php get_inc( 'item', get_post_type(), true ); ?>

    <?php } /* endwhile */ ?>

</section>

<?php get_inc( 'pagination', 0, 0 ); ?>

<?php } /* endif */ ?>

<?php get_footer(); ?>