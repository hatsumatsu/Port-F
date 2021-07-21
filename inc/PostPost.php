<article class="Post post">

    <h2 class="Post-title PostPost-title">
        <a href="<?php the_permalink(); ?>">
            <?php the_title(); ?>
        </a>
    </h2>

    <time class="Post-time PostPost-time" datetime="<?php echo esc_attr( postTime( 'Y-m-d\TH:i' ) ); ?>">
        <?php postTime(); ?>
    </time>

    <div class="Post-content PostPost-content RichText">
        <?php the_content(); ?>
    </div>

</article>
