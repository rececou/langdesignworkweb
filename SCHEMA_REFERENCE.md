# JSON-LD Schema Reference — LangDesignWork

> Auto-generated on 2026-06-02. One source of truth for all page schemas.
> To review the actual schema code, open the file listed for each page.

## Summary

| Page | Schema Types | Commit | File | Status |
|------|-------------|--------|------|--------|
| `/ (homepage)` | Organization, WebSite | `d99a877` | `src/app/layout.tsx` | ✅ Complete |
| `/liliane` | Person, VideoObject, ImageObject (×5), WebPage | `18a60d3` | `src/app/liliane/page.tsx` | ⚠️ Partial transcript |
| `/liliane-create` | Person | `bc47069` | `src/app/liliane-create/page.tsx` | ⚠️ VideoObjects deferred |
| `/elizabeth` | Person | `1daa9c1` | `src/app/elizabeth/page.tsx` | ✅ Complete |
| `/elizabeth-custom-design` | Person, WebPage, ImageGallery, Product (×2), ItemList | `1392381` | `src/app/elizabeth-custom-design/page.tsx` | ✅ Complete |
| `/remecou` | Organization, WebPage | `51c191a` | `src/app/remecou/page.tsx` | ✅ Complete |
| `/partner/kidslabuk` | Organization, WebPage | `73c963f` | `src/app/partner/kidslabuk/page.tsx` | ✅ Complete |
| `/partner/velvetessencedesign` | Organization, WebPage, ItemList | `a6c1473` | `src/app/partner/velvetessencedesign/page.tsx` | ✅ Complete |
| `/en/home/blog` | CollectionPage, ItemList | `80dd1ae` | `src/app/en/home/blog/page.tsx` | ✅ Complete |
| `/en/home/blog/ai-creativity-learning` | BlogPosting, VideoObject (×3) | `2669a62` | `src/app/en/home/blog/ai-creativity-learning/page.tsx` | ⚠️ Placeholder durations |
| `/en/elizabeth/blog/oil-painting` | BlogPosting, VideoObject, ImageObject | `3451fd8` | `src/app/en/elizabeth/blog/oil-painting/page.tsx` | ⚠️ Placeholder duration |
| `/en/liliane/blog/tote-bag` | BlogPosting, ImageObject (×3) | `3451fd8` | `src/app/en/liliane/blog/tote-bag/page.tsx` | ✅ Complete |

---

## ⚠️ Action Required — Placeholder & Missing Values

> These schema fields have placeholder or estimated values that need your review/update.

| # | Page | Schema | Field | Current Value | What's Needed | Priority |
|---|------|--------|-------|--------------|---------------|----------|
| **1** | `/liliane` | VideoObject | `hasPart.text` (transcript) | First paragraph only ("Welcome to Lang Design Work's Discover Channel...") | **Full video transcript** — the current text is only ~3 sentences, not the complete transcript | Medium |
| **2** | `/en/home/blog/ai-creativity-learning` | VideoObject (×3) | `duration` | `PT1M30S` for all 3 | **Real video durations** — REME Story, REME Research, REME Learning are each marked as 1 min 30 sec (placeholder) | Medium |
| **3** | `/en/home/blog/ai-creativity-learning` | VideoObject (×3) | `transcript` / `hasPart` | Missing | **Video transcripts** — no transcript text for any of the 3 videos | Low |
| **4** | `/en/elizabeth/blog/oil-painting` | VideoObject | `duration` | `PT1M30S` | **Real YouTube video duration** — "Behind the Scenes: From Canvas to Creation" (YouTube ID: `1JkgOeQgKdM`) | Medium |
| **5** | `/en/elizabeth/blog/oil-painting` | VideoObject | `transcript` / `hasPart` | Missing | **Video transcript or description** — no transcript text for the YouTube video | Low |
| **6** | `/liliane-create` | — | VideoObject schemas | None (deferred) | **Add VideoObject schemas** once real YouTube embeds replace the 4 placeholder `<div>` boxes on the page | Low (blocked by content) |

### Quick Fixes (I can do these if you provide the values)

- **Video durations**: Just tell me the real length of each video (e.g., "REME Story is 2:15, REME Research is 1:45") and I'll update the schema.
- **Transcripts**: Paste the full transcript text and I'll add it as `hasPart.text` in the VideoObject.
- **liliane-create**: When you add real YouTube embeds, tell me the video IDs and I'll add VideoObject schemas.

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
- **Details:** @graph with 7 items. Person: jobTitle 'Innovator & Student', description, image, affiliation. VideoObject: duration PT2M28S, publisher. 5 ImageObjects with captions. WebPage: primaryImageOfPage.
- **⚠️ Needs attention:** VideoObject `hasPart.text` (transcript) is only the first ~3 sentences — needs full transcript text.

### `/liliane-create`

- **File:** `src/app/liliane-create/page.tsx`
- **Commit:** `bc47069`
- **Schema Types:** Person
- **Details:** Person: jobTitle 'Creator & Student', description, affiliation LangDesignWork.
- **⚠️ Needs attention:** VideoObjects deferred — page has 4 placeholder `<div>` boxes, no real YouTube embeds yet. Once videos are added, need VideoObject schemas.

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
- **Details:** @graph with 4 items. BlogPosting: author Qian Liu, dates 2025-11-14. 3 VideoObjects: REME Story, REME Research, REME Learning.
- **⚠️ Needs attention:**
  - All 3 VideoObjects have `duration: "PT1M30S"` — **placeholder**, need real durations
  - No `transcript` / `hasPart` text for any video

### `/en/elizabeth/blog/oil-painting`

- **File:** `src/app/en/elizabeth/blog/oil-painting/page.tsx`
- **Commit:** `3451fd8`
- **Schema Types:** BlogPosting, VideoObject, ImageObject
- **Details:** @graph with 3 items. BlogPosting: Elizabeth Xiaoyue Lang. ImageObject: boy-oil-painting.jpg with caption. VideoObject: YouTube (ID `1JkgOeQgKdM`), thumbnail from ytimg, embedUrl, contentUrl.
- **⚠️ Needs attention:**
  - VideoObject has `duration: 'PT1M30S'` — **placeholder**, need real YouTube video duration
  - No `transcript` / `hasPart` text for the video

### `/en/liliane/blog/tote-bag`

- **File:** `src/app/en/liliane/blog/tote-bag/page.tsx`
- **Commit:** `3451fd8`
- **Schema Types:** BlogPosting, ImageObject (×3)
- **Details:** @graph with 4 items. BlogPosting: Liliane Xiaoxu Lang. 3 ImageObjects: Shoe Tote, Flower Tote, Book Tote — each with description and caption.

