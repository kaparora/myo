# Content Management Guide

All website content is stored in `data/content.json`. This makes it easy to update text without touching code.

## File Structure

The `content.json` file has three main sections:

### 1. About Page Content (`about`)
- `title`: Page title
- `garimaroleTitle`: Section title for Garima
- `garimaBio`: Garima's background and story
- `philosophy.title` & `philosophy.text`: Philosophy section
- `waldorfExplanation.title` & `waldorfExplanation.text`: Methodology section
- `photoCaption`: Caption for Garima's photo placeholder

### 2. Services Content (`services`)

Each service (theNest, healingSpace, specialNeeds) has:
- `id`: Unique identifier (used for page anchors)
- `name`: Service name
- `shortDescription`: Quick description (used on home page)
- `fullDescription`: Detailed description (used on services page)
- `offerings`: Array of bullet points listing what's offered
- `ctaText`: Call-to-action button text

### 3. Business Info (`businessInfo`)
- `businessName`: Official business name
- `tagline`: Tagline/subtitle
- `description`: Overall business description
- `address`: Full address
- `phone`: Phone number
- `instagram` & `instagramUrl`: Social media info
- `hours`: Operating hours
- `specialHours`: Special hours or notes

## How to Update Content

### Updating About Page
1. Open `data/content.json`
2. Find the `"about"` section
3. Update the text fields:
   ```json
   "about": {
     "garimaBio": "Your updated bio here",
     "philosophy": {
       "text": "Updated philosophy..."
     }
   }
   ```

### Adding a New Service
1. Open `data/content.json`
2. Go to the `"services"` section
3. Add a new service object. Example:
   ```json
   "myNewService": {
     "id": "my-new-service",
     "name": "Service Name",
     "shortDescription": "Brief description...",
     "fullDescription": "Detailed description...",
     "offerings": [
       "Offering 1",
       "Offering 2"
     ],
     "ctaText": "Button text"
   }
   ```
4. **Important**: You'll also need to update the `Services` page code to include the new service in the rendering (ask Kapil for this)

### Updating Service Details
1. Open `data/content.json`
2. Find the service under `"services"`
3. Update any of these fields:
   - `fullDescription`: Main description
   - `offerings`: Add/remove/edit bullet points
   - `ctaText`: Change button text

### Updating Business Info
1. Open `data/content.json`
2. Find the `"businessInfo"` section
3. Update fields like address, phone, hours, etc.

## Publishing Changes

After editing `content.json`:

```bash
git add data/content.json
git commit -m "Update content: [what changed]"
git push
```

Changes appear on the live website within seconds after pushing to GitHub.

## Tips

- Keep text descriptions concise and clear
- Use line breaks for readability in JSON strings
- For multiple paragraphs, write each in a separate field or use `\n` for line breaks
- Always maintain valid JSON syntax (commas after objects, etc.)
- Test locally by running `npm run dev` before pushing

## Need to Add HTML/Formatting?

Currently, content is plain text. If you need to add bold, italic, or links in the future, let Kapil know and we can upgrade to support Markdown or rich text.
