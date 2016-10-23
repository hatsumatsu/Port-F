<?php get_header(); ?>

<?php
    global $wp_query;
    $count = $wp_query->post_count;
    $key = get_search_query();

    if( $count == 1 ) {
        $message = sprintf( __( 'There is one search result for <em>%1$s.</em>', 'port-f' ), esc_html( $key ) );
    } elseif( $count > 1 ) {
        $message = sprintf( __( 'There are %1$s search results for <em>%2$s.</em>', 'port-f' ), esc_html( $count ), esc_html( $key ) );
    } elseif( get_query_var( 'error--search-term-length' ) ) {
        $message = sprintf( __( 'You search term has to have at least 3 characters.', 'port-f' ) );
    } else {
        $message = sprintf( __( 'Sorry, we couldn&apos;t find anything that matches <em>%1$s.</em>', 'port-f' ), esc_html( $key ) );
    }

    get_search_form();
?>

<p class="posts-message posts-message--results">
    <?php echo $message; ?>
</p>

<?php
    if( have_posts() ) {
?>

<section class="posts posts--results">

<?php
        $post_types = get_post_types(
            array(
                'public' => true,
                'exclude_from_search' => false
                )
            );

        foreach( $post_types as $post_type ) {

            wp_reset_query();
            $query = new WP_Query(
                array(
                    'post_type' => $post_type,
                    'posts_per_page' => -1,
                    's' => $key
                )
            );

            $post_type_object = get_post_type_object( $post_type );

            if( $query->post_count > 0 ) {
?>

        <section class="posts posts--<?php echo $post_type; ?>">
            <h4>
                <?php echo esc_html( $post_type_object->labels->name ) ?>
            </h4>

<?php
                while( $query->have_posts() ) {
                    $query->the_post();
                    get_inc( 'post', $post_type, true );

                }
?>

        </section>

<?php
            }
?>

<?php
        }
?>

</section>

<?php
    }
?>

<?php get_footer(); ?>
