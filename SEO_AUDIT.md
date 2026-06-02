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
---

## HUBSPOT ADDITIONAL SNIPPET — COMPLETE AUDIT & GAP ANALYSIS

*Scraped from live HubSpot site on 2026-06-02. This captures ALL custom code injected via HubSpot page settings → Additional Snippets (not just basic meta tags).*

---

### TRACKING PIXELS & INTEGRATIONS AUDIT

| Integration | HubSpot (Live) | Vercel (Current) | Gap | Action Required |
|------------|---------------|------------------|-----|-----------------|
| **GA4** (`G-8S28SC7LSQ`) | ✅ All 12 pages (gtag.js) | ✅ **Active** (gtag.js in layout.tsx, commit d99a877) | ✅ **Fixed** Jun 2 | Done |
| **Facebook Pixel** (`1727019827969098`) | ✅ All 12 pages (fbq init + track PageView) | ✅ **Active** (fbq in layout.tsx + noscript, commit d99a877) | ✅ **Fixed** Jun 2 | Done |
| **LinkedIn Insight Tag** (`8304644`) | ✅ All 12 pages (insight.min.js) | ✅ **Active** (insight.min.js in layout.tsx + noscript, commit d99a877) | ✅ **Fixed** Jun 2 | Done |
| **TikTok Pixel** | ✅ `/partner/kidslabuk` only | ❌ Link only, NO pixel | 🔴 Missing | Add TikTok pixel to Kidlab page if needed |
| **HubSpot Tracking** (`244077776`) | ✅ js.hs-scripts.com loader | ✅ Present (HubSpotTracking.tsx) | ✅ OK | No action needed |
| **HubSpot Forms** | ✅ js.hsforms.net/embed/v2.js | ✅ Present (HubSpotTracking.tsx) | ✅ OK | No action needed |
| **Google Ads** | ❌ Not found | ❌ Not needed | ✅ OK | No action needed |
| **Hotjar** | ❌ Not found | ❌ Not needed | ✅ OK | No action needed |

---

### PAGE-BY-PAGE ADDITIONAL SNIPPET COMPARISON

**Legend:** ✅ = Match / Present | ⚠️ = Partial / Different | ❌ = Missing | 🔴 = Critical gap

