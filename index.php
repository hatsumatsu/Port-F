<?php get_header(); ?>

<section class="posts posts-<?php echo get_post_type_advanced(); ?>"
	data-url="<?php echo esc_attr( get_current_archive_url() ); ?>"
	data-page="<?php echo esc_attr( get_query_var( 'paged' ) ); ?>" 
	data-pages-total="<?php echo esc_attr( $wp_query->max_num_pages ); ?>">

<?php if( have_posts() ) { ?>

    <?php while( have_posts() ) { the_post(); ?>

        <?php get_inc( 'post', get_post_type(), true ); ?>

    <?php } /* endwhile */ ?>

<?php get_inc( 'pagination', 0, 0 ); ?>

<?php } else { ?>

    <?php get_inc( 'post', 'noposts', true ); ?>

<?php } ?>

</section>

<?php get_footer(); ?>