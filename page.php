<?php get_header(); ?>

<?php 
	if( have_posts() ) {
		while( have_posts() ) { 
			the_post(); 
?>

	<h2><?php the_title(); ?></h2>
	<div class="inline-content">   
		<?php the_content(); ?>
	</div>

<?php 
		}

	}
?>

<?php get_inc( 'downloads', 0, 0 ); ?>

<?php get_footer(); ?>