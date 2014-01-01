<form action="<?php bloginfo( 'wpurl' ); ?>" method="get" class="search_form" role="search">
        <input type="text" name="s" id="search" value="<?php the_search_query(); ?>" />
        <input type="submit" value="<?php _e( 'Search' ); ?>"  />
</form>