| # | Feature | HubSpot (Additional Snippet) | Vercel (Current Code) | Gap Analysis | Pro (Add) | Con (Don't Add / Modify) | Lucy's Comment |
|---|---------|------------------------------|----------------------|--------------|-----------|-------------------------|----------------|
| | **Homepage (`/`)** | | | | | | |
| 1 | OG Title | LangDesignWork \| Home | LangDesignWork \| Home | ✅ Match | — | — | |
| 2 | OG Description | Creativity. Community. Commerce... | Creativity. Community. Commerce... | ✅ Match | — | — | |
| 3 | OG Image | LangDesignWorkLogo - social_300_175-2.png | /images/og-home.png | ✅ Local copy | — | — | |
| 4 | og:image:alt | Lang Design Work Social Media | ✅ Added (commit d99a877) | ✅ **Fixed** Jun 2 | — | — | |
| 5 | Twitter Card | summary_large_image | summary_large_image (SeoMeta default) | ✅ Match | — | — | |
| 6 | Organization Schema | Yes (5 sameAs: LinkedIn, Facebook, YouTube, Instagram, X) | ✅ Yes (5 sameAs: LinkedIn, Facebook, YouTube, Instagram, X) — restored Jun 2 | ✅ **Fixed** Jun 2 | — | — | |
| 7 | WebSite Schema | Yes | Yes | ✅ Match | — | — | |
| | **Liliane Page (`/liliane`)** | | | | | | |
| 8 | OG Title | Liliane Xiaoxu Lang \| Ideas & Prototyping \| LangDesignWork | Meet Liliane \| LangDesignWork | ⚠️ Different — Vercel simplified | HubSpot title is more descriptive for SEO | Shorter title may be cleaner for sharing | |
| 9 | OG Description | Join Liliane Xiaoxu Lang on the Discover Channel! Explore debates, creative projects, and inspirational insights. | Liliane is the creative force behind... | ⚠️ Different — HubSpot mentions "Discover Channel" | HubSpot desc matches URL intent better | Vercel version is more personal | |
| 10 | OG Image | LangDesignWorkLogo - social_300_175-1.png | /images/og-liliane.png | ✅ Local copy | — | — | |
| 11 | og:image:alt | Liliane Xiaoxu Lang Discover Channel – creativity, debates, and insights | ❌ MISSING | 🔴 Missing | Accessibility + social sharing | — | |
| 12 | Twitter Card | summary_large_image | ❌ Not set per-page | 🔴 Missing | Proper Twitter sharing | — | |
| 13 | Person Schema | Full: name, jobTitle ("Innovator & Student"), description, image (Liliane Xiaoxu Lang.jpg), affiliation | Basic: @type: Person only | 🔴 Missing jobTitle, description, image, affiliation | Rich results, Google Knowledge Graph | — | |
| 14 | VideoObject Schema | Yes: "Liliane Lang Discover Channel, AI powered prototype", duration PT2M28S, thumbnail REME-1.png, transcript text, publisher, embedUrl | ❌ MISSING | 🔴 Completely missing | Video rich results in Google Search, video carousel eligibility | — | |
| 15 | ImageObject Schema | 5 ImageObjects: hero image (representativeOfPage: true), REME prototype, Reflections, Ideas, Rugby — each with caption + description | ❌ MISSING | 🔴 Completely missing | Google Images rich results, image captions in search | — | |
| 16 | WebPage Schema | Yes: url=/discover, name, description, primaryImageOfPage, relatedLink, about, inLanguage | ❌ MISSING | 🔴 Completely missing | Page structure understanding by search engines | — | |
| | **Liliane Create (`/liliane-create`)** | | | | | | |
| 17 | OG Title | Liliane Xiaoxu Lang — Creation \| LangDesignWork | ❓ Needs verification | ❓ Unknown | — | — | |
| 18 | OG Description | Liliane Xiaoxu Lang's video gallery showcasing her ideas, creative process, and the path from ideation to creation. | ❓ Needs verification | ❓ Unknown | — | — | |
| 19 | OG Image | raccoon.jpeg (clay raccoon) | ❓ Needs verification | ❓ Unknown | — | — | |
| 20 | og:image:alt | Hand-crafted clay raccoon by Liliane Xiaoxu Lang | ❌ MISSING | 🔴 Missing | — | — | |
| 21 | Twitter Card | summary_large_image | ❌ Not set | 🔴 Missing | — | — | |
| 22 | Person Schema | Full: name, jobTitle ("Creator & Student"), description, image (raccoon_social.jpeg) | ❓ Partial | 🔴 Missing jobTitle, description | — | — | |
| 23 | VideoObject Schema | 2 videos: "Sew and Style Your Top" (PT2M46S), "Make an Adorable Clay Raccoon" (PT1M26S) | ❌ MISSING | 🔴 Completely missing | Video rich results for both videos | — | |
| | **Elizabeth Page (`/elizabeth`)** | | | | | | |
| 24 | OG Title | Elizabeth Xiaoyue Lang \| Art & Custom Design \| LangDesignWork | Elizabeth Xiaoyue Lang \| Art & Custom Design \| LangDesignWork | ✅ Match | — | — | |
| 25 | OG Description | Explore the creative journey of Elizabeth Xiaoyue Lang... | Explore the creative journey of Elizabeth Xiaoyue Lang... | ✅ Match | — | — | |
| 26 | OG Image | LangDesignWorkLogo - social_300_175-2.png | /images/og-elizabeth.png | ✅ Local copy | — | — | |
| 27 | og:image:alt | Lang Design Work Social Media | ❌ MISSING | 🔴 Missing | — | — | |
| 28 | Twitter Card | summary_large_image | ❌ Not set per-page | 🔴 Missing | — | — | |
| 29 | Person Schema | Full: name, jobTitle ("Artist & Student"), description, image (Elizabeth Xiaoyue Lang.jpg) | Basic: @type: Person only | 🔴 Missing jobTitle, description, image | Knowledge Graph eligibility | — | |
| 30 | ItemList Schema | Yes (6 items) | ❌ MISSING | 🔴 Missing | Google may show item list in search | — | |
| | **Elizabeth Custom Design (`/elizabeth-custom-design`)** | | | | | | |
| 31 | OG Title | Custom Design by Elizabeth Xiaoyue Lang \| LangDesignWork | Custom Design by Elizabeth Xiaoyue Lang \| LangDesignWork | ✅ Match | — | — | |
| 32 | OG Description | Explore the custom illustration & design portfolio of Elizabeth Xiaoyue Lang. Discover unique, playful, and colourful work. | Explore the custom illustration & design portfolio... | ✅ Match | — | — | |
| 33 | OG Image | girl with umbrella_social.jpeg | ❌ No dedicated OG image | 🔴 Missing | Social sharing shows relevant image | — | |
| 34 | og:image:alt | Elizabeth Xiaoyue Lang Custom Design | ❌ MISSING | 🔴 Missing | — | — | |
| 35 | Twitter Card | summary_large_image | ❌ Not set | 🔴 Missing | — | — | |
| 36 | Person Schema | Full: name, jobTitle ("Creator & Designer"), description, image (girl with umbrella_social.jpeg) | ❌ MISSING | 🔴 Completely missing | Knowledge Graph, rich results | — | |
| 37 | WebPage Schema | Yes: url, name, description | ❌ MISSING | 🔴 Missing | Page structure for search engines | — | |
| 38 | ImageGallery Schema | Yes | ❌ MISSING | 🔴 Missing | Google Image search for gallery pages | — | |
| 39 | Product Schema | 2 Products | ❌ MISSING | 🔴 Missing | Product rich results (price, availability) | May need real product data | |
| 40 | ItemList Schema | Yes (2 items) | ❌ MISSING | 🔴 Missing | — | — | |
| | **Remecou (`/remecou`)** | | | | | | |
| 41 | OG Title | Remecou \| Sustainable Goods Operations \| LangDesignWork | Remecou \| Sustainable Goods Operations \| LangDesignWork | ✅ Match | — | — | |
| 42 | OG Description | Hong Kong operations model for sustainable goods... | Hong Kong operations model for sustainable goods... | ✅ Match | — | — | |
| 43 | OG Image | Remecou logo_featured.jpeg | /images/og-remecou.jpeg | ✅ Local copy | — | — | |
| 44 | og:image:alt | ❌ MISSING on HubSpot too | ❌ MISSING | ✅ Both missing | Could add alt text | — | |
| 45 | Twitter Card | summary_large_image | ❌ Not set per-page | 🔴 Missing | — | — | |
| 46 | Organization Schema | Remecou + LangDesignWork | LangDesignWork only | ⚠️ Missing Remecou Organization | Brand separation for search engines | — | |
| 47 | WebPage Schema | Yes: url, name, description | ❌ MISSING | 🔴 Missing | — | — | |
| | **Kidlab UK (`/partner/kidslabuk`)** | | | | | | |
| 48 | OG Title | Kidlab UK \| DIY STEM Kits \| LangDesignWork Partner | Kidlab UK \| DIY STEM Kits \| LangDesignWork Partner | ✅ Match | — | — | |
| 49 | OG Description | Swap screen time for hands-on discovery... | Swap screen time for hands-on discovery... | ✅ Match | — | — | |
| 50 | OG Image | kidlab_logo_web_social_feature.jpeg | /images/og-kidlab.jpeg | ✅ Local copy | — | — | |
| 51 | og:image:alt | kidlab logo | ❌ MISSING | 🔴 Missing | — | — | |
| 52 | Twitter Card | summary (not large) | summary_large_image (SeoMeta default) | ⚠️ Different — HubSpot uses summary | HubSpot choice may be intentional for logo-only image | Large image looks better in Twitter | |
| 53 | Organization Schema | Kidlab UK + Lang Design Work | LangDesignWork only | ⚠️ Missing Kidlab Organization | Partner brand recognition | — | |
| 54 | WebPage Schema | Yes: url, name, description | ❌ MISSING | 🔴 Missing | — | — | |
| | **Velvet Essence (`/partner/velvetessencedesign`)** | | | | | | |
| 55 | OG Title | ❌ 404 — does not exist on HubSpot | SEO values created from scratch | ✅ New page | — | — | |
| 56 | OG Image | N/A | Inherits parent or default | ⚠️ No dedicated image | Should add dedicated OG image | — | |
| 57 | og:image:alt | N/A | ❌ MISSING | 🔴 Missing | — | — | |
| 58 | Twitter Card | N/A | ❌ Not set | 🔴 Missing | — | — | |
| 59 | Organization Schema | N/A | ❌ MISSING | 🔴 Missing — should add | Brand recognition for new partner | — | |
| 60 | Product Schema | N/A | ❌ MISSING | 🔴 Missing — should add | Product rich results for 8 products | — | |
| | **Blog Home (`/blog`)** | | | | | | |
| 61 | OG Title | Lang Design Work Blog Home | Lang Design Work Blog Home | ✅ Match | — | — | |
| 62 | OG Description | Explore ideas, creative projects, and reflections... | Explore ideas, creative projects, and reflections... | ✅ Match | — | — | |
| 63 | OG Image | ❌ MISSING on HubSpot too | ❌ MISSING | ✅ Both missing | Should add blog OG image | — | |
| 64 | Twitter Card | summary | summary_large_image (SeoMeta default) | ⚠️ Different | Summary may be intentional for text-only blog | — | |
| 65 | JSON-LD | ❌ NONE on HubSpot | ❌ NONE | ✅ Both missing | Could add Blog schema | — | |
| | **AI Creativity Blog (`/en/home/blog/ai-creativity-learning`)** | | | | | | |
| 66 | OG Title | How Can AI and Creativity Revolutionize Learning? | How Can AI and Creativity Revolutionize Learning? | ✅ Match | — | — | |
| 67 | OG Description | Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors. | Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors. | ✅ Match | — | — | |
| 68 | OG Image | REME-1.png | Local copy | ✅ Match | — | — | |
| 69 | og:image:alt | Liliane Lang and Elizabeth Lang and their REME smart device prototype. | ❌ MISSING | 🔴 Missing | — | — | |
| 70 | Twitter Card | summary | ❌ Not set per-page | 🔴 Missing | — | — | |
| 71 | BlogPosting Schema | Yes | Yes | ✅ Match | — | — | |
| 72 | VideoObject Schema | 3 VideoObjects (basic, no duration/transcript) | 3 VideoObjects (basic) | ⚠️ Both basic | Should add duration, uploadDate, transcript, publisher | Requires manual data entry | |
| 73 | ImageObject Schema | ❌ None | ImageObject present (basic) | ⚠️ Vercel has basic, HubSpot didn't | Could add caption, description fields | — | |
| | **Oil Painting Blog (`/en/elizabeth/blog/oil-painting`)** | | | | | | |
| 74 | OG Title | How Did I Do My First Oil Painting: From Canvas to Creation | How Did I Do My First Oil Painting: From Canvas to Creation | ✅ Match | — | — | |
| 75 | OG Description | Explore Elizabeth Xiaoyue Lang's first oil painting... | Explore Elizabeth Xiaoyue Lang's first oil painting... | ✅ Match | — | — | |
| 76 | OG Image | Elizabeth.jpeg | Inherits /elizabeth | ⚠️ Different image source | HubSpot had dedicated image | — | |
| 77 | og:image:alt | elizabeth lang oil painting | ❌ MISSING | 🔴 Missing | — | — | |
| 78 | Twitter Card | summary_large_image | ❌ Not set per-page | 🔴 Missing | — | — | |
| 79 | BlogPosting Schema | Yes (×2) | Yes (×1) | ⚠️ HubSpot had 2, Vercel has 1 | Apply BlogPosting schema to all blog posts | — | |
| | **Tote Bag Blog (`/en/liliane/blog/tote-bag`)** | | | | | | |
| 80 | OG Title | Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design | Different (simplified) | ⚠️ Vercel simplified | HubSpot title is more engaging for clicks | Vercel title may be cleaner | |
| 81 | OG Description | Liliane Xiaoxu Lang explores how everyday design inspires creativity, turning simple ideas into stylish personalized tote bags. | Different | ⚠️ Vercel different | HubSpot desc is more specific | — | |
| 82 | OG Image | lily blog email top banner-1.jpeg | Inherits /liliane | ⚠️ Different image source | HubSpot had dedicated blog banner | — | |
| 83 | og:image:alt | Shantell Morrison book tote bag | ❌ MISSING | 🔴 Missing | — | — | |
| 84 | Twitter Card | summary_large_image | ❌ Not set per-page | 🔴 Missing | — | — | |
| 85 | BlogPosting Schema | Yes (×2) | Yes (×1) | ⚠️ HubSpot had 2, Vercel has 1 | Apply BlogPosting schema to all blog posts | — | |

