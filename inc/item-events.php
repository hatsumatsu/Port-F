<article>

    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

    <h3><?php the_event_date(); ?></h3>
    <h4><?php echo human_time_diff( get_event_date( 'U' ) ); ?>

        <?php if( time() - get_event_date( 'U' ) < 0 ) { _e( ' left' ); } else { _e( ' ago' ); } ?></h4>
    
    <?php the_content(); ?>

</article>