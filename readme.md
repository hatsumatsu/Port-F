# Port F
## A Wordpress Starter Theme 

**Port F** is a Wordpress theme skeleton.

## Features

### CSS

+ [LESS](http://lesscss.org/) 
+ [normalize.css](http://necolas.github.io/normalize.css/) 
+ Main breakpoint for RWD, syncd between CSS and JS 
+ Mobile drawer navigation 
+ Tiny typography fixes, micro-clearfix, selection styles, webkit scrollbar styles and more...

### Javascript 

+ [Media query based asset loader](http://modernizr.com/docs/#mq), automatically synced with main breakpoint set in LESS
+ Automatic page reload when media query state changes 
+ Scroll event replaced by requestAnimationFrame polyfill 
+ Improved window resize events
+ Global debug switch (affects console logging and JS minifying)
+ JS-boilerplates following the Revealing Module Pattern
+ [grunt-modernizr](http://github.com/Modernizr/grunt-modernizr) generates a custom build of [modernizr](http://modernizr.com)

### Automation 

+ Preprocess LESS and combine CSS
+ Autoprefix CSS
+ Minify and concetenate JS
+ Create a custom modernizr build 
+ Optimize raster images
+ Optimize SVGs
+ Create fallback PNG images for SVGs
+ FTP deployment


### functions.php

+ Smart include system to reuse template snippets based on post types
+ `<head>` cleaned from WP-bloat 
+ Custom Post Type and Custom Taxonomy boilerplates 
+ Primary header navigation
+ Secondary footer navigation 
+ Footer widget area 
+ Page excerpts 
+ Extended `<title>` text
+ Extended site description 
+ Responsive image template tag
+ Custom image size 
+ Custom JPEG quality 
+ Minimum image size for uploaded files
+ Admin CSS
+ Hide admin menu entries
+ Hide admin dashboard widgets 
+ tinyMCE button/feature configuration 
+ Custom excerpt length 
+ `the_super_title()` shortcode, combining custom post type name and title 
+ rewrite search url to `example.com/search/{query}` 
+ and much more

