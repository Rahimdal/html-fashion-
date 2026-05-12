<?php
function nova_fashion_enqueue_assets() {
    // Fonts
    wp_enqueue_style('nova-fonts', 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap', array(), null);
    
    // Icons
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');

    // Main Stylesheet
    wp_enqueue_style('nova-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));

    // GSAP
    wp_enqueue_script('gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), '3.12.2', true);
    
    // Lenis
    wp_enqueue_script('lenis', 'https://unpkg.com/lenis@1.1.9/dist/lenis.min.js', array(), '1.1.9', true);

    // Custom Scripts - Depends on GSAP and Lenis
    wp_enqueue_script('nova-script', get_template_directory_uri() . '/script.js', array('gsap', 'lenis'), wp_get_theme()->get('Version'), true);
}
add_action('wp_enqueue_scripts', 'nova_fashion_enqueue_assets');

function nova_fashion_theme_support() {
    // Basic support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'nova-fashion'),
    ));
}
add_action('after_setup_theme', 'nova_fashion_theme_support');

// Add class to nav menu links
function nova_fashion_add_menu_link_class($atts, $item, $args) {
    if (isset($args->theme_location) && $args->theme_location == 'primary') {
        $atts['class'] = 'nav-link';
    }
    return $atts;
}
add_filter('nav_menu_link_attributes', 'nova_fashion_add_menu_link_class', 1, 3);