---

### TRACKING INTEGRATION PRIORITY MATRIX

| Priority | Integration | Impact | Effort | Recommendation |
|----------|------------|--------|--------|----------------|
| **P1** | GA4 (`G-8S28SC7LSQ`) | Critical — all analytics data lost | Low (1 script tag) | ✅ Add immediately |
| **P1** | Facebook Pixel (`1727019827969098`) | High — ad retargeting, conversion tracking | Low (1 script tag) | ✅ Add immediately |
| **P2** | LinkedIn Insight Tag (`8304644`) | Medium — B2B audience tracking | Low (1 script tag) | ⏳ Add after GA4 + FB |
| **P3** | TikTok Pixel (Kidlab only) | Low — only needed if running TikTok ads | Low | ⏳ Add only if running TikTok ads for Kidlab |

---

### RECOMMENDED ACTIONS SUMMARY

| # | Action | Pages Affected | Priority | Complexity |
|---|--------|---------------|----------|------------|
| 1 | Add GA4 tracking (gtag.js) to layout.tsx | All 12 pages | P1 | Low |
| 2 | Add Facebook Pixel to layout.tsx | All 12 pages | P1 | Low |
| 3 | Add LinkedIn Insight Tag to layout.tsx | All 12 pages | P2 | Low |
| 4 | Add og:image:alt to all pages with OG images | 10 pages | P2 | Low |
| 5 | Enhance Person schema with jobTitle, description, image | /liliane, /liliane-create, /elizabeth, /elizabeth-custom-design | P2 | Medium |
| 6 | Add VideoObject schema with duration, transcript, publisher | /liliane, /liliane-create, AI creativity blog | P2 | Medium |
| 7 | Add ImageObject schema with captions | /liliane (5 images) | P3 | Medium |
| 8 | Add WebPage schema to all pages | All 12 pages | P3 | Medium |
| 9 | Add Organization schema for partners | /remecou, /partner/kidslabuk, /partner/velvetessencedesign | P3 | Low | ✅ Done |
| 10 | Add ItemList schema (Product schemas skipped — static build risk) | /elizabeth-custom-design (done), /partner/velvetessencedesign (done — ItemList only) | P3 | Medium | ✅ Done |
| 11 | Add dedicated OG images where missing | /elizabeth-custom-design, /partner/velvetessencedesign, /blog | P2 | Low |
| 12 | Apply BlogPosting schema to ALL blog posts | All current and future blog posts | P2 | Low |
| 13 | Fix OG titles/descriptions to match HubSpot where Vercel differs | /liliane, /en/liliane/blog/tote-bag | P2 | Low |
| 14 | Add per-page Twitter meta tags | All pages | P3 | Low |
| 15 | Restore missing sameAs links (Facebook, X) | Homepage | P3 | Low |

