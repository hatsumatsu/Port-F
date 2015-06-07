<article class="post post--<?php echo get_post_type_advanced(); ?>">

    <h2>
    	<a href="<?php the_permalink(); ?>">
    		<?php the_title(); ?>
    	</a>
    </h2>
    <h3><?php the_event_date(); ?></h3>
    <time class="post-time" datetime="<?php the_time( 'Y-m-d\TH:i' ); ?>">
    	<?php the_post_time(); ?>
    </time>
    
    <?php the_content(); ?>

</article>