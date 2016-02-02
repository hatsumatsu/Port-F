<form action="<?php bloginfo( 'wpurl' ); ?>" method="get" class="searchform" role="search">
    <input type="text" class="searchform-text" name="s" id="search" value="<?php the_search_query(); ?>" placeholder="<?php echo esc_attr( __( 'Enter your search term...', 'port-f' ) ); ?>">
    <input type="submit" class="searchform-submit" value="<?php _e( 'Search' ); ?>">
</form>