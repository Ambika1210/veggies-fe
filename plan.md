# 🥦 Veggies Frontend (veg-fe) — Architecture & Development Roadmap

## 1. Project Overview & Architectural Vision
`veg-fe` is the official modern e-commerce web application for **Veggies**, delivering certified organic, farm-fresh produce directly from regional farmers to urban doorsteps within **15 minutes**.

### Core Technology Stack
- **Library/Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v3 with custom brand emerald color tokens, typography scales, and micro-animations
- **Typography**: Google Fonts (*Plus Jakarta Sans* & *Outfit*)
- **Icons**: Lucide React
- **API Client**: Axios with centralized request/response interceptors and unified error handling
- **State Architecture**: **Vertical Slicing** (feature-driven modules) combined with dedicated Custom Hooks and React Context for domain state

---

## 2. Vertical Slicing Architecture Pattern

Every business domain is isolated into its own self-contained "slice" under `src/features/`. Each slice encapsulates its components, custom hooks, API services, and contextual state, ensuring minimal coupling and high maintainability.

```
src/
├── api/
│   └── callApi.js              # Centralized API service using axios with token management and 401 redirect
├── routes/
│   └── routePaths.js           # Route path constants
├── components/
│   ├── common/                 # Atomic UI primitives shared across slices
│   │   ├── Button.jsx          # Reusable button with variants, sizes, and loading state
│   │   ├── Badge.jsx           # Status & organic tag pills
│   │   └── Skeleton.jsx        # Animated shimmer skeletons for async loading
│   ├── navbar/
│   │   ├── Navbar.jsx          # Sticky navbar with logo, delivery indicator & login
│   │   └── index.js
│   └── footer/
│       ├── Footer.jsx          # Footer links, trust seals, and contact details
│       └── index.js
├── features/
│   ├── landing/                # [PHASE 1 - COMPLETED] Landing / Welcome Page Slice
│   │   ├── components/
│   │   │   ├── HeroSection.jsx         # Hero banner, 15-min delivery badges, trust stats, CTA
│   │   │   └── FeaturedProducts.jsx    # Live API product grid with stock status & pagination
│   │   └── LandingPage.jsx             # Root landing page composition component
│   ├── products/               # [PHASE 1 - COMPLETED] Product Domain Slice
│   │   ├── services/
│   │   │   └── productService.js       # Axios calls for get-all-products, details, creation
│   │   └── hooks/
│   │       └── useProducts.js          # Hook for pagination, live search debounce, category filter
│   ├── cart/                   # [REMOVED] Cart Domain Slice
│   ├── auth/                   # [PHASE 2 - PLANNED] Authentication Slice
│   ├── catalog/                # [PHASE 3 - PLANNED] Full Catalog & Faceted Search Slice
│   ├── product-detail/         # [PHASE 4 - PLANNED] Single Product Detail & Nutrition Slice
│   ├── checkout/               # [PHASE 5 - PLANNED] Address Selection & Payment Gateway Slice
│   ├── orders/                 # [PHASE 6 - PLANNED] Live Order Tracking & History Slice
│   └── admin/                  # [PHASE 7 - PLANNED] SuperAdmin / Admin Inventory CMS Slice
├── utils/
│   └── formatters.js           # Currency formatter (₹ INR) and text utilities
├── App.jsx                     # Root application wrapper with providers
├── main.jsx                    # Vite React entry point
└── index.css                   # Tailwind directives & base styling
```

---

## 3. Implementation Status

