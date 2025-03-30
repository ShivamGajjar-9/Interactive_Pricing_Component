# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers
- Toggle between monthly and yearly billing (25% discount for yearly)
- Switch between light and dark themes

### Screenshot

![Screenshot](./public/screenshot.png)

### Links

- Solution URL: [Interactive Pricing Component: Frontend Mentor](https://www.frontendmentor.io/solutions/interactive-pricing-components-using-nextjs-and-typescript-1Joec43w65)
- Live Site URL: [Deployed on Vercel](https://interactivepricingcomponents.vercel.app/)

## My process

### Built with

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- Mobile-first workflow
- CSS Grid and Flexbox
- CSS Custom Properties
- CSS Animations

### What I learned

Creating a custom slider component with proper styling and interaction:

```jsx
const SliderThumb = ({ isDragging }: { isDragging: boolean }) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-accent transition-all duration-300 ${
      isDragging
        ? "shadow-[0_0_20px_rgba(16,213,194,0.6)]"
        : "shadow-lg shadow-primary/30"
    }`}
  >
    <svg width="22" height="13" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z" />
      </g>
    </svg>
  </div>
);
```

Implementing a subtle animated background:

```jsx
const SimpleAnimatedBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-50">
      <div className="absolute inset-0 bg-grid-primary/[0.05] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="h-[800px] w-[800px] rounded-full bg-primary/10 animate-pulse"></div>
    </div>
  </div>
);
```

Managing theme colors using CSS custom properties:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 227 35% 25%;
  --primary: 174 86% 45%;
  --accent: 174 77% 80%;
}

.dark {
  --background: 222 47% 11%;
  --foreground: 213 31% 91%;
}
```

### Continued development

Areas I want to focus on in future projects:

- Improving accessibility features, especially for the slider component
- Implementing comprehensive testing
- Optimizing performance and animations
- Exploring more advanced state management solutions
- Adding end-to-end testing

### Useful resources

- [Modern CSS with Tailwind](https://tailwindcss.com/docs) - Helped with understanding utility-first CSS and responsive design
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Great resource for accessible, customizable components
- [Next.js App Router Documentation](https://nextjs.org/docs/app) - Essential for understanding the new app directory structure
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - Comprehensive guide for CSS Grid layouts

## Author

- Github - [@ShivamGajjar-9](https://github.com/ShivamGajjar-9)
