<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Modern Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- Icons for navigation options -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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

            <!-- Authentic Brand Logo Placeholder -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo">NOVA</a>

            <!-- Navigation Links -->
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item"><a href="#" class="nav-link">New In</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Collections</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Accessories</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Journal</a></li>
            </ul>

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
