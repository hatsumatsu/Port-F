<?php

global $wp_rewrite;

$current = ( $wp_query->query_vars['paged'] > 1 ) ? $wp_query->query_vars['paged'] : 1;
$pagination = array(
    'base'      => @add_query_arg( 'page', '%#%' ),
    'format'    => '',
    'prev_text' => '&lsaquo;',
    'next_text' => '&rsaquo;',
    'total'     => $wp_query->max_num_pages,
    'current'   => $current,
    'show_all'  => false,
    'type'      => 'plain'
);

if( $wp_rewrite->using_permalinks() ) {
    $pagination['base'] = user_trailingslashit( trailingslashit( get_pagenum_link( 1 ) ) . __( 'page', 'port-f' ) . '/%#%/', 'paged' );
}

?>

<nav class="pagination">
    <?php echo paginate_links( $pagination ); ?>
</nav>
