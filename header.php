<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head data-wpurl="<?php bloginfo( 'url' ); ?>" data-project="<?php echo esc_attr( get_theme_directory_name() ); ?>">
    <meta charset="utf-8">
    <title><?php echo esc_html( get_site_title() ); ?></title>
    <meta name="description" content="<?php echo esc_attr( get_site_description() ); ?>">
    
    <?php wp_head(); ?>

    <meta name="HandheldFriendly" content="True">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="cleartype" content="on"> 

    <link rel="icon" href="<?php bloginfo( 'template_directory' ); ?>/img/favicon.png" type="image/png">
</head>
<body <?php body_class(); ?>>
	<div class="shell">
		<section class="head" role="banner">

            <h1><a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"><?php bloginfo( "name" ); ?></a></h1>
			
            <?php get_template_part( '/inc/nav-head-primary' ); ?>
			
            <?php if( get_the_super_title() != '' ) { ?>
            <h2><?php echo get_the_super_title(); ?></h2>
            <?php } ?>

		</section><!-- end .head -->
		<section class="content" role="main" id="content">