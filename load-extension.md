# Loading the Fluento Extension

## Steps to Load the Extension

1. **Open Chrome** and go to `chrome://extensions/`

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top right

3. **Load the Extension**
   - Click "Load unpacked"
   - Navigate to your project folder
   - Select the `dist` folder (not the parent folder)

4. **Verify Installation**
   - You should see "Fluento Language Assistant" in the extensions list
   - The extension icon should appear in your Chrome toolbar

## Testing the Extension

1. **Click the Extension Icon**
   - Click the Fluento icon in your Chrome toolbar
   - You should see a popup with "Select text on the page to translate"

2. **Test Text Selection**
   - Go to any webpage
   - Select some text
   - Check the browser console (F12) for "Text selected:" messages

3. **Check Background Script**
   - Open Chrome DevTools
   - Go to Extensions tab
   - Click on "Fluento Language Assistant"
   - Check the console for "Message received:" logs

## Troubleshooting

- If the extension doesn't load, check the console for errors
- Make sure you selected the `dist` folder, not the parent folder
- If you see manifest errors, the paths might be wrong
- Try reloading the extension if you make changes

## Development

To rebuild after changes:
```bash
npm run build:dev
```

Then reload the extension in Chrome. 