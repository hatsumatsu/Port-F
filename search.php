<?php get_header(); ?>

<?php 
        
$search = &new WP_Query( 's=' . $s . '&showposts=-1' ); 

$key = wp_specialchars( $s, 1 ); 

$count = $search->post_count;

?>

<?php get_search_form(); ?>

<p class="message">

<?php if( $count > 0 ) { ?>

    <?php _e( 'There are ' . $count . ' search results for ' ) ?>

    <em><?php echo $key; ?></em>.

<?php } elseif( $count == 1 ) { ?>

    <?php _e( 'There is one search result for ' ) ?>

    <em><?php echo $key; ?>.</em>

<?php } else { ?>

    <?php _e( 'Sorry, we couldn&apos;t find anything that matches ' ); ?>

    <em><?php echo $key; ?></em>.

<?php } ?>

</p>  

<?php if ( have_posts() ) { ?>  

<section class="results">
            
<?php 

$post_types = get_post_types( array( 'public' => true ) );

foreach( $post_types as $post_type ) { 

?>

    <?php $query = query_posts( $query_string . '&posts_per_page=-1&post_type=' . $post_type ); ?>
    
    <?php $post_type_obj = get_post_type_object( $post_type );
          $post_type_label = $post_type_obj->labels->name; 

    ?>
          

    <?php if ( $query ) { ?>  

    	<h2><?php echo _( $post_type_label ); ?></h2>        
        
    	<section class="posts posts<?php echo $post_type; ?>">

    	<?php while ( have_posts( )) { the_post(); ?>  
      
            <?php get_inc( 'item', get_post_type(), true ); ?>

    	<?php } /* endwhile */ ?>  
      
    	</section> 
      
    <?php } ?>        


    <?php wp_reset_query(); ?>

<?php } ?>
      
</section>       
            
<?php } /* endif */ ?>  

<?php get_footer(); ?>