<!-- FACEBOOK -->
<meta property="og:site_name" content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
<meta property="og:description" content="<?php echo esc_attr( getPageDescription() ); ?>">
<meta property="og:title" content="<?php echo esc_attr( getPageTitle() ); ?>">
<meta property="og:type" content="website">
<meta property="og:image" content="<?php echo esc_attr( getPageImage() ); ?>">

<!-- TWITTER -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="<?php echo esc_attr( esc_url(  $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] ) ); ?>">
<meta name="twitter:title" content="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
<meta name="twitter:description" content="<?php echo esc_attr( getPageDescription() ); ?>">
<meta name="twitter:image" content="<?php echo esc_attr( getPageImage() ); ?>">

<meta name="twitter:site" content="@...">
<meta name="twitter:creator" content="@...">
