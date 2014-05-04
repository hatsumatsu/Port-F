<article>

    <h2><?php the_title(); ?></h2>

    <time class="posttime"><?php the_post_time(); ?></time>
    
    <?php the_content(); ?>

    <?php // echo wp_get_attachment_image( get_the_ID(), "medium" ); ?>

    <?php echo size_format( filesize( get_attached_file( get_the_ID() ) ) ); ?>

</article>