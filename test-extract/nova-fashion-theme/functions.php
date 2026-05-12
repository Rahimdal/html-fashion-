<?php
function nova_fashion_enqueue_assets() {
    // Fonts
    wp_enqueue_style('nova-fonts', 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap', array(), null);
    
    // Main Stylesheet
    wp_enqueue_style('nova-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // Custom Scripts
    wp_enqueue_script('nova-script', get_template_directory_uri() . '/script.js', array(), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'nova_fashion_enqueue_assets');

function nova_fashion_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'nova_fashion_theme_support');
