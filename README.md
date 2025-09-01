# Hedamo Product Details Showcase

A modern, responsive product showcase application built with Next.js and Tailwind CSS, featuring Samsung Weather-inspired card-based design for detailed product information.

## 🌟 Features

### ✨ Product Summary View
- Clean, attractive product previews on the main page
- Interactive product cards with hover animations
- Search functionality across product names, descriptions, and features
- Category filtering (Food, Beverages, Fashion)
- Responsive grid layout for all screen sizes

### 🎯 Card-Based Product Details
- **Overview Card**: Product name, description, pricing, and ratings
- **Image Gallery Card**: Interactive carousel with navigation controls
- **Features Card**: Key product highlights with checkmark icons
- **Nutrition Card**: Detailed nutritional information (when applicable)
- **Traceability Card**: Origin, certifications, and sustainability info
- **Reviews Card**: Customer feedback with ratings and verification badges
- **Specifications Card**: Technical details and product specifications

### 🎨 Design Excellence
- Samsung Weather-inspired modular card system
- Smooth hover effects and micro-interactions
- Gradient backgrounds and glass morphism effects
- Dark mode support with automatic detection
- Responsive design from mobile to desktop
- Custom scrollbars and animations

### ♿ Accessibility Features
- Comprehensive alt text for images
- Keyboard navigation support (ESC to close modals)
- ARIA labels for interactive elements
- Focus management and screen reader optimization
- High contrast ratios and readable fonts

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Heroicons
- **Data**: Local JSON with TypeScript interfaces

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hedamo-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev -- -p 1000
   ```

4. **Open your browser**
   Navigate to [http://localhost:1000](http://localhost:1000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hedamo-showcase/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Main homepage
│   ├── components/
│   │   ├── ui/
│   │   │   └── Card.tsx         # Base card component
│   │   ├── product-cards/
│   │   │   ├── ImageGalleryCard.tsx
│   │   │   ├── OverviewCard.tsx
│   │   │   ├── FeaturesCard.tsx
│   │   │   ├── NutritionCard.tsx
│   │   │   ├── TraceabilityCard.tsx
│   │   │   ├── ReviewsCard.tsx
│   │   │   └── SpecificationsCard.tsx
│   │   ├── ProductSummary.tsx   # Product preview component
│   │   └── ProductDetails.tsx   # Modal with card layout
│   ├── data/
│   │   └── products.json        # Product data
│   └── types/
│       └── product.ts           # TypeScript interfaces
└── public/
    └── ...                      # Static assets
```

## 🎨 Design Philosophy

### Samsung Weather Inspiration
The card-based layout draws inspiration from Samsung Weather's clean, separated design:
- Each product aspect gets its own distinct card
- Consistent spacing and rounded corners
- Subtle shadows and hover effects
- Information hierarchy through visual grouping

### User Experience Focus
- **Progressive Disclosure**: Summary → Details → Deep dive
- **Visual Consistency**: Unified design language throughout
- **Performance**: Optimized animations and loading states
- **Accessibility**: Inclusive design for all users

## 📊 Product Data Structure

Each product includes comprehensive information:

```typescript
interface Product {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  nutrition: Nutrition;
  traceability: Traceability;
  reviews: Review[];
  images: string[];
  specifications: Specifications;
}
```

### Sample Products
- **Hedamo Organic Honey**: Premium wildflower honey with full traceability
- **Hedamo Artisan Coffee**: Single-origin Ethiopian beans, ethically sourced  
- **Hedamo Handwoven Scarf**: Luxurious merino wool, artisan crafted

## 🎯 Key Components

### ProductSummary
- Attractive product preview cards
- Hover animations and price badges
- Quick feature highlights
- Click to open detailed view

### ProductDetails
- Full-screen modal with card grid
- Samsung Weather-inspired layout
- Comprehensive product information
- Interactive elements and animations

### Modular Cards
Each card is self-contained and reusable:
- Consistent styling with the base `Card` component
- Responsive design with CSS Grid
- Conditional rendering based on data availability
- Individual hover states and animations

## 🌐 Responsive Design

- **Mobile First**: Optimized for touch interfaces
- **Tablet**: Adapted grid layouts and touch targets
- **Desktop**: Full feature set with hover states
- **Large Screens**: Maximum 7xl container width

## 🎨 Customization

### Styling
- Modify `globals.css` for global styles
- Update Tailwind theme in `tailwind.config.js`
- Customize card layouts in individual components

### Data
- Add products to `src/data/products.json`
- Extend TypeScript interfaces in `src/types/product.ts`
- Update card components for new data fields

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure build settings (automatic for Next.js)
3. Deploy with one click

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `out/` folder
- **Docker**: Create Dockerfile for containerized deployment
- **Traditional Hosting**: Build static export with `next export`

## 🔧 Performance Optimizations

- **Next.js Image Optimization**: Automatic WebP conversion and sizing
- **CSS Splitting**: Component-level styles for optimal loading
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Images and components loaded on demand

## 🎯 Future Enhancements

### Potential Features
- [ ] Product comparison functionality
- [ ] Advanced filtering (price range, ratings)
- [ ] Shopping cart integration
- [ ] User accounts and wishlist
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Live chat integration
- [ ] AR product preview

### Technical Improvements
- [ ] Server-side rendering for SEO
- [ ] Progressive Web App (PWA) features
- [ ] Advanced caching strategies
- [ ] Performance monitoring
- [ ] A/B testing framework

## 📝 License

This project is built for educational and demonstration purposes. Feel free to use it as a foundation for your own product showcase applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Built with ❤️ for the Hedamo platform**