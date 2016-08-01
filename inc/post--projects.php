<article class="post post--<?php echo get_post_type_advanced(); ?>">

<?php
    if( has_post_thumbnail() ) {
?>
    <a href="<?php the_permalink(); ?>">
        <?php the_post_thumbnail( 'medium' ); ?>
    </a>
<?php
    }
?>

    <h2>
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

</article>
