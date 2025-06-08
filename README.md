# Halong Bay Tours Website

A beautiful, modern website for Halong Bay cruise booking built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Beautiful, responsive design based on Figma mockups
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling Navigation**: Single-page application with smooth scroll navigation
- **Interactive Components**: Animated sliders, testimonials, and hover effects
- **Performance Optimized**: Built with Next.js 15 for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.3
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **Icons**: Lucide React 0.468.0
- **Typography**: Inter & Dancing Script fonts
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js 18.18.0 or later
- npm or yarn package manager

## 🛠 Installation

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd halong-bay-tours
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Project Structure

```
halong-bay-tours/
├── src/
│   └── app/
│       ├── page.tsx          # Main homepage component
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles and animations
├── public/
│   └── images/              # Static images
├── package.json
└── README.md
```

## 🎨 Key Components

### Header & Navigation

- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Smooth transition animations

### Hero Section

- Full-screen hero with background image
- Animated title with script font
- Search form with cruise category selector

### Cruise Packages

- Grid layout showcasing tour packages
- Hover animations and card effects
- Price display and booking CTAs

### Interactive Slider

- Discover section with image carousel
- Navigation arrows and indicators
- Auto-advance functionality

### Testimonials

- Customer review cards with varied layouts
- Responsive grid system
- Backdrop blur effects

### Footer

- Comprehensive contact information
- Newsletter signup form
- Social media links
- Multi-office contact details

## 🎯 Navigation Sections

The website includes smooth scroll navigation to these sections:

- Hero Section
- Perfect Experience
- Cruise Packages
- Discover Halong Bay
- Why Choose Us
- Testimonials
- Newsletter
- Contact Information

## 🖼 Image Placeholders

The website uses placeholder images that can be replaced with actual photos:

- Hero background: Halong Bay landscape
- Package thumbnails: Cruise ship and bay views
- Testimonial avatars: Customer photos
- Discover slider: Tourist attractions

## 🎨 Customization

### Colors

The design uses a blue-based color scheme that can be customized in `tailwind.config.js`:

- Primary: Blue (600)
- Secondary: Gray (900)
- Accent: Yellow (300) for script text

### Fonts

- **Primary**: Inter (clean, modern sans-serif)
- **Script**: Dancing Script (elegant script for highlights)

### Animations

All animations are built with Framer Motion and can be customized in the component files.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 🌐 Deployment

The website can be deployed on various platforms:

### Vercel (Recommended)

```bash
npm run build
npx vercel --prod
```

### Netlify

```bash
npm run build
# Upload dist folder to Netlify
```

### Self-hosted

```bash
npm run build
npm run start
```

## 📞 Contact Information

For questions about this project:

- **Company**: Asia Pacific Travel
- **Service**: Halong Bay Tours
- **Website**: [Your Website URL]

## 📄 License

This project is created for Halong Bay Tours - Asia Pacific Travel.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🔄 Future Enhancements

Potential improvements:

- [ ] Booking system integration
- [ ] Real-time availability checking
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Customer review system
- [ ] Admin dashboard
- [ ] SEO optimization
- [ ] Performance monitoring

---

Built with ❤️ for an amazing Halong Bay experience!

