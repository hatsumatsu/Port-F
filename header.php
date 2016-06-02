<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head data-wpurl="<?php bloginfo( 'url' ); ?>" data-project="<?php echo esc_attr( get_theme_directory_name() ); ?>">
    <meta charset="utf-8">
    
    <?php wp_head(); ?>

    <script>
        document.getElementsByTagName( 'html' )[0].className += ' js';
        document.getElementsByTagName( 'html' )[0].className = document.getElementsByTagName( 'html' )[0].className.replace( ' no-js', '' );
    </script>    

    <meta name="description" content="<?php echo esc_attr( get_site_description() ); ?>">
    
    <meta name="HandheldFriendly" content="True">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <meta http-equiv="cleartype" content="on"> 

    <link rel="icon" href="<?php bloginfo( 'template_directory' ); ?>/img/favicon.png" type="image/png">

    <?php get_inc( 'head', 'facebook', 0 ); ?>
    
    <?php get_inc( 'head', 'twitter', 0 ); ?>    
</head>
<body <?php body_class(); ?>>
	<div class="shell">
		<section class="head" role="banner">

            <h1>
                <a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
                    <?php bloginfo( 'name' ); ?>
                </a>
            </h1>
			
            <?php get_inc( 'nav', 'head-primary', 0 ); ?>
			
		</section><!-- end .head -->
		<section class="content" role="main" id="content">