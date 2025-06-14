// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll behavior (removed color changes to maintain consistency)
    // The navbar now maintains consistent dark styling across all sections
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.collection-card, .gallery-item, .about-text, .contact-form, .contact-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Enhanced floating cards animation
document.addEventListener('DOMContentLoaded', function() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    // Ensure cards are visible first
    floatingCards.forEach((card, index) => {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.display = 'block';
        
        // Ensure images are visible
        const img = card.querySelector('img');
        if (img) {
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            img.style.display = 'block';
        }
        
        // Removed random movement to prevent image flickering
        console.log(`Floating card ${index + 1} initialized successfully`);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-3d-bg');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// 3D tilt effect for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-3d');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
});

// Gallery lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            createLightbox(imgSrc);
        });
    });
    
    function createLightbox(imgSrc) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${imgSrc}" alt="Gallery Image">
            </div>
        `;
        
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const content = lightbox.querySelector('.lightbox-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;
        
        const img = lightbox.querySelector('img');
        img.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;
        `;
        
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: -40px;
            right: -40px;
            color: white;
            font-size: 30px;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(lightbox);
        
        // Animate in
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
        
        // Close functionality
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        function closeLightbox() {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(lightbox);
            }, 300);
        }
    }
});

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formEntries = Object.fromEntries(formData);
            
            // Simple validation
            let isValid = true;
            Object.keys(formEntries).forEach(key => {
                if (!formEntries[key].trim()) {
                    isValid = false;
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all fields.', 'error');
            }
        });
    }
    
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #27ae60;' : 'background: #e74c3c;'}
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
});

// Scroll animations for elements - DISABLED to prevent image hiding
const scrollAnimations = {
    fadeInUp: {
        initial: { opacity: 1, transform: 'translateY(0px)' },
        animate: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeInLeft: {
        initial: { opacity: 1, transform: 'translateX(0px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeInRight: {
        initial: { opacity: 1, transform: 'translateX(0px)' },
        animate: { opacity: 1, transform: 'translateX(0)' }
    },
    scaleIn: {
        initial: { opacity: 1, transform: 'scale(1)' },
        animate: { opacity: 1, transform: 'scale(1)' }
    }
};

// Apply scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = [
        { selector: '.section-title', animation: 'fadeInUp' },
        { selector: '.section-subtitle', animation: 'fadeInUp' },
        { selector: '.collection-card', animation: 'scaleIn' },
        { selector: '.about-text', animation: 'fadeInLeft' },
        { selector: '.about-image', animation: 'fadeInRight' },
        { selector: '.gallery-item', animation: 'scaleIn' },
        { selector: '.contact-form', animation: 'fadeInLeft' },
        { selector: '.contact-card', animation: 'fadeInRight' }
    ];
    
    animatedElements.forEach(({ selector, animation }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            // Set initial state
            Object.assign(el.style, scrollAnimations[animation].initial);
            el.style.transition = 'all 0.8s ease';
            el.style.transitionDelay = `${index * 0.1}s`;
            
            // Observe for intersection
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        Object.assign(entry.target.style, scrollAnimations[animation].animate);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            observer.observe(el);
        });
    });
});

// Add dynamic background particles
document.addEventListener('DOMContentLoaded', function() {
    createBackgroundParticles();
});

function createBackgroundParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(212, 175, 55, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Performance optimization - Lazy loading images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Add smooth page transitions - DISABLED to prevent image issues
document.addEventListener('DOMContentLoaded', function() {
    // Ensure page is visible immediately
    document.body.style.opacity = '1';
    document.body.style.transition = 'none';
});

// Add Easter egg - Konami code
document.addEventListener('DOMContentLoaded', function() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];
    
    document.addEventListener('keydown', function(e) {
        userInput.push(e.keyCode);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (userInput.length === konamiCode.length) {
            if (userInput.every((key, index) => key === konamiCode[index])) {
                triggerEasterEgg();
            }
        }
    });
    
    function triggerEasterEgg() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        const originalColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        
        let colorIndex = 0;
        const interval = setInterval(() => {
            document.documentElement.style.setProperty('--primary-color', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        }, 200);
        
        setTimeout(() => {
            clearInterval(interval);
            document.documentElement.style.setProperty('--primary-color', originalColor);
        }, 3000);
        
        showNotification('🎉 You found the secret! Enjoy the color show!', 'success');
    }
});

// Image loading debug function
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src*="saree_"], img[src*="sa ("]');
    
    images.forEach((img, index) => {
        // Remove any conflicting styles that might hide images
        img.style.opacity = '1';
        img.style.visibility = 'visible';
        img.style.display = 'block';
        
        img.addEventListener('load', function() {
            console.log(`✅ Image loaded: ${this.src}`);
            // Ensure image stays visible
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        });
        
        img.addEventListener('error', function() {
            console.error(`❌ Image failed to load: ${this.src}`);
            // Add a fallback background or placeholder
            this.style.backgroundColor = '#f0f0f0';
            this.style.minHeight = '200px';
            this.alt = `Image not available - ${this.alt}`;
        });
    });
    
    // Log total images found
    console.log(`Found ${images.length} saree images to load`);
});

// Handle broken images - Simple fallback without replacement
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src*="saree_images/"]');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Failed to load image:', this.src);
            // Just hide the broken image instead of replacing it
            this.style.display = 'none';
            // Add a subtle placeholder
            this.parentElement.style.background = 'linear-gradient(135deg, #f8f9fa, #e9ecef)';
        });
          img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.visibility = 'visible';
        });
    });
});
