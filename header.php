<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head
    data-wpurl="<?php echo esc_attr( get_bloginfo( 'url' ) ); ?>"
    data-project="<?php echo esc_attr( get_theme_directory_name() ); ?>">

    <meta charset="utf-8">

    <?php wp_head(); ?>

    <script>
document.documentElement.classList.add( 'js' );
document.documentElement.classList.remove( 'no-js' );
    </script>

    <meta
        name="description"
        content="<?php echo esc_attr( getPageDescription() ); ?>">

    <meta 
        name="viewport" 
        content="width=device-width, initial-scale=1">

    <?php getPart( 'Head/Icons' ); ?>

    <?php getPart( 'Head/Social' ); ?>

</head>
<body <?php body_class(); ?>>

    <div class="Shell">

        <section
            class="Header"
            role="banner">

            <?php getPart( 'Header/Title' ); ?>

            <?php getPart( 'Header/Nav' ); ?>

        </section><!-- end .head -->

        <section
            class="Content"
            role="main"
            id="content">
