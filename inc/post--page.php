<article class="post post--<?php echo esc_attr( get_post_type_advanced() ); ?>">

    <h2 class="post-title post-title--<?php echo esc_attr( get_post_type_advanced() ); ?>">
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

    <time class="post-time post-time--<?php echo esc_attr( get_post_type_advanced() ); ?>" datetime="<?php echo esc_attr( get_the_time( 'Y-m-d\TH:i' ) ); ?>">
        <?php the_post_time(); ?>
    </time>

    <div class="post-content post-content--<?php echo esc_attr( get_post_type_advanced() ); ?> inline-content">
        <?php the_content(); ?>
    </div>

</article>
