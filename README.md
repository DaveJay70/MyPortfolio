# Jay Dave - Portfolio Website

A stunning, fully animated portfolio website built with Next.js featuring a neon-themed design with custom mouse hover effects.

## Features

### Design & Animation
- **Black Background with Neon Effects**: Modern dark theme with vibrant neon colors (cyan, purple, pink)
- **Custom Animated Cursor**: Interactive cursor with neon trail effect that follows mouse movement
- **Smooth Scroll Animations**: Sections fade in as you scroll using Framer Motion
- **Hover Effects**: Beautiful neon glow effects on all interactive elements
- **Gradient Progress Bar**: Animated scroll progress indicator at the top
- **Responsive Design**: Fully responsive across all devices

### Sections
1. **Hero**: Eye-catching introduction with animated gradient text and floating background orbs
2. **About**: Career objective and professional highlights
3. **Skills**: Technical skills organized by category with animated tags
4. **Projects**: Showcase of major projects with tech stack badges
5. **Experience**: Professional experience, extracurricular activities, and certificates
6. **Education**: Academic qualifications with GPA/percentage
7. **Contact**: Contact information and message form with social links

### Technical Features
- Built with Next.js 13+ (App Router)
- Framer Motion for smooth animations
- Tailwind CSS for styling
- TypeScript for type safety
- Custom cursor with neon trail
- Intersection Observer for scroll-triggered animations
- SEO optimized with proper metadata

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information
Update the content in the following files:
- `/components/sections/Hero.jsx` - Name, title, and social links
- `/components/sections/About.jsx` - Career objective
- `/components/sections/Skills.jsx` - Technical skills
- `/components/sections/Projects.jsx` - Project details
- `/components/sections/Experience.jsx` - Work experience and activities
- `/components/sections/Education.jsx` - Educational background
- `/components/sections/Contact.jsx` - Contact information

### Colors
The neon color scheme uses:
- Cyan: `#22D3EE` (cyan-400)
- Purple: `#C084FC` (purple-400)
- Pink: `#F472B6` (pink-400)
- Green: `#4ADE80` (green-400)

Modify these in the Tailwind classes throughout the components.

### Cursor Effect
Customize the cursor in `/components/CustomCursor.jsx`:
- Trail length (currently 15 points)
- Cursor size and border
- Glow intensity
- Animation speed

## Technologies Used

- **Framework**: Next.js 13+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scroll Detection**: react-intersection-observer
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Performance

- Fully static site (SSG)
- Optimized bundle size
- Lazy loading of sections
- Smooth 60fps animations
- Fast page load times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Jay Dave. All rights reserved.

## Contact

- Email: jaydave8305@gmail.com
- Phone: +91 8347083205
- GitHub: [@DaveJay70](https://github.com/DaveJay70)
- LinkedIn: [jaydave07](https://linkedin.com/in/jaydave07)
- Location: Jamnagar, Gujarat, India
