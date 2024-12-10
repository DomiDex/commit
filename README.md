# ** FREE React Portfolio Website Template Documentation**

## **Overview**

This is a modern, responsive portfolio website built with React, Vite, and Tailwind CSS. It features a dynamic theming system, responsive design, and modular components.

Preview: https://commit-kohl.vercel.app/

## **Key Features**

### **1. Dynamic Theming System**

The application implements a robust theme management system using React Context:

```jsx
export *const* themes = {

default: {

text: 'text-slate-100',

background: 'bg-slate-800',

lightBg: 'bg-slate-700',

},

blue: {

text: 'text-blue-100',

background: 'bg-blue-900',

lightBg: 'bg-blue-800',

},

green: {

text: 'text-green-100',

background: 'bg-green-900',

lightBg: 'bg-green-700',

},

purple: {

text: 'text-violet-100',

background: 'bg-violet-900',

lightBg: 'bg-violet-700',

},

};
```

Available themes:

- Default (Slate)
- Blue
- Green
- Purple

### **2. Core Components**

### Header Component

- Responsive navigation
- Theme switcher
- Mobile menu support
- Call-to-action button
- Sticky positioning with blur effect

### Footer Component

- Dynamic theme-based styling
- Responsive layout
- Copyright information
- Navigation links
- Terms and Privacy Policy links

### Section Component

A flexible container with:

- Customizable padding
- Theme-aware backgrounds
- Responsive spacing
- Multiple element type support (section, div, article, etc.)

### **3. UI Components**

### MainButton

- Two variants: filled and outline
- Amber color scheme
- Hover effects
- Link and button functionality
- Rounded design

### DropdownColor

- Theme selector
- Custom icons for each theme
- Accessible dropdown menu
- Smooth transitions
- Click-outside detection

### Container

- Fluid and fixed width options
- Theme-aware text colors
- Customizable background
- Multiple element type support

### **4. Page Structure**

### Home Page

Features:

- Hero section
- Project showcase
- Skills section
- Testimonials
- Call-to-action

### About Page

Sections:

- "Who am I?" introduction
- Centered content
- "What I do?" description

## **Technical Implementation**

### **1. Theme Management**

The theme system uses:

- Local storage persistence
- Context API for global state
- Dynamic class application
- Smooth transitions

### **2. Responsive Design**

Breakpoints:

- Mobile: Default
- Tablet: md (768px)
- Desktop: lg (1024px)

### **3. Accessibility Features**

- ARIA labels
- Semantic HTML
- Keyboard navigation
- Focus management
- Screen reader support

### **4. Performance Optimizations**

- Component memoization
- Lazy loading
- Image optimization
- Tailwind CSS purging

## **Project Structuresrc/├── components/│ ├── layout/│ │ ├── Header.jsx│ │ └── Footer.jsx│ ├── sections/│ │ ├── hero/│ │ ├── projects/│ │ └── other/│ └── ui/│ ├── button/│ ├── dropdown/│ └── section/├── context/│ └── ThemeContext.jsx├── pages/│ ├── Home.jsx│ └── About.jsx└── assets/ └── svg/**

## **Development Guidelines**

### **Component Creation**

- Use functional components
- Implement PropTypes
- Include JSDoc documentation
- Follow accessibility best practices
- Use Tailwind CSS for styling

### **Theme Implementation**

When creating new components:

- Import useTheme hook
- Access theme object
- Apply theme classes dynamically
- Test across all theme variants

### **Responsive Design**

Use Tailwind's responsive prefixes:

className="flex flex-col md:flex-row lg:space-x-8"

## **Build and Deployment**

- Built with Vite
- Uses PostCSS for processing
- Tailwind CSS for styling
- ESLint for code quality
- Optimized for production builds

## **Future Enhancements**

- Additional theme colors
- Dark/Light mode toggle
- Animation improvements
- Performance monitoring
- SEO optimizations

This documentation provides a comprehensive overview of the project's structure, features, and implementation details. For specific component details, refer to the individual component files and their JSDoc documentation.
