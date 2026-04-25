# How to Add/Edit Events

Events are stored in `data/events.json`. To add or edit events:

## Adding a New Event

1. Open `data/events.json`
2. Add a new event object to the array. Example:

```json
{
  "id": 4,
  "title": "Birthday Party Planning",
  "date": "Sundays (by appointment)",
  "description": "Custom birthday party packages with creative themes and activities",
  "image": "🎉",
  "details": "We offer customized birthday party experiences tailored to your child's interests and age group."
}
```

## Required Fields

- `id`: Unique number (increment from the highest ID)
- `title`: Event name
- `date`: When the event happens
- `description`: Short description (shown in the event card)
- `image`: An emoji that represents the event
- `details`: Longer description (can be used on detail page later)

## Editing an Existing Event

1. Open `data/events.json`
2. Find the event by `id`
3. Update the fields you need to change
4. Save the file

## Publishing Changes

1. Commit and push to GitHub
   ```bash
   git add data/events.json
   git commit -m "Add/update event: [event name]"
   git push
   ```
2. Changes automatically deploy to Vercel within seconds

## Tips

- Keep descriptions concise (2-3 sentences)
- Use relevant emojis for quick visual recognition
- Include dates or frequency in the `date` field
- For recurring events, use "Every Monday", "Thursdays & Saturdays", etc.
