<!-- # 🛍️ Mobile E-Commerce App

A comprehensive, feature-rich mobile e-commerce application built with **React Native**, **Expo**, and **TypeScript**. This app demonstrates modern mobile app development patterns with a complete shopping experience, responsive design, and intuitive user interface.

## 📱 Screenshots & Features

### Preview

<img src="./assets/images/E-commerce ReactNative.png" alt="Fintech Mobile App Preview" width="600" />

This is a demo preview of the application interface.

### 🏠 Home Screen
- **Interactive Banner Carousel**: Auto-scrolling promotional banners with category-specific navigation
- **Category Grid**: 16+ product categories with smart filtering
- **Flash Sale Section**: Real-time countdown timer with special offers
- **Smart Search**: Instant search with navigation to products page
- **Cart Badge**: Real-time cart item count display

### 🛒 Shopping Experience
- **Product Catalog**: 20+ diverse products across multiple categories
- **Advanced Search & Filter**: Search by name, description, or category
- **Product Details**: High-quality images, descriptions, ratings, and reviews
- **Add to Cart**: Quantity selection with smart inventory management
- **Wishlist**: Save favorite items with heart toggle functionality

### 🛍️ Cart & Checkout
- **Dynamic Cart**: Add, remove, update quantities with real-time totals
- **Smart Shipping**: Free shipping over $50, calculated shipping costs
- **Complete Checkout Flow**: Address, payment method, delivery options
- **Order Confirmation**: Detailed order summary with tracking information

### 👤 User Profile
- **Profile Management**: Edit personal information, photos, and preferences
- **Order History**: Track current and past orders with detailed status
- **Payment Methods**: Manage credit cards, PayPal, and Apple Pay
- **App Settings**: Notifications, privacy, theme, and language preferences

## 🚀 Key Features

### ✅ **Fully Functional Features**
- **Complete Shopping Flow**: Browse → Add to Cart → Checkout → Order Confirmation
- **Real-time Cart Management**: Add, remove, update quantities
- **Advanced Search System**: Multi-field search with category filtering
- **Wishlist Management**: Save and organize favorite products
- **Responsive Design**: Optimized for all screen sizes (phones, tablets)
- **Interactive Navigation**: Smart routing between screens with parameters
- **Order Processing**: Complete checkout flow with cart clearing
- **User Profile**: Comprehensive profile and settings management

### 🎨 **Design & UX**
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Layout**: Adaptive design for small, medium, and large devices
- **Consistent Theming**: Unified color scheme and typography
- **Accessibility**: Minimum touch targets, screen reader support
- **Loading States**: Proper feedback for user interactions
- **Error Handling**: Comprehensive error messages and validations

### 📊 **Demo Data**
- **Products**: 20+ products across Electronics, Fashion, Home, Sports, Beauty
- **Categories**: 16 product categories with representative images
- **Cart Items**: Pre-populated cart for testing
- **User Profile**: Complete user information and preferences
- **Order History**: Sample orders with different statuses

## 🛠️ Technical Stack

### **Frontend**
- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and build tools
- **TypeScript**: Type-safe JavaScript development
- **Expo Router**: File-based routing system

### **UI Components**
- **Lucide React Native**: Beautiful, customizable icons
- **Expo Linear Gradient**: Gradient backgrounds and overlays
- **React Native Safe Area Context**: Safe area handling
- **Custom Components**: Reusable UI components

### **State Management**
- **React Context API**: Global state management
- **React Hooks**: useState, useEffect, useMemo for local state
- **Custom Hooks**: Reusable logic for responsive design

### **Navigation**
- **Expo Router**: Tab navigation, stack navigation, and deep linking
- **Parameter Passing**: Search queries and category filters via URL params
- **Screen Transitions**: Smooth navigation animations

## 📁 Project Structure

```
MobileEcommerce/
├── app/                          # App screens and navigation
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── index.tsx            # Home screen
│   │   ├── products.tsx         # Products catalog
│   │   ├── cart.tsx             # Shopping cart
│   │   ├── wishlist.tsx         # Saved items
│   │   └── profile.tsx          # User profile
│   ├── product/[id].tsx         # Product detail screen
│   ├── checkout.tsx             # Checkout flow
│   └── _layout.tsx              # Root layout
├── components/                   # Reusable UI components
│   ├── cart/
│   │   └── CartItem.tsx         # Individual cart item
│   ├── common/
│   │   └── SectionHeader.tsx    # Section headers
│   ├── home/
│   │   ├── BannerCarousel.tsx   # Homepage banner slider
│   │   ├── CategorySection.tsx  # Category grid
│   │   └── FlashSellSection.tsx # Flash sale section
│   └── products/
│       ├── ProductCard.tsx      # Product card component
│       └── ProductGrid.tsx      # Product grid layout
├── context/
│   └── AppContext.tsx           # Global state management
├── data/                        # Demo data files
│   ├── products.json            # Product catalog
│   ├── cart.json               # Sample cart items
│   ├── categories.json         # Product categories
│   └── banners.json            # Banner data
├── types/                       # TypeScript type definitions
│   ├── product.ts              # Product interface
│   ├── cart.ts                 # Cart item interface
│   └── user.ts                 # User interface
└── hooks/
    └── useFrameworkReady.ts     # Custom hooks
```

