# Kelly Stakes - Professional Bet Calculator

A modern, responsive web application for calculating optimal bet sizes using the Kelly Criterion mathematical formula. Built with React, TypeScript, and Tailwind CSS.

![Kelly Stakes Logo](public/vite.svg)

## 🎯 Overview

Kelly Stakes is a professional-grade bet calculator that helps users determine optimal position sizes for sports betting, trading, and investment decisions using the proven Kelly Criterion formula. The application features a sleek, modern interface with real-time calculations and educational resources.

## ✨ Features

- **Real-time Kelly Criterion Calculator**: Interactive calculator with live updates
- **Multiple Odds Formats**: Support for American, decimal, and fractional odds
- **Educational Content**: Comprehensive guide to understanding the Kelly Criterion
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Professional UI**: Modern, dark-themed interface with smooth animations
- **Multi-bet Support**: Calculate optimal stakes for multiple simultaneous bets
- **Use Case Examples**: Real-world scenarios for sports betting, trading, and investing

## 🚀 Tech Stack

- **Frontend Framework**: React 18.3
- **Language**: TypeScript 5.5
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 6.3
- **Routing**: React Router DOM 6.30
- **Animations**: Framer Motion 12.23
- **Icons**: Lucide React 0.344
- **Additional Libraries**:
  - React Spring for physics-based animations
  - React Intersection Observer for scroll-triggered effects

## 📁 Project Structure

```
kelly-stakes-website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Education.tsx    # Educational content about Kelly Criterion
│   │   ├── FAQ.tsx          # Frequently asked questions
│   │   ├── Features.tsx     # App features showcase
│   │   ├── FinalCTA.tsx     # Call-to-action section
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Help.tsx         # Help center page
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── KellyExplainer.tsx # Kelly Criterion explanation
│   │   ├── LiveDemo.tsx     # Interactive calculator demo
│   │   ├── Navigation.tsx   # Site navigation
│   │   ├── Pricing.tsx      # Pricing information
│   │   ├── PrivacyPolicy.tsx # Privacy policy page
│   │   ├── TermsOfService.tsx # Terms of service page
│   │   ├── Testimonials.tsx # User testimonials
│   │   └── UseCases.tsx     # Use case examples
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── vercel.json         # Vercel deployment configuration
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/kelly-stakes-website.git
   cd kelly-stakes-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

The application is configured for deployment on Vercel with automatic routing support for React Router.

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

The `vercel.json` configuration file ensures proper routing for single-page application behavior.

## 📱 Features in Detail

### Kelly Criterion Calculator
- Input given odds and your estimated true odds
- Real-time calculation of optimal bet size
- Visual representation of potential outcomes
- Support for different bankroll sizes

### Educational Resources
- Comprehensive guide to the Kelly Criterion
- Mathematical formula explanation
- Risk management principles
- Common mistakes to avoid

### Professional Tools
- Multi-bet calculator for portfolio management
- Historical performance tracking
- Risk assessment metrics
- Bankroll management features

## 🎨 Design Features

- **Dark Theme**: Professional dark color scheme with high contrast
- **Responsive Layout**: Mobile-first design approach
- **Smooth Animations**: Framer Motion for fluid interactions
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Performance**: Optimized with lazy loading and code splitting

## 📧 Contact

For support or inquiries: kellystakesapp@gmail.com

## 📄 Legal

- [Privacy Policy](/privacy)
- [Terms of Service](/terms)
- [Help Center](/help)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ by the Kelly Stakes team