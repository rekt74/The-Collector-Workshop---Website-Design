# The Collector Workshop

Responsive home-page design concept. No dependency installation or build is required.

## Download and view the website

1. On this GitHub page, click the green **Code** button, then **Download ZIP**.
2. Extract the downloaded ZIP (Windows: right-click → Extract All; Mac: double-click).
3. Open the extracted folder and double-click **index.html** to view the design immediately.

## Run a local server

1. Install Python 3 from https://www.python.org/downloads/. On Windows, select **Add Python to PATH** during installation.
2. Open a terminal in the extracted folder containing `index.html`:
   - Windows: click the folder's address bar in File Explorer, type `cmd`, and press Enter.
   - Mac: right-click the extracted folder in Finder and select **Services → New Terminal at Folder**.
3. Start the server:
   - Windows: `py -m http.server 3000 --bind 127.0.0.1`
   - Mac/Linux: `python3 -m http.server 3000 --bind 127.0.0.1`
4. Keep the terminal open and visit **http://localhost:3000** in your browser.
5. Press **Ctrl+C** in the terminal to stop the server.

If Node.js and Python 3 are installed, `npm run dev` is also available on Mac/Linux.

## Design and preview

The homepage follows the supplied dark-and-gold reference: cinematic hero, sticky navigation with a services dropdown, craftsmanship story, restoration inspiration, service cards, two workshop film cards, a storytelling banner, process, FAQs, enquiry form and footer. Responsive layouts are provided for desktop, tablet and mobile. The original client colors (#233745 and #A69B98) remain in the design tokens, with warm gold and ivory added to match the new reference.

## Add the official videos

Open `videos.js` and paste approved video URLs into the `url` fields:

```js
window.WORKSHOP_VIDEOS = {
  work: { title: 'The craft. In motion.', url: 'https://example.com/work.mp4', poster: 'assets/craft.png' },
  story: { title: 'Every classic has a story.', url: 'https://youtu.be/VIDEO_ID', poster: 'assets/interior.png' }
};
```

Supported sources: HTTPS MP4, YouTube links, and Vimeo links. Local MP4 files can also be stored in `assets/` and referenced as `assets/your-film.mp4`. The hero and story banner use the story video; the film cards use their respective video. Players open in an accessible dialog, provide native video controls or provider controls, and stop playback when closed. MP4 sources should use browser-compatible H.264/AAC encoding.

The actual website could not be crawled because it returned an access-denied response in this environment. Official footage is pending. Until URLs are supplied, each video opens a clearly labelled film-preview cover; no unrelated video footage is substituted. Set the URLs and confirm the actual official footage before publishing a final production site.

## Before launch

- Confirm the official logo, navigation, contact information and service copy. The text monogram is provisional.
- Replace generated concept images with approved workshop and vehicle photography. These images do not depict verified customer projects or the actual workshop.
- No awards, restoration statistics, testimonials or customer project history are claimed.
- Connect a secure enquiry backend or form provider and add the applicable privacy notice. The current form validates input but does not send or store submissions.
- The site uses system fonts, with no external font dependency.
