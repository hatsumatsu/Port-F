<?php get_header(); ?>

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();
?>

    <h2 class="Single-title Single<?php echo esc_attr( ucfirst( get_post_type_advanced() ) ); ?>-title">
        <?php the_title(); ?>
    </h2>

    <div class="Single-content Single<?php echo esc_attr( ucfirst( get_post_type_advanced() ) ); ?>-content RichText">
        <?php the_content(); ?>
    </div>

<?php
        }
    }
?>

<?php get_footer(); ?>
