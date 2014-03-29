<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head data-wpurl="<?php bloginfo( 'url' ); ?>">
    <meta charset="utf-8">
    <title><?php bloginfo( "name" ); ?> <?php wp_title( ' – ', 'left' ); ?></title>
    <meta name="description" content="<?php echo esc_attr( get_bloginfo( 'description' ) ); ?>">
    
    <?php wp_head(); ?>

    <meta name="HandheldFriendly" content="True">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="cleartype" content="on"> 

    <link rel="icon" href="<?php bloginfo( 'template_directory' ); ?>/img/favicon.png" type="image/png">
</head>
<body <?php body_class(); ?>>
	<div id="shell">
		<section id="head" class="head" role="banner">
			
            <h1><a href="<?php bloginfo( 'url' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"><?php bloginfo( "name" ); ?></a></h1>
			
            <?php get_template_part( '/inc/nav-head-primary' ); ?>
			
            <?php if ( get_the_super_title() != '' ) { ?>
            <h2><?php echo get_the_super_title(); ?></h2>
            <?php } ?>

		</section><!-- end #head -->
		<section id="content" class="content" role="main">