## 🔧 Installation & Setup

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app (for mobile testing)

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MobileEcommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

4. **Run on different platforms**
   - **Mobile**: Scan QR code with Expo Go app
   - **Web**: Press `w` or visit `http://localhost:8081`
   - **Android Emulator**: Press `a`
   - **iOS Simulator**: Press `i` (macOS only)

## 📱 Testing the App

### **🛒 Shopping Flow Testing**
1. **Browse Products**: Start on home screen, explore categories
2. **Search Products**: Use search bar to find specific items
3. **Product Details**: Tap any product to view details
4. **Add to Cart**: Select quantity and add items to cart
5. **View Cart**: Check cart icon badge, navigate to cart
6. **Checkout**: Complete the checkout process
7. **Order Confirmation**: Verify order completion and cart clearing

### **❤️ Wishlist Testing**
1. **Add to Wishlist**: Tap heart icon on any product
2. **View Wishlist**: Navigate to wishlist tab
3. **Search Wishlist**: Use search functionality
4. **Move to Cart**: Move items from wishlist to cart
5. **Remove Items**: Remove items from wishlist

### **👤 Profile Testing**
1. **View Profile**: Navigate to profile tab
2. **Edit Profile**: Test profile editing options
3. **Order History**: Check demo order history
4. **Payment Methods**: Explore payment options
5. **Settings**: Test app settings and preferences
6. **Logout**: Test logout functionality

### **🔍 Navigation Testing**
1. **Category Navigation**: Tap categories to filter products
2. **Banner Navigation**: Tap banners to navigate to categories
3. **Search Navigation**: Search from home, navigate to products
4. **Deep Linking**: Test URL parameter passing

## 🎯 Key Components

### **AppContext.tsx**
- Global state management for cart, wishlist, and user data
- Responsive design utilities
- Search functionality
- Product management

### **Home Screen (index.tsx)**
- Welcome section with user greeting
- Interactive banner carousel
- Category grid with smart navigation
- Flash sale section with countdown timer

### **Products Screen (products.tsx)**
- Advanced search and filtering
- Grid/list view toggle
- Category-based filtering
- Responsive product grid

### **Cart Screen (cart.tsx)**
- Dynamic cart item management
- Real-time total calculations
- Shipping cost calculations
- Checkout navigation

### **Checkout Screen (checkout.tsx)**
- Multi-step checkout process
- Address form management
- Payment method selection
- Order confirmation

### **Product Detail (product/[id].tsx)**
- High-quality product images
- Detailed product information
- Add to cart functionality
- Wishlist toggle

## 🎨 Design System

### **Colors**
- **Primary**: `#4B7BF5` (Blue)
- **Secondary**: `#FF4D67` (Red/Pink)
- **Success**: `#4CAF50` (Green)
- **Warning**: `#FFC107` (Yellow)
- **Background**: `#F5F5F7` (Light Gray)
- **Text**: `#333333` (Dark Gray)

### **Typography**
- **Font Family**: Inter (Regular, Medium, SemiBold, Bold)
- **Responsive Sizing**: Different sizes for small, medium, and large devices
- **Accessibility**: Proper contrast ratios and readable sizes

### **Layout**
- **Responsive Grid**: Adaptive columns based on screen size
- **Safe Areas**: Proper handling of device safe areas
- **Touch Targets**: Minimum 44px touch targets for accessibility

## 📊 Demo Data

### **Products (20+ items)**
- Electronics: iPhone, headphones, cameras, laptops
- Fashion: Clothing, shoes, accessories, watches
- Home & Garden: Furniture, decor, kitchen items
- Sports & Fitness: Equipment, apparel, accessories
- Beauty & Care: Skincare, makeup, personal care

### **Categories (16 categories)**
- Electronics, Fashion, Home & Garden, Sports & Fitness
- Beauty & Care, Books, Automotive, Toys & Games
- Kitchen, Travel, Music, Accessories, Bags, Watches, Pet Supplies, Gardening

### **User Data**
- Profile: John Doe with complete information
- Order History: Multiple orders with different statuses
- Payment Methods: Credit cards, PayPal, Apple Pay
- Wishlist: Sample saved products

