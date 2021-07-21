<?php

global $wp_query;
global $wp_rewrite;

$pagination = array(
    'base'      => @add_query_arg( 'page', '%#%' ),
    'format'    => '',
    'prev_text' => '←',
    'next_text' => '→',
    'total'     => $wp_query->max_num_pages,
    'current'   => ( $wp_query->query_vars['paged'] > 1 ) ? $wp_query->query_vars['paged'] : 1,
    'show_all'  => false,
    'type'      => 'plain'
);

if( $wp_rewrite->using_permalinks() ) {
    $pagination['base'] = user_trailingslashit( trailingslashit( get_pagenum_link( 1 ) ) . get_option( 'custom_pagination_base', 'page' ) . '/%#%/', 'paged' );
}

?>

<nav class="Pagination">
    <?php echo paginate_links( $pagination ); ?>
</nav>
