<?php get_header(); ?>

<?php 
        
$search = &new WP_Query( 's=' . $s . '&showposts=-1' ); 
$key = wp_specialchars( $s, 1 ); 
$count = $search->post_count;

?>

<?php get_search_form(); ?>

<p class="message">
<?php 

if( $count > 0 ) { 
    printf( __( 'There are %1$s search results for <em>%2$s.</em>', 'hm_theme' ), $count, $key ); 
} elseif( $count == 1 ) { 
    printf( __( 'There is one search result for <em>%1$s.</em>', 'hm_theme' ), $key ); 
} else {
    printf( __( 'There are no search results for <em>%1$s.</em>', 'hm_theme' ), $key ); 
} 

?>
</p>  

<?php if( have_posts() ) { ?>  

<section class="results">
            
<?php 

$post_types = get_post_types( array( 'public' => true ) );
foreach( $post_types as $post_type ) { 

    $query = query_posts( $query_string . '&posts_per_page=-1&post_type=' . $post_type ); 
    $post_type_label = get_post_type_object( $post_type )->labels->name; 

    if( $query ) { 

?>  

    	<h2><?php echo __( $post_type_label, 'hm_theme' ); ?></h2>        
    	<section class="posts posts-<?php echo $post_type; ?>">

    	<?php while ( have_posts( )) { the_post(); ?>  
      
            <?php get_inc( 'item', $post_type, true ); ?>

    	<?php } /* endwhile */ ?>  
      
    	</section> 
      
    <?php } ?>        

    <?php wp_reset_query(); ?>

<?php } ?>
      
</section>       
            
<?php } /* endif */ ?>  

<?php get_footer(); ?>