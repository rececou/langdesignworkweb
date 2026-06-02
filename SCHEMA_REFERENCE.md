# JSON-LD Schema Reference — LangDesignWork

> Auto-generated on 2026-06-02. One source of truth for all page schemas.
> To review the actual schema code, open the file listed for each page.

## Summary

| Page | Schema Types | Commit | File |
|------|-------------|--------|------|
| `/ (homepage)` | Organization, WebSite | `d99a877` | `src/app/layout.tsx` |
| `/liliane` | Person, VideoObject, ImageObject (×5), WebPage | `18a60d3` | `src/app/liliane/page.tsx` |
| `/liliane-create` | Person | `bc47069` | `src/app/liliane-create/page.tsx` |
| `/elizabeth` | Person | `1daa9c1` | `src/app/elizabeth/page.tsx` |
| `/elizabeth-custom-design` | Person, WebPage, ImageGallery, Product (×2), ItemList | `1392381` | `src/app/elizabeth-custom-design/page.tsx` |
| `/remecou` | Organization, WebPage | `51c191a` | `src/app/remecou/page.tsx` |
| `/partner/kidslabuk` | Organization, WebPage | `73c963f` | `src/app/partner/kidslabuk/page.tsx` |
| `/partner/velvetessencedesign` | Organization, WebPage, ItemList | `a6c1473` | `src/app/partner/velvetessencedesign/page.tsx` |
| `/en/home/blog` | CollectionPage, ItemList | `80dd1ae` | `src/app/en/home/blog/page.tsx` |
| `/en/home/blog/ai-creativity-learning` | BlogPosting, VideoObject (×3) | `2669a62` | `src/app/en/home/blog/ai-creativity-learning/page.tsx` |
| `/en/elizabeth/blog/oil-painting` | BlogPosting, VideoObject, ImageObject | `3451fd8` | `src/app/en/elizabeth/blog/oil-painting/page.tsx` |
| `/en/liliane/blog/tote-bag` | BlogPosting, ImageObject (×3) | `3451fd8` | `src/app/en/liliane/blog/tote-bag/page.tsx` |

---

## Detailed Schema Inventory

### `/ (homepage)`

- **File:** `src/app/layout.tsx`
- **Commit:** `d99a877`
- **Schema Types:** Organization, WebSite
- **Details:** Global schema in layout. Organization has 5 sameAs links (LinkedIn, Facebook, YouTube, Instagram, X). WebSite has SearchAction.

### `/liliane`

- **File:** `src/app/liliane/page.tsx`
- **Commit:** `18a60d3`
- **Schema Types:** Person, VideoObject, ImageObject (×5), WebPage
- **Details:** @graph with 7 items. Person: jobTitle 'Innovator & Student', description, image, affiliation. VideoObject: duration PT2M28S, transcript, publisher. 5 ImageObjects with captions. WebPage: primaryImageOfPage.

### `/liliane-create`

- **File:** `src/app/liliane-create/page.tsx`
- **Commit:** `bc47069`
- **Schema Types:** Person
- **Details:** Person: jobTitle 'Creator & Student', description, affiliation LangDesignWork. Note: VideoObjects deferred — page has placeholder divs, no real YouTube embeds yet.

### `/elizabeth`

- **File:** `src/app/elizabeth/page.tsx`
- **Commit:** `1daa9c1`
- **Schema Types:** Person
- **Details:** Person: jobTitle 'Artist & Student' (from HubSpot), description, image, affiliation LangDesignWork.

### `/elizabeth-custom-design`

- **File:** `src/app/elizabeth-custom-design/page.tsx`
- **Commit:** `1392381`
- **Schema Types:** Person, WebPage, ImageGallery, Product (×2), ItemList
- **Details:** @graph with 6 items. Person: 'Creator & Designer'. 2 Products with Etsy offers (£13.99 GBP). ItemList wrapper.

### `/remecou`

- **File:** `src/app/remecou/page.tsx`
- **Commit:** `51c191a`
- **Schema Types:** Organization, WebPage
- **Details:** @graph with 2 items. Organization (LangDesignWork). WebPage: inLanguage en-GB, mainEntity → Organization.

### `/partner/kidslabuk`

- **File:** `src/app/partner/kidslabuk/page.tsx`
- **Commit:** `73c963f`
- **Schema Types:** Organization, WebPage
- **Details:** @graph with 2 items. Organization: Kidlab UK with Etsy/TikTok sameAs. WebPage: mainEntity → Service ('Kidlab UK STEM Discovery Community').

### `/partner/velvetessencedesign`

- **File:** `src/app/partner/velvetessencedesign/page.tsx`
- **Commit:** `a6c1473`
- **Schema Types:** Organization, WebPage, ItemList
- **Details:** @graph with 3 items. Organization: Velvet Essence Design, London address. ItemList: 8 items (names only, no prices — static build risk).

### `/en/home/blog`

- **File:** `src/app/en/home/blog/page.tsx`
- **Commit:** `80dd1ae`
- **Schema Types:** CollectionPage, ItemList
- **Details:** @graph with 2 items. CollectionPage: inLanguage en-GB. ItemList: 3 blog posts with URLs.

### `/en/home/blog/ai-creativity-learning`

- **File:** `src/app/en/home/blog/ai-creativity-learning/page.tsx`
- **Commit:** `2669a62`
- **Schema Types:** BlogPosting, VideoObject (×3)
- **Details:** @graph with 4 items. BlogPosting: author Qian Liu, dates 2025-11-14. 3 VideoObjects: REME Story, Research, Learning (PT1M30S each, placeholder duration).

### `/en/elizabeth/blog/oil-painting`

- **File:** `src/app/en/elizabeth/blog/oil-painting/page.tsx`
- **Commit:** `3451fd8`
- **Schema Types:** BlogPosting, VideoObject, ImageObject
- **Details:** @graph with 3 items. BlogPosting: Elizabeth Xiaoyue Lang. VideoObject: YouTube (1JkgOeQgKdM), PT1M30S placeholder. ImageObject: boy-oil-painting.jpg with caption.

### `/en/liliane/blog/tote-bag`

- **File:** `src/app/en/liliane/blog/tote-bag/page.tsx`
- **Commit:** `3451fd8`
- **Schema Types:** BlogPosting, ImageObject (×3)
- **Details:** @graph with 4 items. BlogPosting: Liliane Xiaoxu Lang. 3 ImageObjects: Shoe Tote, Flower Tote, Book Tote — each with description and caption.

