<?php

$files = get_posts(
	array(
		'post_type' 		=> 'attachment',
		'post_mime_type' 	=> 'application',
		'posts_per_page' 	=> -1,
		'post_parent' 		=> get_the_ID(),
		'orderby' 			=> 'menu_order',
		'order' 			=> 'ASC'
	)
);

if( $files ) { 
?>

<section class="downloads">
	<h4>
		<?php echo __( 'Downloads', 'port-f' ); ?>
	</h4>

<?php 
	foreach( $files as $file ) {
		$url = wp_get_attachment_url( $file->ID );
?>
	<a href="<?php echo esc_url( $url ); ?>" title="<?php echo esc_attr( __( 'Download', 'port-f' ) ); ?>" class="download">
		<span class="download-title">
			<?php echo $file->post_title; ?>
		</span>
		<span class="download-filesize">
			<?php echo sprintf( __( '(%s)', 'port-f' ), size_format( filesize( get_attached_file( $file->ID ) ) ) ); ?>
		</span>
	</a> 
<?php 
		} 
?>

</section>

<?php 
	}