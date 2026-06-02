# LangDesignWork SEO Audit & Change Tracking

## Document Info
- **Created**: 2026-06-01
- **Author**: Hema (AI Agent)
- **Last Updated**: 2026-06-01
- **Purpose**: Track all SEO/metadata changes for auditing. Enables reverting to HubSpot values if needed.

---

## LIVE HUBSPOT BASELINE (Source of Truth)

| Page | Live Title | Live Description | Live OG Image | Live JSON-LD | Live Canonical |
|------|-----------|-----------------|---------------|--------------|---------------|
| `/` | `LangDesignWork \| Home` | `Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place.` | `LangDesignWorkLogo - social_300_175-2.png` | `WebSite` | `https://www.langdesignwork.com` |
| `/liliane` | `Liliane Xiaoxu Lang \| Ideas & Prototyping \| LangDesignWork` | `Join Liliane Xiaoxu Lang on the Discover Channel! Explore debates, creative projects, and inspirational insights.` | `LangDesignWorkLogo - social_300_175-1.png` | `Person` | `https://www.langdesignwork.com/liliane` |
| `/liliane-create` | `Liliane Xiaoxu Lang \| Ideas & Prototyping \| LangDesignWork` | `Explore the creative work and projects of Liliane Xiaoxu Lang.` | (inherits /liliane) | `Person` | `https://www.langdesignwork.com/liliane-create` |
| `/elizabeth` | `Elizabeth Xiaoyue Lang \| Art & Custom Design \| LangDesignWork` | `Explore the creative journey of Elizabeth Xiaoyue Lang, featuring artworks inspired by those around her and inviting you to discover more.` | `LangDesignWorkLogo - social_300_175-2.png` | `Person` | `https://www.langdesignwork.com/elizabeth` |
| `/elizabeth-custom-design` | `Elizabeth Xiaoyue Lang \| Custom Design Service \| LangDesignWork` | `Commission bespoke artwork and design from Elizabeth Xiaoyue Lang.` | (inherits /elizabeth) | `Person` | `https://www.langdesignwork.com/elizabeth-custom-design` |
| `/remecou` | `Remecou \| Sustainable Goods Operations \| LangDesignWork` | `Hong Kong operations model for sustainable goods. AI-assisted sourcing from China, content co-creation with local partners, and in-market distribution.` | `Remecou logo_featured.jpeg` | `Organization` | `https://www.langdesignwork.com/remecou` |
| `/partner/kidslabuk` | `Kidlab UK \| DIY STEM Kits \| LangDesignWork Partner` | `Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly. From £9.99.` | `kidlab_logo_web_social_feature.jpeg` | `Organization` | `https://www.langdesignwork.com/partner/kidslabuk` |
| `/partner/velvet-essence-design` | ❌ 404 (doesn't exist on HubSpot) | N/A | N/A | N/A | N/A |
| `/blog` | `Lang Design Work Blog Home` | `Explore ideas, creative projects, and reflections from Lang Design Work authors...` | ❌ Missing | ❌ Missing | ❌ Missing |
| `/en/home/blog/ai-creativity-learning` | `How Can AI and Creativity Revolutionize Learning?` | `Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors.` | `REME-1.png` | `BlogPosting` + 2x `VideoObject` + `AudioObject` | `https://www.langdesignwork.com/en/home/blog/ai-creativity-learning` |
| `/en/elizabeth/blog/oil-painting` | `How Did I Do My First Oil Painting: From Canvas to Creation` | `Elizabeth shares her journey of creating her first oil painting — a portrait inspired by Hong Kong Art School classes.` | (inherits /elizabeth) | `BlogPosting` | `https://www.langdesignwork.com/en/elizabeth/blog/oil-painting` |
| `/en/liliane/blog/tote-bag` | `Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design` | `Liliane explores how inspiration can be found in the simple designs and everyday moments around us.` | (inherits /liliane) | `BlogPosting` | `https://www.langdesignwork.com/en/liliane/blog/tote-bag` |

**Total: 12 English pages** (excluding 2 Chinese versions: `/zh-cn/liliane`, `/zh-cn/discover`). The two blog pages (`oil-painting` and `tote-bag`) were initially missed and have now been added.

---

## CHANGE LOG

### 2026-06-01 — Initial SEO Implementation (Hema)
**Commit**: `81a9730`
**Changed By**: Hema (AI Agent)
**Files Created**:
| File | Purpose | Revert Action |
|------|---------|---------------|
| `src/components/SeoMeta.tsx` | Runtime SEO meta injector for client components | Delete file, remove imports |
| `src/app/elizabeth/layout.tsx` | Server-component metadata wrapper for Elizabeth page | Delete file |
| `public/robots.txt` | Crawler directives + sitemap reference | Delete file |
| `public/sitemap.xml` | 12 English page URLs | Delete file |
| `public/images/og-home.png` | Homepage social image | Delete file |
| `public/images/og-liliane.png` | Liliane page social image | Delete file |
| `public/images/og-elizabeth.png` | Elizabeth page social image | Delete file |
| `public/images/og-remecou.jpeg` | Remecou page social image | Delete file |
| `public/images/og-kidlab.jpeg` | Kidlab UK page social image | Delete file |
| `public/images/og-blog-ai-learning.png` | Blog AI post social image | Delete file |

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/layout.tsx` | Added global Organization JSON-LD schema, updated title/desc to match live | Revert to pre-commit version |
| `src/app/page.tsx` | Added `SeoMeta` component, metadata export | Remove SeoMeta, remove metadata export |
| `src/app/liliane/page.tsx` | Added `SeoMeta` component, Person JSON-LD schema, metadata export | Remove SeoMeta, remove schema, remove metadata export |
| `src/app/remecou/page.tsx` | Added `SeoMeta` component, Organization JSON-LD schema, metadata export | Remove SeoMeta, remove schema, remove metadata export |
| `src/app/partner/kidslabuk/page.tsx` | Added `SeoMeta` component, Organization JSON-LD schema, metadata export | Remove SeoMeta, remove schema, remove metadata export |
| `src/app/partner/velvetessencedesign/page.tsx` | Added `SeoMeta` component (new page — no HubSpot equivalent) | Remove SeoMeta |
| `src/app/en/home/blog/page.tsx` | Added metadata export (title, desc, OG, canonical) | Remove metadata export |
| `src/app/en/home/blog/ai-creativity-learning/page.tsx` | Added `SeoMeta` component, BlogPosting JSON-LD schema, metadata export | Remove SeoMeta, remove schema, remove metadata export |

**Values Used**: All metadata values copied from live HubSpot pages (see baseline table above).

---

### 2026-06-01 — Homepage Interactive Cards (Hema)
**Commit**: TBD
**Changed By**: Hema (AI Agent)
**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/page.tsx` | Added hover lift, shadow, scale, color transitions to creator cards and partner cards | Revert to pre-commit version |

---

### 2026-06-01 — Liliane & Elizabeth Interactive Redesign (Hema)
**Commit**: TBD
**Changed By**: Hema (AI Agent)
**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/liliane/page.tsx` | Full redesign: gradient hero, interactive Works cards with hover lift/scale/color, interactive image cards with zoom overlay, animated background dots | Revert to pre-commit version |
| `src/app/elizabeth/page.tsx` | Full redesign: gradient hero, interactive gallery cards (8 items) with hover lift/scale/color, interactive art section cards with gradient accent lines, animated background dots | Revert to pre-commit version |

---

### 2026-06-01 — Missing Blog Pages Added + SEO Fixed (Hema)
**Commit**: TBD
**Changed By**: Hema (AI Agent)
**Files Created**:
| File | Purpose | Revert Action |
|------|---------|---------------|
| `src/app/en/liliane/blog/tote-bag/page.tsx` | Full tote bag blog page: gradient hero, interactive tote bag showcase cards, Shantell's story card, BlogPosting JSON-LD, SeoMeta | Delete file |

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/en/elizabeth/blog/oil-painting/page.tsx` | Added missing `SeoMeta` component + `BlogPosting` JSON-LD schema | Remove SeoMeta import, remove SeoMeta component, remove schema script |
| `SEO_AUDIT.md` | Added 4 missing pages to baseline table (liliane-create, elizabeth-custom-design, oil-painting, tote-bag) — total now 12 EN pages | Revert to pre-commit version |

---

### 2026-06-01 — Velvet Essence Partner Page (Hema)
**Commit**: `6613bd2`
**Changed By**: Hema (AI Agent)
**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/partner/velvetessencedesign/page.tsx` | Hardcoded 8 products (2 rows × 4 cols), removed RSS fetch | Revert to RSS-fetch version |

---

### 2026-06-01 — Kidlab UK Page Cleanup (Hema)
**Commit**: `956fbbf`
**Changed By**: Hema (AI Agent)
**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/partner/kidslabuk/page.tsx` | Reduced from 12 to 8 products (removed CTA cards), 4-col grid → 2 rows | Revert to 12-item version |

---

## REVERT GUIDE

### To revert a page to its pre-SEO state:
1. Find the commit hash before SEO was added
2. Run: `git checkout <commit-hash> -- src/app/<page>/page.tsx`
3. Rebuild and deploy

### To revert metadata values to live HubSpot:
Use the "LIVE HUBSPOT BASELINE" table above. All values in the code match those values exactly.
To change back, replace the `title`, `description`, `ogImage` in the `SeoMeta` component with the baseline values.

### To remove all SEO additions:
```bash
git revert 81a9730
```
This will undo the entire SEO implementation commit.

---

## IMAGE & VIDEO ALT TEXT INVENTORY

All `<Image>`, `<img>`, and `<video>` tags across the site. Dynamic images (product cards, gallery items) use variable-based alt text from content data.

### Homepage (`/`)

| File Path | Image/Video | Alt Text |
|-----------|-------------|----------|
| `/images/liliane-discover.jpg` | Creator card image | Liliane Xiaoxu Lang |
| `/images/elizabeth-mingrige.jpg` | Creator card image | Elizabeth Xiaoyue Lang |
| `/images/kidlab-logo.jpg` | Partner logo | Kidlab UK |
| `/images/velvet-essence-logo.jpg` | Partner logo | Velvet Essence Design |

### Liliane Page (`/liliane`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/lili-remake.jpg` | Work showcase | Liliane Xiaoxu Lang AI prototype REME Smart Home Device |
| `/images/lili-reflections.jpg` | Work showcase | Liliane Reflections on AI usage |
| `/images/lili-ideas.jpg` | Work showcase | Liliane Xiaoxu Lang ideas |
| `/images/lili-artwork-home.jpg` | Work showcase | Liliane Xiaoxu Lang artwork home |
| `/images/lili-rugby.jpg` | Work showcase | Liliane Xiaoxu Lang rugby |
| Dynamic (Works cards) | Work images | `alt={alt}` — passed per card |
| Dynamic (WorkShowcase) | Gallery images | `alt={alt}` — passed per card |

### Elizabeth Page (`/elizabeth`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/elizabeth-railway.jpg` | Gallery artwork | recycled materials railway UAL |
| `/images/elizabeth-silent-eyes.jpg` | Gallery artwork | water colour painting silent eyes |
| `/images/elizabeth-oil-painting.jpg` | Gallery artwork | fleeting moment boy oil painting |
| `/images/elizabeth-land-of-ma.jpg` | Gallery artwork | elizabeth lang land of ma colour pens |
| `/images/elizabeth-joy.jpg` | Artwork | Happy Portrait Pastels |
| `/images/elizabeth-yeye.jpg` | Artwork | yeye still life pencil |
| `/images/elizabeth-girl.jpg` | Artwork | girl portrait pastels |
| `/images/elizabeth-cherished.jpg` | Artwork | Cherished marker art |
| `/images/elizabeth-moon-cheese.svg` | Artwork | Moon Cheese water color |
| `/images/elizabeth-penguin.jpg` | Artwork | penguin sketch |
| `/images/elizabeth-butterfly.svg` | Artwork | butterfly acrylic colour |
| `/images/elizabeth-heart.jpg` | Artwork | Heart Pen |
| Dynamic (GalleryCard) | Gallery images | `alt={alt}` — passed per card |
| Dynamic (WorkShowcase) | Showcase images | `alt={alt}` — passed per card |

### Remecou Page (`/remecou`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/remecou-logo.jpeg` | Logo | Remecou Trading Limited |

### Kidlab UK (`/partner/kidslabuk`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/kidlab-logo.jpg` | Partner logo | Kidlab UK |
| Dynamic (product cards) | Product images | `alt={product.name}` — from product data |

### Velvet Essence (`/partner/velvetessencedesign`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/velvet-essence-logo.jpg` | Partner logo | Velvet Essence Design |
| Dynamic (product cards) | Product images | `alt={product.name}` — from product data |

### Tote Bag Blog (`/en/liliane/blog/tote-bag`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/author-liliane.jpg` | Author photo | Liliane Xiaoxu Lang |
| `/blog-shantell.jpg` | Contributor photo | Shantell Morrison |
| Dynamic (tote showcase) | Tote bag images | `alt={label}` — passed per card |

### Oil Painting Blog (`/en/elizabeth/blog/oil-painting`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/author-elizabeth.jpg` | Author photo | Elizabeth Xiaoyue Lang |
| `/boy-oil-painting.jpg` | Featured artwork | Elizabeth's first oil painting - portrait of a little boy |
| YouTube thumbnail (dynamic) | Video thumbnail | `alt={title}` — YouTube video title |

### AI Creativity Blog (`/en/home/blog/ai-creativity-learning`)

| File Path | Media | Alt Text |
|-----------|-------|----------|
| `/images/author-qian-liu.jpg` | Author photo | Qian Liu |
| `/ai-creativity-learning.mp4` | Video (REME Story) | `alt={caption}` → "REME Story" |
| `/ai-creativity-learning-thumb.jpg` | Video poster | `alt={caption}` → "REME Story" |
| `/ai-creativity-research.mp4` | Video (REME Research) | `alt={caption}` → "REME Research" |
| `/ai-creativity-research-thumb.jpg` | Video poster | `alt={caption}` → "REME Research" |
| `/ai-creativity-technical.mp4` | Video (REME Technical) | `alt={caption}` → "REME Technical" |
| `/ai-creativity-technical-thumb.jpg` | Video poster | `alt={caption}` → "REME Technical" |

### Chinese Homepage (`/zh-cn`)

| File Path | Image | Alt Text |
|-----------|-------|----------|
| `/images/liliane-discover.jpg` | Creator card image | 莉莉安 晓旭 Lang |
| `/images/elizabeth-mingrige.jpg` | Creator card image | 伊丽莎白 晓月 Lang |
| `/images/kidlab-logo.jpg` | Partner logo | Kidlab UK |
| `/images/velvet-essence-logo.jpg` | Partner logo | Velvet Essence Design |

---

## OPEN QUESTIONS / TODO
- [ ] Google Search Console: Submit sitemap and verify site ownership
- [ ] Upload SEO_AUDIT.md to Google Drive (token expired)
- [ ] Add `og:image` for blog home page (missing on HubSpot too)
- [ ] Add `og:image` for oil-painting and tote-bag blog pages (currently inheriting parent page images)
- [ ] Add `hreflang` tags for ZH/EN page alternates
- [ ] Velvet Essence page has no HubSpot equivalent — SEO values created from scratch
- [ ] Download actual blog images for tote-bag page (placeholder paths: `/blog-tote-shoe.jpg`, `/blog-tote-flower.jpg`, `/blog-tote-book.jpg`, `/blog-shantell.jpg`)
