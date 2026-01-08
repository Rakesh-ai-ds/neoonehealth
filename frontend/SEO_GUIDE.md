# SEO & Google Visibility Guide
## NeoOne Health - www.neoonehealth.com

Complete guide for maintaining and improving search engine visibility.

---

## 📁 SEO Files Implemented

### 1. Sitemap.xml
**Location:** `/public/sitemap.xml`

Lists all 15 pages with priorities and update frequencies:
- Homepage (Priority: 1.0)
- Services pages (Priority: 0.9)
- Contact, Workshops (Priority: 0.8)
- Supporting pages (Priority: 0.6-0.7)

**Access:** https://www.neoonehealth.com/sitemap.xml

### 2. Robots.txt
**Location:** `/public/robots.txt`

Allows all search engines to crawl the entire site.

**Access:** https://www.neoonehealth.com/robots.txt

### 3. Manifest.json
**Location:** `/public/manifest.json`

PWA configuration for mobile app-like experience.

---

## 🎯 SEO Meta Tags (index.html)

### Primary Tags
- **Title:** "NeoOne Health | Healthcare & Wellness Services in Salem, Tamil Nadu"
- **Description:** Comprehensive services description with location
- **Keywords:** Salem, Tamil Nadu, healthcare, nutrition, child health, occupational health, elderly care

### Location-Based SEO
- **Geographic region:** IN-TN (India - Tamil Nadu)
- **City:** Salem, Tamil Nadu
- **Coordinates:** 11.6643, 78.1460

### Social Media Tags
- **Open Graph:** Facebook sharing optimization
- **Twitter Cards:** Twitter preview optimization
- **Images:** Using logo.png for all social previews

### Favicon Configuration
All favicon references point to `/images/logo.png`:
- 16x16, 32x32, 180x180 sizes
- Apple touch icon
- Shortcut icon

---

## 🏢 Schema.org Structured Data

Implemented **HealthAndBeautyBusiness** markup with:

```json
{
  "name": "NeoOne Health",
  "address": "Salem, Tamil Nadu, India",
  "telephone": "+91-90477-34110",
  "email": "neoonehealth@gmail.com",
  "services": [
    "Nutrition Counseling",
    "Child Health Services",
    "Occupational Health",
    "Elderly Care"
  ]
}
```

**Benefits:**
- Appears in Google Maps
- Rich snippets in search results
- Better local SEO ranking

---

## 🚀 Google Search Console Setup

### Step 1: Verify Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: www.neoonehealth.com
3. Verification method: **HTML meta tag** (already added to index.html)
4. Or use **Domain verification** via Vercel DNS

### Step 2: Submit Sitemap
1. In Search Console, go to Sitemaps
2. Submit: `https://www.neoonehealth.com/sitemap.xml`
3. Wait for indexing (1-7 days)

### Step 3: Monitor Performance
- Check **Performance** report for clicks, impressions
- Review **Coverage** for indexing issues
- Monitor **Core Web Vitals**

---

## 📍 Google Business Profile

