# Gaffy Studios 🎬

> The main business site for **Gaffy Studios Ltd** — the parent studio
> behind **SHOTBYGAFAR** (photography · videography · cinematography)
> and the **Gafar Aleshe** personal brand, plus tech products like
> InvoiceFlow and LinkVault.

Same index-card / graph-paper design language as
[gafaraleshe.com](https://www.gafaraleshe.com), on a black canvas.

## Pages

| Route        | Purpose                                              |
| ------------ | ---------------------------------------------------- |
| `/`          | Studio home — brands, services, products, contact    |
| `/portfolio` | Video production work (weddings, brand, events)      |
| `/shop`      | LUTs & Lightroom presets (digital downloads)         |
| `/links`     | Every link — brands, socials, products, referrals    |
| `/faq`       | Bookings, payments, delivery, download policies      |
| `/terms`     | Terms & conditions (Gaffy Studios Ltd)               |

## Tech Stack

| Layer      | Tool                    |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Styling    | Tailwind CSS v4         |
| Animation  | Framer Motion           |
| Icons      | lucide-react + inline SVG |
| Deployment | Vercel                  |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

- **Shop products** — edit the `products` array in `app/shop/page.tsx`
  and paste each product's checkout link into `checkoutUrl`.
- **Portfolio** — edit the `works` array in `app/portfolio/page.tsx`
  and point `videoUrl` at each project's video.
- **Links** — edit `socials` and `features` in `app/links/page.tsx`.

## Contact

- Email: contact@shotbygafar.com
- Instagram: [@gaffystudios](https://instagram.com/gaffystudios)
