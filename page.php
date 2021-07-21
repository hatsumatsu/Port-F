<?php get_header(); ?>

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();
?>

    <h2 class="Single-title SinglePage-title">
        <?php the_title(); ?>
    </h2>
    
    <div class="Single-content SinglePage-content Richtext">
        <?php the_content(); ?>
    </div>

<?php
        }
    }
?>

<?php get_footer(); ?>
