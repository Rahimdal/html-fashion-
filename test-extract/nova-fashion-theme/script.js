document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Reveal Animation — starts immediately as preloader is removed
    const runHeroEntrance = () => {
        if (typeof gsap === 'undefined') return;

        const firstSlide = document.querySelector('.slide.active');
        const heroHeading = firstSlide ? firstSlide.querySelector('.slide-content h1') : null;
        const heroSubtitle = firstSlide ? firstSlide.querySelector('.slide-content p') : null;
        const heroBtn = firstSlide ? firstSlide.querySelector('.slide-content .btn') : null;
        const heroImage = firstSlide ? firstSlide.querySelector('img') : null;

        // Reset positions
        if (heroHeading) gsap.set(heroHeading, { clipPath: 'inset(100% 0% 0% 0%)', y: 60, autoAlpha: 0 });
        if (heroSubtitle) gsap.set(heroSubtitle, { clipPath: 'inset(100% 0% 0% 0%)', y: 40, autoAlpha: 0 });
        if (heroBtn) gsap.set(heroBtn, { scale: 0.8, autoAlpha: 0 });
        if (heroImage) gsap.set(heroImage, { scale: 1.15 });

        const introTl = gsap.timeline();

        // 1. Navbar falls into place
        introTl.from('#navbar', {
            yPercent: -100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        });

        // 2. Image settles
        if (heroImage) {
            introTl.to(heroImage, {
                scale: 1,
                duration: 2.5,
                ease: 'power2.out'
            }, 0.2);
        }

        // 3. Heading and subtitle reveal
        if (heroHeading) {
            introTl.to(heroHeading, {
                clipPath: 'inset(0% 0% 0% 0%)',
                y: 0,
                autoAlpha: 1,
                duration: 1.2,
                ease: 'power4.out'
            }, 0.5);
        }

        if (heroSubtitle) {
            introTl.to(heroSubtitle, {
                clipPath: 'inset(0% 0% 0% 0%)',
                y: 0,
                autoAlpha: 1,
                duration: 1.0,
                ease: 'power3.out'
            }, 0.8);
        }

        if (heroBtn) {
            introTl.to(heroBtn, {
                scale: 1,
                autoAlpha: 1,
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, 1.1);
        }
    };

    // Trigger hero entrance
    runHeroEntrance();

    // Initialize Lenis Smooth Scrolling
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Handle scroll event for changing navbar transparency
    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);

    // Mobile menu open/close toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Dynamically change hamburger to 'X' (cross) icon
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            // Make navbar solid instantly when menu is opened
            navbar.classList.add('scrolled');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Return to transparent state if near top
            handleScroll();
        }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');

                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');

                handleScroll();
            }
        });
    });

    // GSAP Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    let currentSlide = 0;
    let isAnimating = false;
    let slideInterval;

    if (slides.length > 0) {
        const totalSlides = slides.length;

        if (typeof gsap !== 'undefined') {
            // Setup slides for sliding
            gsap.set(slides, { xPercent: 100, autoAlpha: 0 });

            // Initialize first slide — make it visible but keep content hidden
            // (the preloader exit timeline will animate content in as the hero reveal)
            gsap.set(slides[currentSlide], { xPercent: 0, autoAlpha: 1 });
            dots[currentSlide].classList.add('active');
            // NOTE: firstContent y/autoAlpha and image scale are intentionally NOT set here;
            // runExitTimeline() owns the first-reveal animation of those elements.

            const animateSlide = (nextIndex, direction = 1) => {
                if (isAnimating || nextIndex === currentSlide) return;
                isAnimating = true;

                const outgoingSlide = slides[currentSlide];
                const incomingSlide = slides[nextIndex];

                // Update dots
                dots.forEach(dot => dot.classList.remove('active'));
                dots[nextIndex].classList.add('active');

                // Generate timeline for sliding sequence
                const tl = gsap.timeline({
                    onComplete: () => {
                        currentSlide = nextIndex;
                        isAnimating = false;
                    }
                });

                // Prep the incoming slide — hidden, offset to the right/left
                tl.set(incomingSlide, { autoAlpha: 1, xPercent: 100 * direction }, 0);
                // Image starts slightly zoomed in from center
                tl.set(incomingSlide.querySelector('img'), { scale: 1.15, transformOrigin: 'center center' }, 0);

                // Prep the text "wave" effect nodes
                const contentElements = incomingSlide.querySelectorAll('.slide-content > *');
                tl.set(contentElements, { y: 40, autoAlpha: 0 }, 0);

                // Slide OLD out
                tl.to(outgoingSlide, {
                    xPercent: -100 * direction,
                    duration: 1.2,
                    ease: 'power3.inOut'
                }, 0);

                // Slide NEW in
                tl.to(incomingSlide, {
                    xPercent: 0,
                    duration: 1.2,
                    ease: 'power3.inOut'
                }, 0);

                // CENTER SCALE: image scales from 1.15 → 1 as slide arrives
                tl.to(incomingSlide.querySelector('img'), {
                    scale: 1,
                    duration: 1.8,
                    ease: 'power2.out',
                    transformOrigin: 'center center'
                }, 0);

                // Reset outgoing image scale for next time it's used
                tl.set(outgoingSlide, { autoAlpha: 0 });
                tl.set(outgoingSlide.querySelector('img'), { scale: 1.15 });

                // Text Wave Animation! Staggered entrance
                tl.to(contentElements, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'back.out(1.2)',
                    stagger: 0.15
                }, 0.5);
            };

            const goToNextSlide = () => {
                const next = (currentSlide + 1) % totalSlides;
                animateSlide(next, 1);
            };

            const goToPrevSlide = () => {
                const prev = (currentSlide - 1 + totalSlides) % totalSlides;
                animateSlide(prev, -1);
            };

            // Event Listeners for controls
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    goToNextSlide();
                    resetInterval();
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    goToPrevSlide();
                    resetInterval();
                });
            }

            // Event Listeners for dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    if (index === currentSlide) return;
                    const direction = index > currentSlide ? 1 : -1;
                    animateSlide(index, direction);
                    resetInterval();
                });
            });

            // Auto slide
            const startInterval = () => {
                slideInterval = setInterval(goToNextSlide, 6000);
            };

            const resetInterval = () => {
                clearInterval(slideInterval);
                startInterval();
            };

            // Start auto-play
            startInterval();
        } else {
            // CSS Fallback if offline
            slides[currentSlide].style.opacity = "1";
            slides[currentSlide].style.visibility = "visible";
        }
    }

    // 3D Jewelry Carousel Logic
    const jewelryItems = document.querySelectorAll('.carousel-item');
    const prevBtnJ = document.querySelector('.prev-nav');
    const nextBtnJ = document.querySelector('.next-nav');

    if (jewelryItems.length > 0) {
        let classes = ['item-left-far', 'item-left-near', 'active', 'item-right-near', 'item-right-far'];

        const updateCarousel = (direction) => {
            if (direction === 'next') {
                classes.unshift(classes.pop()); // Shift classes right
            } else {
                classes.push(classes.shift()); // Shift classes left
            }

            jewelryItems.forEach((item, index) => {
                // Remove all possible carousel classes
                item.classList.remove('item-left-far', 'item-left-near', 'active', 'item-right-near', 'item-right-far');
                // Add the new class based on rotated array
                item.classList.add(classes[index]);
            });
        };

        if (nextBtnJ) {
            nextBtnJ.addEventListener('click', () => {
                updateCarousel('next');
                // Simple toggle effect for button active state
                nextBtnJ.classList.add('active-btn');
                prevBtnJ.classList.remove('active-btn');
            });
        }

        if (prevBtnJ) {
            prevBtnJ.addEventListener('click', () => {
                updateCarousel('prev');
                prevBtnJ.classList.add('active-btn');
                nextBtnJ.classList.remove('active-btn');
            });
        }

        // Allow clicking individual items to bring them to center
        jewelryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const currentClass = classes[index];
                if (currentClass === 'item-left-near') updateCarousel('prev');
                if (currentClass === 'item-left-far') { updateCarousel('prev'); updateCarousel('prev'); }
                if (currentClass === 'item-right-near') updateCarousel('next');
                if (currentClass === 'item-right-far') { updateCarousel('next'); updateCarousel('next'); }
            });
        });

        // --- Jewelry Carousel Staggered Card Entrance ---
        const jewelryCards = document.querySelectorAll('.carousel-item');
        const carouselSection = document.querySelector('.jewelry-section');

        if (carouselSection && jewelryCards.length > 0) {
            // Initially set the cards to be transparent/small — safe because we clear it later
            gsap.set(jewelryCards, { autoAlpha: 0, scale: 0.1, y: 100 });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(jewelryCards, {
                            autoAlpha: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.9, // Snappier
                            stagger: {
                                amount: 0.6, // Faster wave
                                from: 'center'
                            },
                            ease: 'expo.out', // Smoother, higher performance feel
                            delay: 0.1,
                            onComplete: () => {
                                gsap.set(jewelryCards, { clearProps: "all" });
                            }
                        });
                        observer.unobserve(carouselSection);
                    }
                });
            }, { threshold: 0.12 });

            observer.observe(carouselSection);
        }

        // --- New Collection Individual Image Scroll Entrance ---
        const collectionImages = document.querySelectorAll('.category-gallery img');
        const collectionTitles = document.querySelectorAll('.category-name');

        if (collectionImages.length > 0) {
            // Initially set titles and images slightly lower/hidden
            gsap.set(collectionTitles, { opacity: 0, y: 30 });
            gsap.set(collectionImages, { opacity: 0, y: 50 });

            // 1. Observer for Category Titles
            const titleObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power3.out'
                        });
                        titleObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            collectionTitles.forEach(title => titleObserver.observe(title));

            // 2. Observer for individual gallery images
            const imgObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 1.2,
                            ease: 'power2.out',
                            delay: Math.random() * 0.2 // Subtle organic feel
                        });
                        imgObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            collectionImages.forEach(img => imgObserver.observe(img));
        }
    }

    // --- Decorative Loop Arrow Animation ---
    const arrow = document.querySelector('.decorative-arrow');

    if (arrow) {
        const arrowTl = gsap.timeline({ repeat: -1 });

        // 1. Initial State: Hidden and clipped on the right
        arrowTl.set(arrow, {
            clipPath: 'inset(0% 100% 0% 0%)',
            autoAlpha: 0
        });

        // 2. Reveal Drawing: Smoothly reveal from left to right
        arrowTl.to(arrow, {
            clipPath: 'inset(0% 0% 0% 0%)',
            autoAlpha: 1,
            duration: 2.5,
            ease: 'power3.inOut'
        });

        // 3. Pause: Keep it visible for a few seconds
        arrowTl.to({}, { duration: 4 }); // Simple way to add a delay in a timeline

        // 4. Reset: Fade out before repeating the drawing
        arrowTl.to(arrow, {
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.in'
        });
    }
});