### Phase 1: Foundation & Welcome Landing Page (Completed)
- [x] Scaffold Vite + React 19 project structure.
- [x] Configure Tailwind CSS with custom font tokens (*Plus Jakarta Sans*, *Outfit*), brand emerald greens, soft shadows, and float animations.
- [x] Configure centralized `callApi` (`src/api/callApi.js`) with bearer token management, 401 handling, and `routePaths`.
- [x] Build Product Service (`productService.js`) and Custom Hook (`useProducts.js`) handling real-time API communication, pagination, search queries, and error recovery.
- [x] Build Cart Slice (`CartContext.jsx` + `useCart.js`) with localStorage synchronization, item increment/decrement, and subtotal calculation.
- [x] Build rich, high-converting Landing Page components:
  - **Top Announcement Bar**: Morning harvest announcement, 15-minute delivery indicator, support line.
  - **Navbar**: Brand logo with leaf icon, hyperlocal delivery address indicator, live search bar, sign-in button, and cart badge with live currency counter.
  - **Hero Section**: High-impact headline, live harvest feed, floating badges, and quick CTA buttons.
  - **Category Showcase**: Interactive filter pills (All Harvest, Herbs & Seasoning, Leafy Greens, Exotic Veggies, Bell Peppers & Chilis, Roots & Onions).
  - **Featured Products Grid**: Live data consumption from `http://localhost:7173/v1/products/get-all-products`, display of 100+ seeded vegetables with prices, high-res Unsplash images, and interactive `ADD` buttons.
  - **Slide-over Cart Drawer**: Interactive sidebar showing cart items, quantity modifiers, animated free-delivery progress bar, subtotal, delivery charges, and checkout button.
  - **Why Choose Us**: 4 trust pillars explaining zero pesticide residues, cold-chain speed, and farmer empowerment.
  - **How It Works**: 3-step farm-to-fork visual timeline (5 AM Harvest -> Cold Quality Check -> 15-Min Drop).
  - **Customer Testimonials**: 5-star customer reviews from verified urban households.
  - **Footer**: Comprehensive navigation links, FSSAI / NPOP trust badges, customer care contacts, and copyright.
- [x] Dev server tested and verified in live browser subagent with real interactions.

---

## 4. Detailed Future Slices & Feature Roadmap

### Phase 2: Authentication Slice (`src/features/auth`)
*Target Timeline: Sprint 2*
- **Features**:
  - Modal login/signup popup accessible from the navbar.
  - Dual login option: **Email + Password** or **Mobile Number + Password**.
  - Form validation matching backend rules (`email`, `password` min 6 chars, `mobile_number` 10 digits).
  - JWT token storage in `localStorage` (`veg_auth_token`), decoded role extraction (`SUPERADMIN`, `ADMIN`, `CUSTOMER`).
  - Auth context provider (`AuthContext.jsx`) and custom hook (`useAuth.js`).
  - "Forgot Password" & OTP reset flow.
  - Persistent session restoration on page reload.

### Phase 3: Catalog & Advanced Faceted Search (`src/features/catalog`)
*Target Timeline: Sprint 3*
- **Features**:
  - Dedicated `/catalog` or `/vegetables` page with multi-column layout.
  - Left sidebar faceted filters:
    - Price range slider (₹10 – ₹500).
    - Category checkboxes (Leafy, Exotic, Herbs, Roots, Organic Combos).
    - Stock filter ("In Stock Only" toggle).
    - Organic certification filter ("100% Certified", "Transitioning").
  - Sorting options dropdown:
    - Price: Low to High / High to Low.
    - Popularity / Best Sellers.
    - Freshness / Harvest Date.
  - Live debounced search with keyword highlighting.
  - Infinite scroll vs. numbered pagination toggle.

### Phase 4: Product Detail Page (`src/features/product-detail`)
*Target Timeline: Sprint 4*
- **Features**:
  - Dedicated route `/products/:id`.
  - High-resolution multi-angle image gallery with interactive hover zoom.
  - Nutritional facts chart (Calories, Vitamin A/C, Iron, Dietary Fiber per 100g).
  - Farmer origin card: Displays the farmer's name, farm location (e.g., Nashik / Ooty), harvest date and time.
  - Storage & shelf-life guide (e.g., "Best consumed within 3 days. Store refrigerated at 4°C").
  - "Pairs Well With" recommended add-on items carousel.

