<?php
    $coverID = get_post_thumbnail_id();

    $class = '';
    $class .= ( $coverID ) ? ' has-cover' : '';
?>


<article class="post post--<?php echo esc_attr( get_post_type_advanced() ); ?><?php echo esc_attr( $class ); ?>">

<?php
    if( $coverID ) {
?>
    <a href="<?php the_permalink(); ?>">
        <figure class="post-image post-image--<?php echo esc_attr( get_post_type_advanced() ); ?>">
<?php
        the_responsive_image(
            $coverID,
            array(
                'tiny',
                'thumbnail',
                'medium',
                'large',
                'larger',
                'full'
            ),
            array(
                'class' => 'post-image-image post-image-image--' . get_post_type_advanced()
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