---

## CHANGE LOG — Phase 1+2 (Tracking + SEO Foundation)

### 2026-06-02 — Phase 1: Critical Tracking Fixes (Hema)
**Commit**: `d99a877`
**Changed By**: Hema

**Files Created/Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/components/ContactModal.tsx` | Fixed HubSpot form region: `na1` → `na2` | Change region back to `na1` |
| `src/app/layout.tsx` | Added GA4 (G-8S28SC7LSQ), Facebook Pixel (1727019827969098), LinkedIn Insight Tag (8304644) with noscript fallbacks | Remove all Script blocks and noscript tags |
| `src/app/layout.tsx` | Added `<link rel="llm-txt">` reference to `llms.txt` | Remove link tag |
| `src/app/layout.tsx` | Restored Organization sameAs links: added YouTube (`@langdesignwork`) and X (`@langdesignwork`) — now 5 total | Remove from sameAs array |
| `src/components/SeoMeta.tsx` | Added `ogImageAlt`, `twitterTitle`, `twitterDescription`, `twitterImage` props + `og:image:alt` meta injection | Revert to previous version |

### 2026-06-02 — Phase 2: SEO Metadata Enhancements (Hema)
**Commit**: `d99a877`
**Changed By**: Hema

**Pages Updated** (all 12 pages now have explicit `ogTitle`, `ogDescription`, `ogImageAlt`):
| Page | Changes |
|------|---------|
| `/` (Homepage) | Added `ogImageAlt: "Lang Design Work Social Media"`, explicit `ogTitle`/`ogDescription` |
| `/liliane` | Added `ogImageAlt: "Liliane Xiaoxu Lang Discover Channel – creativity, debates, and insights"`, explicit `ogTitle`/`ogDescription` |
| `/liliane-create` | **Added SeoMeta** (was missing). Set title, description, OG, alt text |
| `/elizabeth` | **Added SeoMeta** (was missing). Set title, description, OG, alt text |
| `/elizabeth-custom-design` | **Added SeoMeta** (was missing). Set title, description, OG, alt text |
| `/remecou` | Added explicit `ogTitle`/`ogDescription` |
| `/partner/kidslabuk` | Added `ogImageAlt: "kidlab logo"`, explicit `ogTitle`/`ogDescription` |
| `/partner/velvetessencedesign` | Added `ogImageAlt: "Velvet Essence Design hand-printed tote bags"`, explicit `ogTitle`/`ogDescription` |
| `/en/home/blog` | Added OG image alt text, explicit Twitter images |
| `/en/home/blog/ai-creativity-learning` | Added `ogImageAlt: "Liliane Lang and Elizabeth Lang and their REME smart device prototype."`, explicit `ogTitle`/`ogDescription` |
| `/en/elizabeth/blog/oil-painting` | Added `ogImageAlt: "elizabeth lang oil painting"`, explicit `ogTitle`/`ogDescription` |
| `/en/liliane/blog/tote-bag` | Fixed description to match HubSpot, added `ogImageAlt: "Shantell Morrison book tote bag"`, explicit `ogTitle`/`ogDescription` |

**Impact**: 15 files changed, 144 insertions, 9 deletions

### 2026-06-02 — Liliane Page Schema Enhancement (Hema)
**Commit**: `18a60d3`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/liliane/page.tsx` | Converted Person schema to `@graph` with 7 items: Person (added description + affiliation), VideoObject (duration PT2M28S, transcript, publisher), 5× ImageObject (captions + descriptions), WebPage (primaryImageOfPage) | Revert to single Person schema |