### Phase 5: Checkout & Payment Flow (`src/features/checkout`)
*Target Timeline: Sprint 5*
- **Features**:
  - Step 1: **Delivery Address Selection**:
    - Stored addresses (Home, Office, Other).
    - Add new address with pincode auto-fill and GPS geolocation picker.
  - Step 2: **Delivery Slot Selection**:
    - Instant Delivery: 15-Minute express courier.
    - Scheduled Delivery: Morning slot (6:00 AM – 8:00 AM) or Evening slot (6:00 PM – 8:00 PM).
  - Step 3: **Discounts & Promo Coupons**:
    - Coupon input field with validation (e.g., `FRESH10` for 10% off, `FIRSTVEG` for ₹50 off).
  - Step 4: **Payment Gateway Integration**:
    - UPI (Google Pay, PhonePe, Paytm, QR scan).
    - Credit/Debit Cards (Visa, Mastercard, RuPay).
    - Cash on Delivery (COD) with verification.
  - Step 5: **Order Summary & Confirmation**:
    - Bill breakdown (Items total, Packaging fee, Delivery charge, Discount, Grand total).
    - Animated confetti success screen with order reference number.

### Phase 6: Live Order Tracking & User Dashboard (`src/features/orders`)
*Target Timeline: Sprint 6*
- **Features**:
  - Dedicated `/orders` and `/orders/:orderId/track` views.
  - Real-time order progress stepper:
    1. *Order Received*
    2. *Harvest / Basket Packed at Cold Hub*
    3. *Rider Assigned & En Route*
    4. *Delivered at Doorstep*
  - Mock interactive live map tracking rider location.
  - Rider details card (Name, phone call button, delivery OTP).
  - Past orders list with 1-click "Reorder Entire Basket" button.
  - Downloadable PDF invoice.

### Phase 7: SuperAdmin & Admin Management Portal (`src/features/admin`)
*Target Timeline: Sprint 7*
- **Features**:
  - Protected admin routes with role verification (`SUPERADMIN` / `ADMIN`).
  - **Product CMS**:
    - Data table of all products with search, sorting, and pagination.
    - "Add New Product" modal with image URL preview, category selector, price input, and availability toggle.
    - Inline edit for price and stock availability.
    - Delete / archive product action with confirmation modal.
  - **Orders Manager**:
    - Live incoming orders queue.
    - Status changer (Pending -> Processing -> Dispatched -> Completed).
  - **User & Role Administration (SuperAdmin Only)**:
    - View all registered users.
    - Assign / revoke Admin privileges.

---

## 5. Backend API Integration Matrix

| Endpoint | HTTP Method | Auth Required | Frontend Slice | Purpose |
|---|---|---|---|---|
| `/v1/auth/login` | `POST` | No | `features/auth` | User/Admin authentication (email/mobile + password) |
| `/v1/auth/register` | `POST` | No | `features/auth` | Customer registration |
| `/v1/products/get-all-products` | `GET` | No | `features/landing`, `features/products` | Fetch paginated products with search filter |
| `/v1/products/:id/get-product-detail` | `GET` | No | `features/product-detail` | Fetch single product by ID |
| `/v1/products/create-product` | `POST` | Yes (`product:create`) | `features/admin` | Create product (Admin / SuperAdmin) |
| `/v1/users/get-all-users` | `GET` | Yes (`user:read`) | `features/admin` | Fetch user accounts list |
| `/v1/users/:id/get-user-detail` | `GET` | Yes (`user:read`) | `features/auth` | Fetch user profile detail |
| `/health` | `GET` | No | System | Healthcheck monitoring |

---

## 6. How to Run Locally

### Start Backend Server (`d:\veggies\veg-api`)
```bash
cd d:\veggies\veg-api
node index.js
# API runs on http://localhost:7173/v1
```

### Start Frontend Server (`d:\veggies\veg-fe`)
```bash
cd d:\veggies\veg-fe
npm run dev
# Frontend runs on http://localhost:5173
```

### Production Build
```bash
cd d:\veggies\veg-fe
npm run build
```
