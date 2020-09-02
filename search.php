<?php get_header(); ?>

<?php
    global $wp_query;

    $count = $wp_query->post_count;
    $key = get_search_query();

    if( get_query_var( 'error--search-term-length' ) ) {
        $message = sprintf( __( 'You search term has to have at least 3 characters.', 'port-f' ) );
    } elseif( $count == 1 ) {
        $message = sprintf( __( 'There is one search result for <em>%1$s.</em>', 'port-f' ), esc_html( $key ) );
    } elseif( $count > 1 ) {
        $message = sprintf( __( 'There are %1$s search results for <em>%2$s.</em>', 'port-f' ), esc_html( $count ), esc_html( $key ) );
    } else {
        $message = sprintf( __( 'Sorry, we couldn&apos;t find anything that matches <em>%1$s.</em>', 'port-f' ), esc_html( $key ) );
    }

    get_search_form();
?>

<p class="posts-message posts-message--results">
    <?php echo $message; ?>
</p>

<section class="posts posts--results">

<?php
    if( have_posts() ) {
        while( have_posts() ) {
            the_post();

            get_inc( 'post', get_post_type(), true );
        }

        get_inc( 'pagination', 0, 0 );

    } else {
        get_inc( 'post', 'noposts', true );
    }
?>

</section>

<?php get_footer(); ?>
