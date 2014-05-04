<?php get_header(); ?>

<?php if ( have_posts() ) { ?>

<?php while ( have_posts() ) { the_post(); ?>

   <?php the_content(); ?>

<?php } /* endwhile */ ?>

<?php } /* endif */ ?>

<?php get_inc( 'imagelist', 0, 0 ); ?>

<?php get_inc( 'filelist', 0, 0 ); ?>

<?php 
if( function_exists( 'the_posts_on_page' ) ) { 
	the_posts_on_page();
}
?>

<?php get_footer(); ?>