### 2026-06-02 — Liliane Create Page Person Schema (Hema)
**Commit**: `bc47069`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/liliane-create/page.tsx` | Added Person schema: jobTitle "Creator & Student", description, affiliation to LangDesignWork | Remove script block |

### 2026-06-02 — Elizabeth Page Person Schema Enhancement (Hema)
**Commit**: `1daa9c1`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/elizabeth/page.tsx` | Updated Person schema: jobTitle "Artist & Student" (from HubSpot), enhanced description, added image URL + affiliation to LangDesignWork | Revert script block |

### 2026-06-02 — Remecou Page WebPage Schema Enhancement (Hema)
**Commit**: `51c191a`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/remecou/page.tsx` | Converted Organization schema to `@graph` with 2 items: Organization (unchanged) + WebPage (url, name, description, inLanguage: en-GB, mainEntity → Organization) | Revert to single Organization schema |

### 2026-06-02 — Elizabeth Custom Design Full Schema (Hema)
**Commit**: `1392381`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/elizabeth-custom-design/page.tsx` | Added `@graph` with 6 items: Person (jobTitle "Creator & Designer"), WebPage (mainEntity → Person), ImageGallery, 2× Product (Whimsical Butterfly Tote Bag + Daydreams in Stereo Tote Bag with £13.99 GBP offers), ItemList (2 products) | Remove script block |

### 2026-06-02 — Kidlab UK WebPage + Service Schema (Hema)
**Commit**: `73c963f`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/partner/kidslabuk/page.tsx` | Converted Organization schema to `@graph` with 2 items: Organization (unchanged) + WebPage (name, description, mainEntity → Service "Kidlab UK STEM Discovery Community") | Revert to single Organization schema |

### 2026-06-02 — Velvet Essence Design Schema (Hema)
**Commit**: `a6c1473`
**Changed By**: Hema

**Files Modified**:
| File | What Changed | Revert Action |
|------|-------------|---------------|
| `src/app/partner/velvetessencedesign/page.tsx` | Added `@graph` with 3 items: Organization (name, Etsy/TikTok sameAs, London address), WebPage (name, description, mainEntity → Organization), ItemList (8 collection items by name only — no prices, to avoid stale price mismatch) | Remove script block |

**Note**: Skipped individual Product schemas — static build means prices would drift from live Etsy listings. ItemList provides collection structure without price penalty risk.

---
