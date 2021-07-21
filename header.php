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
        content="<?php echo esc_attr( get_site_description() ); ?>">

    <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0">

    <?php getPart( 'Head', 'icons', 0 ); ?>

    <?php getPart( 'Head', 'social', 0 ); ?>

</head>
<body <?php body_class(); ?>>

    <div class="Shell">

        <section
            class="head"
            role="banner">

            <h1 class="head-title">
                <a
                    href="<?php echo home_url( '/' ); ?>"
                    title="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">

                    <?php bloginfo( 'name' ); ?>

                </a>
            </h1>

            <?php getPart( 'Nav', 'head', 0 ); ?>

        </section><!-- end .head -->

        <section
            class="content"
            role="main"
            id="content">
