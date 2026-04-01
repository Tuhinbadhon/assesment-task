# WINstore — E-Commerce Frontend (Next.js)

A Next.js 16 e-commerce storefront built with the App Router, React Server Components, Server Actions, TypeScript, and Tailwind CSS.

---

## How to Run

### Prerequisites

- **Node.js** 18+
- **pnpm** 10+ (specified via `packageManager` in `package.json`)

### Install & Start

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start the development server (http://localhost:3000)
pnpm dev

# Or build for production
pnpm build
pnpm start
```

### Environment Variables

Copy `.env.example` to `.env.local`. The only variable is:

| Variable                   | Description  | Default                                         |
| -------------------------- | ------------ | ----------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | API base URL | `https://mm-assesment-server.vercel.app/api/v1` |

### Available Scripts

| Script       | Description                |
| ------------ | -------------------------- |
| `pnpm dev`   | Start development server   |
| `pnpm build` | Create production build    |
| `pnpm start` | Serve the production build |
| `pnpm lint`  | Run ESLint                 |

---

## Architecture

### Tech Stack

- **Next.js 16** (App Router) — no `pages/` directory
- **React 19** Server & Client Components
- **TypeScript** — strict mode
- **Tailwind CSS 4** — utility-first styling
- **react-icons** — icon library

### Project Structure

```
app/
├── actions/
│   └── products.ts        # Server Actions — all API calls live here
├── components/
│   ├── Header.tsx          # Top bar with logo, search, nav (Server Component)
│   ├── HeroBanner.tsx      # Static promotional banner (Server Component)
│   ├── CategorySlider.tsx  # Horizontally scrollable categories (Client Component)
│   ├── ProductCard.tsx     # Reusable product card (Server Component)
│   ├── NewArrivals.tsx     # Latest 10 products grid (Server Component)
│   ├── BestDeals.tsx       # Category-tabbed product grid (Client Component)
│   └── Footer.tsx          # Site footer with links & payment icons (Server Component)
├── types/
│   └── index.ts            # TypeScript interfaces (Product, Category, ApiResponse)
├── globals.css             # Tailwind imports & custom styles
├── layout.tsx              # Root layout — wraps Header + Footer around pages
└── page.tsx                # Home page (async Server Component, fetches data)
```

### Data Flow

1. **`page.tsx`** (Server Component) calls Server Actions via `await` to fetch products and categories at render time. Requests run in parallel with `Promise.all`.
2. **Server Actions** in `app/actions/products.ts` (`"use server"`) perform all `fetch()` calls to the external API. Every response is validated for `success: true` before returning data.
3. **Server Components** (`NewArrivals`, `ProductCard`, `Header`, `Footer`, `HeroBanner`) receive data as props and render on the server — zero client JS for these.
4. **Client Components** are used only where interactivity is required:
   - `CategorySlider` — horizontal scroll with arrow buttons (`useRef`, `useState`)
   - `BestDeals` — tab switching between categories uses `useTransition` to call the `getProductsByCategory` Server Action without blocking the UI

### API Endpoints Used

| Endpoint                                   | Server Action             |
| ------------------------------------------ | ------------------------- |
| `GET /api/v1/products`                     | `getAllProducts()`        |
| `GET /api/v1/products/categories`          | `getCategories()`         |
| `GET /api/v1/products/category/{category}` | `getProductsByCategory()` |
| `GET /api/v1/products/{id}`                | `getProduct()`            |

All requests use `next: { revalidate: 60 }` for ISR-style caching (revalidated every 60 seconds).

---

## Assumptions

1. **Hero banner is static** — the design shows a promotional banner with "Shop Computer & experience" and a 40% badge. Since no API provides banner data, this is hardcoded as static demo content.
2. **"New Arrivals" = first 10 products** — the API returns all 20 products; the section displays the first 10 as "recent" since the API doesn't have a dedicated recent/new endpoint.
3. **"Best Deals" defaults to the first category** — the initial tab shown is the first category returned by the categories API (electronics). Clicking other tabs fetches products via Server Action.
4. **Product discount is illustrative** — the design shows original and discounted prices. Since the API provides only one price, a 15% discount is applied for display purposes.
5. **Category card labels are mapped** — the API returns category names like `"electronics"` and `"jewelery"`. These are mapped to display labels matching the Figma (e.g., "Electronics", "Fashion", "Appliances", "Babies Store").
6. **Navigation links are placeholder** — links like "Mobile Phones", "Laptops", etc. are non-functional since the assessment only requires the home page.
7. **No authentication or cart logic** — the cart badge shows "0" and account/cart buttons are non-functional, as no auth or cart API was provided.
8. **External images** — product images come from `fakestoreapi.com`. The Next.js image config (`next.config.ts`) allows this remote domain for `next/image` optimization.

# assesment-task
