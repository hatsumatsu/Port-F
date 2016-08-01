<article class="post post--<?php echo get_post_type_advanced(); ?>">

    <h2>
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

    <time class="post-time post-time--<?php echo get_post_type_advanced(); ?>" datetime="<?php the_time( 'Y-m-d\TH:i' ); ?>">
        <?php the_post_time(); ?>
    </time>

    <div class="post-content post-content--<?php echo get_post_type_advanced(); ?> inline-content">
        <?php the_content(); ?>
    </div>

</article>
