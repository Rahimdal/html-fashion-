<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <!-- Transparent Navbar -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <!-- Mobile Menu Toggle -->
            <div class="mobile-toggle" id="mobile-toggle">
                <i class="fas fa-bars"></i>
            </div>

            <!-- Authentic Brand Logo -->
            <div class="brand-logo-container">
                <?php
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    echo '<a href="' . esc_url(home_url('/')) . '" class="brand-logo">' . get_bloginfo('name') . '</a>';
                }
                ?>
            </div>

            <!-- Navigation Links -->
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-menu',
                'menu_id'        => 'nav-menu',
                'fallback_cb'    => 'nova_fashion_fallback_menu',
            ));

            function nova_fashion_fallback_menu() {
                ?>
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item"><a href="#" class="nav-link">New In</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Collections</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Accessories</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Journal</a></li>
                </ul>
                <?php
            }
            ?>

            <!-- Utility Icons -->
            <div class="nav-icons">
                <a href="#" class="icon-link"><i class="fas fa-search"></i></a>
                <a href="#" class="icon-link"><i class="far fa-user"></i></a>
                <a href="#" class="icon-link cart-icon">
                    <i class="fas fa-shopping-bag"></i>
                    <span class="cart-count">0</span>
                </a>
            </div>
        </div>
    </nav>

