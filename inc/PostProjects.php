<?php
    $imageId = get_post_thumbnail_id();

    $class = '';
    $class .= ( $imageId ) ? ' has-image' : ' has-no-image';
?>


<article class="Post PostProjects">

<?php
    if( $imageId ) {
?>
    <a href="<?php the_permalink(); ?>">
        <figure class="Post-image PostProjects-image">
<?php
        responsiveImage(
            $imageId,
            array(
                'class' => 'Post-image-img PostProjects-image-img'
            )
        );
?>
        </figure>
    </a>
<?php
    }
?>

    <h2 class="Post-title PostProjects-title">
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

</article>
