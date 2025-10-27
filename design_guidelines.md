# JBN Unisex Salon and Academy - Design Guidelines

## Design Approach
**Reference-Based Luxury Approach**: Drawing inspiration from premium beauty brands like Glossier, Aesop, and luxury hotel websites that emphasize visual storytelling, emotional engagement, and understated elegance. The design prioritizes visual showcasing over text, using large imagery, video, and smooth animations to convey premium quality.

## Core Design Principles
- **Visual-First Philosophy**: Large, high-quality imagery and video take precedence over text
- **Luxurious Restraint**: Elegant simplicity with intentional animations rather than overwhelming effects
- **Emotional Connection**: Every section should evoke confidence, transformation, and aspiration
- **Unisex Appeal**: Balance feminine softness with masculine sophistication

## Color Palette
- **Primary**: Soft pastels (blush pink #F5D6D6, lavender #E8DFF5, mint #D6F5E8) for backgrounds and accents
- **Accent**: Elegant black (#1A1A1A) for typography and contrast
- **Luxury**: Gold (#D4AF37, #F2D492) for highlights, borders, and premium touches
- **Neutrals**: Warm whites (#FEFEFE) and soft grays (#F8F8F8) for breathing room

## Typography System
- **Hero Headlines**: 4xl-6xl, bold weight, dramatic letter spacing
- **Section Titles**: 3xl-4xl, medium-bold weight, elegant serif or refined sans-serif
- **Body Text**: base-lg, light-regular weight, ample line height (1.7-1.8)
- **Accent Text**: sm-base, tracking-wide for labels and captions
- **Font Families**: Pair elegant serif (Playfair Display, Cormorant) with clean sans-serif (Montserrat, Inter)

## Layout System
**Spacing Units**: Use Tailwind spacing with focus on generous breathing room
- Common spacing: 8, 12, 16, 24, 32 units
- Section padding: py-16 (mobile), py-24 to py-32 (desktop)
- Component gaps: gap-8 to gap-12 for grids
- Container: max-w-7xl with px-6 to px-8

**Grid Strategy**:
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: Masonry layout with varied heights
- Testimonials: 2-column on desktop, single on mobile

## Section-Specific Guidelines

### 1. Hero Section
- Full-viewport height (h-screen or min-h-screen)
- Video or large image background with subtle overlay (black at 30-40% opacity)
- Centered text overlay with hero headline and single CTA
- "Book Your Look" CTA: large button with gold accent, blurred background backdrop
- Smooth scroll indicator at bottom

### 2. Before & After Showcase
- Interactive comparison sliders (react-compare-image library)
- 2-3 featured transformations in carousel format
- Captions below each: "Hair Transformation", "Bridal Makeup", etc.
- Background: soft pastel gradient
- Vertical spacing: py-24

### 3. Our Expertise (Services)
- 3D-style service cards with elevated shadow and smooth hover lift
- 5 categories in grid: Hair Styling, Beauty, Makeup, Grooming, Academy
- Each card: icon/image, title, 2-line description
- Hover: scale-105 transform with gold border accent
- Background: white/cream with subtle texture

### 4. Gallery Section
- Masonry grid layout (3-4 columns desktop, 2 mobile)
- Mix of portrait and landscape images
- Lightbox overlay on click for enlarged view
- Optional: 15-second video reels embedded within grid
- Lazy loading for performance

### 5. About JBN
- Split layout: large portrait image (team/founder) + text block
- Asymmetric: 60-40 or full-width image with overlaid text card
- Story text: 2-3 short paragraphs, elegant typography
- Gold accent line or quote styling

### 6. Academy Section
- Dedicated section with heading "JBN Beauty Academy"
- Course cards: certification programs, duration, key highlights
- Student success carousel with before-after student work
- CTA: "Enroll Now" or "Learn More" buttons

### 7. Client Reviews
- Horizontal testimonial slider (Swiper or similar)
- Each testimonial: client photo (circular), quote text, name/service
- Soft gradient background (pastel to white)
- Quote marks as decorative gold elements
- Auto-play with manual navigation

### 8. Book Appointment Section
- Minimalist form: Name, Service (dropdown), Date (calendar picker), Phone
- Single-column form with generous spacing (gap-6)
- Primary CTA: "Book Now" (gold background, black text)
- Secondary: WhatsApp quick contact button with icon
- Background: elegant black with pastel accent elements

### 9. Contact & Location
- Multi-column: Google Maps embed (60%) + Contact info card (40%)
- Contact card: Address, phone, email, social links (Instagram, YouTube, WhatsApp)
- Opening hours in structured card format with day/time grid
- Social icons: gold on hover
- Footer-adjacent placement

## Navigation & Persistent Elements

### Header/Navigation
- Sticky navigation with backdrop blur when scrolled
- Logo left, menu items center/right
- Elegant underline hover effect (gold, 2px, smooth transition)
- Mobile: hamburger menu with smooth slide-in

### Floating Book Button
- Fixed position bottom-right (bottom-8 right-8)
- Circular or rounded-full button with "Book" text or icon
- Gold background with subtle shadow
- Gentle pulse animation to attract attention
- z-50 to stay above all content

## Animation & Interaction Guidelines

### GSAP-Style Animations
- **Scroll Reveal**: Fade-in + translateY(30px to 0) for section entries
- **Parallax**: Slow background movement (0.5x scroll speed) on hero and gallery
- **Stagger**: Service cards appear sequentially with 0.1s delay
- **Hover**: Smooth scale and shadow transitions (duration: 300ms)
- **Page Load**: Hero content fades in with 1s delay after mount

### Performance Considerations
- Lazy load all images below fold
- Optimize video: compressed, muted autoplay for hero
- Use Intersection Observer for scroll-triggered animations
- Debounce scroll events

## Images Section

**Hero Image/Video**:
- Type: Video (preferred) or high-res image of stylist at work
- Dimensions: 1920x1080 minimum, optimized for web
- Content: Active salon environment, professional hair cutting/styling in action
- Treatment: Slight blur or darkened overlay for text readability

**Before/After Slider Images**:
- 6-8 transformation images in pairs (before/after)
- Types: Haircuts, color treatments, bridal makeup, men's grooming
- Dimensions: 800x1000px, portrait orientation
- Consistent lighting and background for comparison clarity

**Service Category Images**:
- 5 images representing each service category
- Style: Clean, professional, close-up shots
- Dimensions: 600x400px, landscape
- Examples: Scissors/styling tools, makeup brushes, grooming kit, classroom setup

**Gallery Images**:
- 20-30 high-quality client work photos
- Mix of: Hairstyles (various lengths), makeup looks, before/afters, academy students
- Dimensions: Varied (masonry layout), 600-1200px width
- All images professionally shot with consistent color grading

**Team/About Images**:
- Professional portrait of founder or team (1-2 images)
- Dimensions: 1200x1600px, portrait
- Style: Warm, approachable, premium studio photography

**Academy/Student Work**:
- 8-10 student transformation images
- Before/after format showing learning progression
- Dimensions: 800x800px, square format

**Testimonial Photos**:
- 5-8 client headshots (circular crop)
- Dimensions: 200x200px minimum
- Style: Natural, friendly, diverse representation

## Mobile Responsiveness
- All sections stack to single column on mobile
- Hero text: reduced to 2xl-3xl on mobile
- Navigation: Collapse to hamburger menu
- Gallery: 1-2 columns on mobile
- Touch-friendly: All interactive elements minimum 44x44px
- Reduce animation complexity on mobile devices

## SEO & Meta Content
- Title: "JBN Unisex Salon and Academy | Premium Hair, Beauty & Grooming in [City]"
- Description: Professional salon services and beauty academy offering hair styling, makeup, grooming for men and women. Expert training courses available.
- Keywords: Unisex salon, beauty academy, hair styling [city], makeup artist, grooming services, salon courses

This design creates a luxurious, visually immersive experience that positions JBN as a premium salon while maintaining accessibility and performance.