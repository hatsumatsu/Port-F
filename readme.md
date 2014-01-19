# Port F
## A Wordpress Starter Theme 

**Port F** is a starter theme for Wordpress with lots of features and almost no default design. It's meant as a starting point for the development of fully customized wordpress themes. 

**Port F** uses [grunt](http://gruntjs.com/) to preprocess and autoprefix LESS, minify and combine javascript and optimize images. 
Use `grunt watch` to process LESS and JS on the fly. `grunt build` additionally optimizes all images.

## Features

### CSS

+ [LESS](http://lesscss.org/) 
+ [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer/) 
+ [normalize.css](http://necolas.github.io/normalize.css/) 
+ main breakpoint (768px) for RWD, syncd between CSS and JS 
+ tiny typography fixes, micro-clearfix, selection styles, webkit scrollbar styles and much more...

### Javascript 

+ [media query dependant asset loader](http://modernizr.com/docs/#mq), automatically synced with major breakpoint set in LESS.
+ global debug switch (affects console logging and JS minifying)
+ object oriented JS-boilerplates 
+ [modernizr](http://modernizr.com/) boilerplate

### functions.php

+ Smart include system to resuse template snippets depending on post types
+ `<head>` cleaned from WP-bloat 
+ Custom Post Type and Custom Taxonomy boilerplates 
+ Primary header navigation
+ Secondary footer navigation 
+ Footer widget area 
+ Custom image size 
+ Custom JPEG compression quality 
+ Hide admin menu entries
+ Hide admin dashboard widgets 
+ tinyMCE button/feature configuration 
+ Custom excerpt length 
+ `the_super_title()` shortcode, combining custom post type name and title 
+ rewrite search url to `example.com/search/{query}` 

