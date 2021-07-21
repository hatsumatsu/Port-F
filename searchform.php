<form
    action="<?php echo esc_attr( get_bloginfo( 'wpurl' ) ); ?>"
    method="get"
    class="Searchform"
    role="search">

    <input
        type="text"
        class="Searchform-text"
        name="s"
        id="search"
        value="<?php the_search_query(); ?>"
        placeholder="<?php echo esc_attr( __( 'Enter your search term...', 'port-f' ) ); ?>">

    <input
        type="submit"
        class="Searchform-submit"
        value="<?php echo __( 'Search', 'port-f' ); ?>">

</form>
