<?php get_header(); ?>

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();
?>

    <h2 class="single-title single-title--<?php echo esc_attr( get_post_type_advanced() ); ?>">
        <?php the_title(); ?>
    </h2>

    <div class="single-content single-content--<?php echo esc_attr( get_post_type_advanced() ); ?> inline-content">
        <?php the_content(); ?>
    </div>

<?php
        }
    }
?>

<?php get_footer(); ?>
