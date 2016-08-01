<?php get_header(); ?>

<?php get_inc( 'before', get_post_type(), false ); ?>

<section class="posts posts--<?php echo esc_attr( get_post_type_advanced() ); ?>"
    data-url="<?php echo esc_attr( get_current_archive_url() ); ?>"
    data-page="<?php echo esc_attr( get_query_var( 'paged' ) ); ?>"
    data-pages-total="<?php echo esc_attr( $wp_query->max_num_pages ); ?>">

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
