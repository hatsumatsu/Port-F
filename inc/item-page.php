<article class="post post-<?php echo get_post_type(); ?>">

    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

    <time class="posttime"><?php the_post_time(); ?></time>
    
    <?php the_content(); ?>

</article>