<?php get_header(); ?>

<?php get_inc( 'before', get_post_type(), false ); ?>

<?php if( have_posts() ) { ?>

<ul class="postlist <?php echo get_post_type(); ?>list">

    <?php while( have_posts() ) { the_post(); ?>

        <?php get_inc( 'li', get_post_type(), true ); ?>

    <?php } /* endwhile */ ?>

</ul>

<?php get_inc( 'pagination', 0, 0 ); ?>

<?php } /* endif */ ?>

<?php get_footer(); ?>