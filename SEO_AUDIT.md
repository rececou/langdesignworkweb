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

## OPEN QUESTIONS / TODO
- [ ] Google Search Console: Submit sitemap and verify site ownership
- [ ] Upload SEO_AUDIT.md to Google Drive (token expired)
- [ ] Add `og:image` for blog home page (missing on HubSpot too)
- [ ] Add `og:image` for oil-painting and tote-bag blog pages (currently inheriting parent page images)
- [ ] Add `hreflang` tags for ZH/EN page alternates
- [ ] Velvet Essence page has no HubSpot equivalent — SEO values created from scratch
- [ ] Download actual blog images for tote-bag page (placeholder paths: `/blog-tote-shoe.jpg`, `/blog-tote-flower.jpg`, `/blog-tote-book.jpg`, `/blog-shantell.jpg`)