### Setup Instructions
1. Go to [Google Business](https://business.google.com)
2. Create profile with:
   - **Name:** NeoOne Health
   - **Category:** Healthcare, Nutritionist, Wellness Center
   - **Address:** Salem, Tamil Nadu (exact address)
   - **Phone:** +91 90477 34110
   - **Website:** www.neoonehealth.com
   - **Hours:** As specified in Schema.org (Mon-Sat, 9 AM - 6 PM)

3. Verify location (postcard or phone)
4. Add photos: logo, clinic, team
5. Request reviews from satisfied clients

**Benefits:**
- Appears in Google Maps
- Shows in local search results
- Displays reviews and ratings

---

## 🔍 Keyword Strategy

### Primary Keywords (Salem Location)
- Healthcare Salem
- Nutritionist Salem
- Child health Salem
- Wellness services Tamil Nadu
- Occupational health Salem
- Elderly care Salem

### Secondary Keywords
- Preventive healthcare Tamil Nadu
- Corporate wellness Salem
- Sangeetha R nutritionist
- Health checkup Salem
- Diet counseling Salem

### Location Modifiers
Always include: "Salem", "Tamil Nadu", "India"

---

## 📊 Performance Monitoring

### Tools to Use
1. **Google Search Console** - Track ranking, clicks
2. **Google Analytics** - Monitor traffic, behavior
3. **PageSpeed Insights** - Check loading speed
4. **Mobile-Friendly Test** - Verify mobile optimization

### Key Metrics
- **Organic traffic:** Target 10-20% monthly growth
- **Bounce rate:** Keep under 60%
- **Page load time:** Under 3 seconds
- **Core Web Vitals:** All green

---

## 📝 Content Optimization Tips

### On Each Page
1. Use **H1** with location keyword
2. Include **Salem, Tamil Nadu** in first paragraph
3. Add **internal links** to other services
4. Use **alt text** for all images
5. Update content regularly

### Blog Strategy (Future)
- Weekly health tips
- Local health events
- Patient success stories (with permission)
- FAQ articles

---

## 🔗 Backlink Building

### Local Listings
Submit to:
- Justdial
- Sulekha
- Practo
- HealthCare Magic
- Local Salem directories

### Social Media
Maintain presence on:
- Facebook Business Page
- Instagram (health tips, behind-the-scenes)
- LinkedIn (corporate wellness content)

### Partnerships
- Link exchanges with: local hospitals, gyms, schools
- Guest posts on health blogs
- Collaborate with health influencers

---

## ✅ SEO Checklist

### Monthly Tasks
- [ ] Update sitemap lastmod dates
- [ ] Check Google Search Console for errors
- [ ] Monitor keyword rankings
- [ ] Add new blog content
- [ ] Respond to Google reviews

### Quarterly Tasks
- [ ] Audit all meta descriptions
- [ ] Update Schema.org data
- [ ] Review and update keywords
- [ ] Check competitor websites
- [ ] Analyze traffic patterns

### Yearly Tasks
- [ ] Complete SEO audit
- [ ] Update all service pages
- [ ] Refresh images and media
- [ ] Review and optimize site speed

---

## 🆘 Troubleshooting

### Site Not Appearing in Google
1. Check if indexed: `site:www.neoonehealth.com` in Google
2. Verify sitemap submission in Search Console
3. Ensure robots.txt allows crawling
4. Wait 2-4 weeks for initial indexing

### Low Rankings
1. Improve page speed
2. Add more location-specific content
3. Get more backlinks
4. Encourage customer reviews
5. Ensure mobile-friendliness

### Schema Errors
1. Test with [Rich Results Test](https://search.google.com/test/rich-results)
2. Fix JSON-LD syntax errors
3. Ensure all required fields present

---

## 📞 Key Contact Information

**Website:** www.neoonehealth.com  
**Email:** neoonehealth@gmail.com  
**Phone:** +91 90477 34110  
**Location:** Salem, Tamil Nadu, India  
**Maps:** https://maps.app.goo.gl/xEHbQKCFRosT8GXm6

---

## 🎨 Favicon Note

**Current Setup:** All favicon references use the main logo (`/images/logo.png`)

**For Production (Optional):**
- Convert logo.png to favicon.ico (32x32)
- Create apple-touch-icon.png (180x180)
- Create favicon-16x16.png
- Create favicon-32x32.png

**Tools to use:**
- https://favicon.io/
- https://realfavicongenerator.net/

Upload generated files to `/public/` folder.

---

## 📚 Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/HealthAndBeautyBusiness)
- [Local SEO Guide](https://moz.com/learn/seo/local)
- [Core Web Vitals](https://web.dev/vitals/)

---

**Last Updated:** January 8, 2026  
**Maintained by:** NeoOne Health Team

---

For questions or assistance with SEO implementation, refer to this guide or consult with an SEO specialist.
