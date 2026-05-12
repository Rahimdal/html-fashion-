<?php get_header(); ?>

    <!-- Hero Slider Section -->
    <header class="hero-slider">
        <!-- Slide 1 -->
        <div class="slide active">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/Confident%20style%20on%20clean%20backdrop.png" alt="Confident style on clean backdrop">
            <div class="slide-content">
                <h1>The Summer Edit</h1>
                <p>Embrace the season with effortless elegance and modern silhouettes.</p>
                <a href="#" class="btn">Shop Collection</a>
            </div>
        </div>
        <!-- Slide 2 -->
        <div class="slide">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/Gemini_Generated_Image_z731hpz731hpz731.png" alt="Generated Fashion Model">
            <div class="slide-content">
                <h1>New Arrivals</h1>
                <p>Discover the latest statement pieces to elevate your wardrobe.</p>
                <a href="#" class="btn">View Lookbook</a>
            </div>
        </div>
        <!-- Slide 3 -->
        <div class="slide">
            <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/Modern%20streetwear%20in%20studio%20light.png" alt="Modern streetwear in studio light">
            <div class="slide-content">
                <h1>Evening Wear</h1>
                <p>Unforgettable styles for your most memorable nights.</p>
                <a href="#" class="btn">Explore Now</a>
            </div>
        </div>

        <!-- Slider Controls -->
        <button class="slider-btn prev-btn"><i class="fas fa-chevron-left"></i></button>
        <button class="slider-btn next-btn"><i class="fas fa-chevron-right"></i></button>

        <!-- Slider Dots -->
        <div class="slider-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </header>

    <!-- Jewelry Collection Carousel -->
    <section class="jewelry-section">
        <div class="carousel-container">
            <div class="carousel-stack">
                <!-- Decorative Loop Arrow -->
                <div class="decorative-arrow">
                    <svg viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.5 25.5C38.5 25.5 15.5 110.5 50.5 155.5C85.5 200.5 142.5 180.5 135.5 145.5C128.5 110.5 90.5 115.5 115.5 180.5C140.5 245.5 220.5 200.5 220.5 200.5" stroke="black" stroke-width="2" stroke-dasharray="6 6" stroke-linecap="round" />
                        <path d="M205 190L222 201L203 218" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <!-- Item 1: Roseline Ring -->
                <div class="carousel-item item-left-far">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/download (5).jpg" alt="The Roseline Ring">
                </div>

                <!-- Item 2: Zoe Earrings -->
                <div class="carousel-item item-left-near">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/download (8).jpg" alt="The Zoe Earrings">
                </div>

                <!-- Item 3: Hibiscus Ring II (Active) -->
                <div class="carousel-item active">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/herlb shoes.jpg" alt="The Hibiscus Ring II">
                </div>

                <!-- Item 4: Chubby Hoops -->
                <div class="carousel-item item-right-near">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/Sneakers%20for%20Women%20_%20Browns%20Shoes.jpg" alt="The Chubby Hoops">
                </div>

                <!-- Item 5: Gold Chain -->
                <div class="carousel-item item-right-far">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/STAR%20GIRL_%20LANA%20DEL%20REY%20OVERSIZED%20T-SHIRT.jpg" alt="The Chubby Hoops">
                </div>
            </div>

            <!-- Carousel Controls -->
            <div class="carousel-controls">
                <button class="nav-btn prev-nav"><i class="fas fa-arrow-left"></i></button>
                <button class="nav-btn next-nav active-btn"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </section>
    
    <!-- New Collection Grid Section -->
    <section class="collection-section">
        <h2 class="section-title">New Collection</h2>
        <div class="collection-grid">
            <!-- Column 1: Hats -->
            <div class="collection-col">
                <h3 class="category-name">Hats</h3>
                <div class="category-gallery">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hate/Classic%20Los%20Angeles%20Cap.jpg" alt="Classic Cap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hate/NY%20Caps%20%E2%80%94%20Classic%20Yankees%20Snapback%20for%20NYC%20Streetwear.jpg" alt="NY Cap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hate/White%20Cap%20with%20Pink%20Bow%20_%20Soft%20Girl%20Aesthetic%20%F0%9F%8E%80%20Coquette%20Vibes%20%E2%80%93%20White%20Cap%20with%20Pink%20Bow.jpg" alt="Coquette Cap">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hate/download (4).jpg" alt="Cap Style">
                </div>
            </div>

            <!-- Column 2: Hoodies -->
            <div class="collection-col">
                <h3 class="category-name">Hoodies</h3>
                <div class="category-gallery">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hoodis/2025%20New%20Fashion%20Trendy%20Street%20Hoodie%20Korean%20Version%20Of%20Loose%20Lazy%20Casual%20Hooded%20Printing%20Jacket%20Top%20HZ1220%20-%20Black%20_%20XXXL.jpg" alt="Trendy Hoodie">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hoodis/Printed%20Boys%20Sweatshirts%20_%20ZARA%20International.jpg" alt="Zara Hoodie">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hoodis/Webgains.jpg" alt="Streetwear Hoodie">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/hoodis/hodie%20punk%20outfit.jpg" alt="Punk Hoodie">
                </div>
            </div>

            <!-- Column 3: Shirts -->
            <div class="collection-col">
                <h3 class="category-name">Shirts</h3>
                <div class="category-gallery">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/shirt/Welcome%20to%20SHEIN.jpg" alt="Elegant Shirt">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/shirt/download (4).jpg" alt="Summer Shirt">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/shirt/download (5).jpg" alt="Styled Shirt">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/shirt/🦂✨.jpg" alt="Scorpion Shirt">
                </div>
            </div>

            <!-- Column 4: T-Shirts -->
            <div class="collection-col">
                <h3 class="category-name">T-Shirts</h3>
                <div class="category-gallery">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/tshirt/CASUAL%20SWEATSHIRT.jpg" alt="Casual Tee">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/tshirt/Raised%20Print%20T-Shirt%20Mockup_%20Showcase%20Your%20Apparel%20Designs%20%E2%9C%A8.jpg" alt="Print Tee">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/tshirt/TEXT%20PRINT%20T-SHIRT.jpg" alt="Text Tee">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/image/home-page/collation/tshirt/download (4).jpg" alt="Basic Tee">
                </div>
            </div>
        </div>
    </section>

<?php get_footer(); ?>
