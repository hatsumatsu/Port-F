<?php
    $imageId = get_post_thumbnail_id();

    $class = '';
    $class .= ( $imageId ) ? ' has-image' : ' has-no-image';
?>


<article class="post post--<?php echo esc_attr( get_post_type_advanced() ); ?><?php echo esc_attr( $class ); ?>">

<?php
    if( $imageId ) {
?>
    <a href="<?php the_permalink(); ?>">
        <figure class="post-image post-image--<?php echo esc_attr( get_post_type_advanced() ); ?>">
<?php
        echo getTheResponsiveImage(
            $imageId,
            array(
                'class' => 'post-image-img post-image-img--' . get_post_type_advanced()
            )
        );
?>
        </figure>
    </a>
<?php
    }
?>

    <h2 class="post-title post-title--<?php echo esc_attr( get_post_type_advanced() ); ?>">
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

</article>
