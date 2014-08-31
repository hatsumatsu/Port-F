<article class="post post-<?php echo get_post_type_advanced(); ?>">

    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    
    <h3><?php the_distance(); ?></h3>

    <?php the_content(); ?>

    <address><?php the_address(); ?></address>

    <?php the_map( array( 'id' => get_the_id() ) ); ?>

</article>