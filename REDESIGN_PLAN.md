# Website Redesign Plan

## Current State
- Jekyll + Minima theme
- Single-column scroll layout
- Custom `academic.css` styling
- YAML data-driven content

## Options

### Option A: Minimal Modern (Recommended)
**Pros:** Clean, professional, easy to maintain  
**Cons:** Less visually striking

**Changes:**
- Add dark mode toggle
- Grid-based publication layout (2-3 columns)
- Smooth scroll animations
- Better typography hierarchy
- Hover effects on publication cards

---

### Option B: Card-Based UI
**Pros:** More engaging, great for many publications  
**Cons:** More complex layout

**Changes:**
- Masonry grid for publications
- Image-first publication cards
- Sidebar for news/awards
- Filter by year/venue

---

### Option C: Dark/Light Mode
**Pros:** Modern standard, user choice  
**Cons:** Needs more CSS work

**Changes:**
- CSS variables for theming
- Theme toggle in header
- System preference detection
- Smooth theme transitions

---

## Recommended Changes

### 1. Layout Improvements
- Add dark mode (CSS variables)
- 2-column publication grid (responsive)
- Better spacing and whitespace
- Sticky navigation with blur effect

### 2. Visual Enhancements
- Animated transitions
- Publication hover effects
- Better image loading (lazy load)
- Consistent border-radius system

### 3. New Features
- Publication search/filter
- Year filter dropdown
- Related papers section
- Social sharing buttons

### 4. Mobile Improvements
- Hamburger menu on mobile
- Touch-friendly interactions
- Optimized image sizes

---

## Implementation Priority

1. **Phase 1** (Quick wins): Dark mode + publication grid
2. **Phase 2** (Visual polish): Animations + better typography
3. **Phase 3** (Advanced): Search + filters

---

## Files to Modify

| File | Changes |
|------|---------|
| `index.html` | Add theme toggle, change layout |
| `css/academic.css` | Add dark mode variables, new grid |
| `_data/` | No changes needed |
| `_layouts/post.html` | If adding blog features |

---

## Testing Checklist

- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] Publications grid displays correctly
- [ ] All links work
- [ ] Images load properly
- [ ] SEO meta tags updated
