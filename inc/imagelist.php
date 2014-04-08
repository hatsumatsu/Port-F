<?php

/* attached images */

$images = get_posts(
          array(
          'numberposts' => -1,
          'post_parent' => get_the_ID(),
          'post_type' => 'attachment',
          'post_mime_type' => 'image',
          'order' => 'ASC',
          'orderby' => 'menu_order',
          'exclude' => get_post_thumbnail_id( get_the_ID() )
               )
        );
if ( $images ) { ?>

<h4><?php echo __( 'Attached Images', 'hm_theme' ); ?></h4>

<ul class="imagelist">

<?php foreach( $images as $image ) {

  $original = wp_get_attachment_image_src( $image->ID, 'large' );
  $thumb = wp_get_attachment_image_src( $image->ID, 'medium' ); 

?>
      
  <li>
    <a href="<?php echo $original[0]; ?>" title="<?php echo __( 'Show Full Size', 'hm_theme' ); ?> (<?php echo size_format( filesize( get_attached_file( $image->ID ) ) ); ?>)"><img src="<?php echo $thumb[0]; ?>" alt="<?php echo $image->post_title; ?>" /></a>
    <h5><?php echo $image->post_title; ?></h5>
    <p><?php echo $image->post_content; ?></p>
  </li>

<?php } ?>

</ul>

<?php } ?>