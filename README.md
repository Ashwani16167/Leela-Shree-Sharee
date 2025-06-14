# Leela श्री Sarees Website

A beautiful, modern website for Leela श्री Sarees showroom featuring 3D elements, animations, and responsive design.

## Features

### ✨ Modern Design
- Beautiful gradient backgrounds and color schemes
- Professional typography using Google Fonts (Playfair Display & Poppins)
- Elegant golden color palette reflecting luxury and tradition

### 🎨 3D Elements & Animations
- **3D Floating Cards**: Hero section with animated floating saree images
- **3D Card Effects**: Hover effects with perspective transforms
- **Parallax Scrolling**: Dynamic background movement
- **Smooth Animations**: Fade-in, slide-up, and scale effects
- **Interactive Particles**: Background particle animation
- **3D Button Effects**: Elevated button interactions

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly interactions

### 🖼️ Gallery Features
- **Lightbox Gallery**: Click to view images in full-screen
- **Hover Effects**: Beautiful overlay animations
- **Category Filtering**: Organized by saree types
- **Lazy Loading**: Performance-optimized image loading

### 📧 Contact Features
- **Interactive Contact Form**: Modern floating label design
- **Form Validation**: Client-side validation with notifications
- **Contact Information**: Complete business details
- **Location Details**: Full address and contact information

### 🎯 Business Information
- **GSTIN**: 09IRCPM4771H1ZC
- **Phone**: 8009206672, 7311136667
- **Email**: leelashreesarees25@gmail.com
- **Address**: Kailash Tower, Shop No. E-1-2-3-4, Gurubagh Tirana, Varanasi-221010

## File Structure

```
Leela Shree Sharee/
├── index.html          # Main HTML file
├── styles.css          # CSS styles with 3D effects and animations
├── script.js           # JavaScript for interactivity and animations
└── README.md           # This file
```

## Sections

### 1. Navigation
- Fixed header with smooth scroll navigation
- Brand logo and tagline
- Responsive hamburger menu for mobile

### 2. Hero Section
- Animated title with staggered text animation
- 3D floating cards showcasing saree images
- Call-to-action buttons with 3D effects
- Scroll indicator with mouse animation

### 3. Collections
- Grid layout showcasing different saree categories:
  - Silk Sarees
  - Cotton Sarees
  - Designer Sarees
  - Suits & Lahanga
- 3D card hover effects
- Overlay information on hover

### 4. About Section
- Business story and values
- Feature highlights with icons
- Image stack with hover animations
- Complete contact information

### 5. Gallery
- Responsive image grid
- Lightbox functionality for full-screen viewing
- Hover effects with golden overlays
- Category-based organization

### 6. Contact
- Interactive contact form with floating labels
- Form validation and success notifications
- Business information card
- Operating hours and location details

### 7. Footer
- Company information and links
- Social media links
- Quick navigation
- Copyright and legal information

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Advanced animations, transitions, and 3D transforms
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Unsplash**: High-quality images

## Key CSS Features

### 3D Transforms
```css
.card-3d:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg) translateY(-10px);
}
```

### Gradient Backgrounds
```css
--gradient-gold: linear-gradient(135deg, #d4af37, #ffd700);
--gradient-dark: linear-gradient(135deg, #2c3e50, #34495e);
```

### Animations
- Floating animations for hero cards
- Scroll-triggered animations
- Button hover effects
- Loading animations

## JavaScript Features

### Interactive Elements
- Mobile navigation toggle
- Smooth scrolling
- Form validation
- Lightbox gallery
- 3D tilt effects on mouse movement

### Performance Features
- Intersection Observer for scroll animations
- Lazy loading for images
- Optimized event handlers

### Special Features
- Parallax scrolling effect
- Dynamic particle background
- Easter egg (Konami code)
- Notification system

## Setup Instructions

1. **Download/Clone** the project files
2. **Open** `index.html` in a web browser
3. **Or serve** using a local web server for best performance

### Local Server (Optional)
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## Performance Optimizations

- Lazy loading images
- CSS animations over JavaScript where possible
- Optimized media queries
- Minimal external dependencies
- Compressed and optimized code

## Customization

### Colors
Modify CSS custom properties in `:root`:
```css
:root {
    --primary-color: #d4af37;
    --secondary-color: #8b4513;
    --accent-color: #ff6b6b;
}
```

### Images
Replace Unsplash URLs with your own images:
- Hero section floating cards
- Collection showcase images
- Gallery images
- About section images

### Content
Update business information in:
- Navigation logo and tagline
- Hero section text
- About section content
- Contact information
- Footer details

## Future Enhancements

- [ ] E-commerce integration
- [ ] Product catalog with filtering
- [ ] Shopping cart functionality
- [ ] User accounts and wishlist
- [ ] Online payment integration
- [ ] Inventory management
- [ ] Customer reviews and ratings
- [ ] Multi-language support
- [ ] WhatsApp integration
- [ ] Virtual try-on feature

## Support

For any issues or customizations, please contact:
- **Email**: leelashreesarees25@gmail.com
- **Phone**: 8009206672, 7311136667

---

**Built with ❤️ for Leela श्री Sarees**

*Manufacturer & Retailer of Premium Sarees, Suits & Lahanga*