## 🔄 State Management

### **Global State (AppContext)**
- **Cart**: Items, quantities, totals, add/remove/update functions
- **Wishlist**: Saved products, add/remove functions
- **Search**: Query state, search results
- **User**: Profile information, preferences
- **Responsive**: Device size detection, breakpoints

### **Local State**
- **Component-specific**: View modes, form inputs, loading states
- **Navigation**: Screen parameters, search queries
- **UI State**: Modal visibility, animations, user interactions

## 🚀 Performance Optimizations

### **React Optimizations**
- **useMemo**: Expensive calculations (filtered products)
- **useCallback**: Event handlers to prevent re-renders
- **Component Memoization**: Prevent unnecessary re-renders

### **Image Optimization**
- **Lazy Loading**: Images load as needed
- **Caching**: Expo image caching for better performance
- **Responsive Images**: Different sizes for different devices

### **Navigation**
- **Screen Optimization**: Only render active screens
- **Parameter Passing**: Efficient data passing between screens
- **Deep Linking**: Direct navigation to specific content

## 🧪 Testing Strategy

### **Manual Testing Checklist**
- [ ] All navigation flows work correctly
- [ ] Cart functionality (add, remove, update, checkout)
- [ ] Search and filtering work properly
- [ ] Wishlist functionality is complete
- [ ] Profile features are interactive
- [ ] Responsive design on different screen sizes
- [ ] Error handling for edge cases

### **Test Scenarios**
1. **Empty States**: Empty cart, empty wishlist, no search results
2. **Edge Cases**: Maximum quantities, long product names, network errors
3. **User Flows**: Complete shopping journey from browse to purchase
4. **Responsive**: Test on small phones, large phones, and tablets

## 📝 Development Notes

### **Code Quality**
- **TypeScript**: Full type safety throughout the application
- **Component Structure**: Reusable, modular components
- **Consistent Naming**: Clear, descriptive variable and function names
- **Code Comments**: Detailed comments for complex logic

### **Best Practices**
- **Responsive Design**: Mobile-first approach with device breakpoints
- **Accessibility**: Screen reader support, proper contrast, touch targets
- **Performance**: Optimized rendering and state management
- **User Experience**: Intuitive navigation and clear feedback

### **Future Enhancements**
- **Authentication**: User login/registration system
- **Backend Integration**: API integration for real data
- **Push Notifications**: Order updates and promotional notifications
- **Analytics**: User behavior tracking and analytics
- **Offline Support**: Cached data for offline browsing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Expo Team**: For the amazing development platform
- **React Native Community**: For the robust framework
- **Lucide Icons**: For beautiful, consistent icons
- **Pexels**: For high-quality product images
- **Design Inspiration**: Various e-commerce apps and design systems

---

**Built with ❤️ using React Native, Expo, and TypeScript**

For questions, issues, or feature requests, please open an issue on the repository. -->




# 🛍️ Bolt eCommerce App

A clean, modern, and fully responsive **eCommerce mobile application** built with **React Native + Expo + Expo Router**. It includes features like product listings, category filtering, wishlist management, cart functionality, and a full checkout process — optimized for both Android and iOS.

---

## 📱 Features

- 🔎 Product Search with Categories
- 🛒 Add to Cart / Cart Management
- ❤️ Wishlist Functionality
- 🧾 Checkout & Total Summary
- 👤 User Profile with Order History
- 🔄 Smooth navigation using **React Navigation**
- 🎨 Beautiful UI using **custom components** and **Google Fonts**
- 📦 Cross-platform support via **Expo**

---

## 🚀 Screenshots

| Home | Products | Cart |
|------|----------|------|
| ![Home](./screenshots/home.png) | ![Products](./screenshots/products.png) | ![Cart](./screenshots/cart.png) |

| Wishlist | Profile |
|----------|---------|
| ![Wishlist](./screenshots/wishlist.png) | ![Profile](./screenshots/profile.png) |

> 💡 All screenshots are mobile-friendly and optimized for 375px–414px width screens.

---

## 🧰 Tech Stack

| Technology | Use |
|------------|-----|
| [Expo](https://expo.dev) | App scaffolding, bundling, and OTA updates |
| React Native | Core mobile framework |
| [Expo Router](https://expo.github.io/router/) | File-based routing |
| [React Navigation](https://reactnavigation.org/) | Navigation handling |
| [Lucide Icons](https://lucide.dev) | Icon pack |
| [Google Fonts: Inter](https://fonts.google.com/specimen/Inter) | Modern font style |
| TypeScript | Type safety |
| Reanimated + Gesture Handler | Animations and interactions |
| React Native WebView | For in-app web-based screens if needed |

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bolt-expo-starter.git
cd bolt-expo-starter

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
