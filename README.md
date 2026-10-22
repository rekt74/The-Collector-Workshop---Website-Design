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

The actual website could not be crawled because it returned an access-denied response in this environment. The client-supplied YouTube film (P2qac7qd00o) is connected to both work and story sections, starting at 58 seconds. A separate work film can be configured later. YouTube playback remains subject to the video owner allowing embeds and viewer network access. Blank URLs fall back to a clearly labelled film-preview cover.

## Before launch

- Confirm the official logo, navigation, contact information and service copy. The text monogram is provisional.
- Replace generated concept images with approved workshop and vehicle photography. These images do not depict verified customer projects or the actual workshop.
- No awards, restoration statistics, testimonials or customer project history are claimed.
- Connect a secure enquiry backend or form provider and add the applicable privacy notice. The current form validates input but does not send or store submissions.
- The site uses system fonts, with no external font dependency.

## Multipage design refinement

Shared typography uses 16px body copy, a responsive 30–44px section-heading scale, and a 24px card-heading scale. The homepage is shorter: repeated storytelling, promise, and FAQ sections were removed, while dedicated pages carry the deeper content.

Pages: Home, Our Story, Our Crew, Our Approach, Services, Restorations, Gallery, Contact, Full Restoration, Mechanical Care, Paint & Coachwork, Interior Craftsmanship, and Concierge Services. Service-detail pages share one layout. The crew page describes craft disciplines; no invented staff biographies or portraits are used. All imagery remains concept imagery until the client's gallery assets are supplied.

The homepage and contact page embed a Google Map for Dubai Investments Park. DIP, Dubai, UAE is a client-authorized temporary location, not a verified workshop pin. The page states that the general area is shown. Replace the map and address together after confirmation. The map needs access to Google Maps in the viewer's browser.

The current site's additional full-page screenshots were not received in the chat. Final content matching, any further page types, real team details, concierge service scope, and gallery asset selection remain pending those references.

## Layout polish

The stylesheet is consolidated into one readable system rather than stacked overrides. All sections share a centered 1280px maximum content grid, responsive gutters, and a consistent spacing scale. Desktop navigation switches to the mobile menu before links crowd; the menu resets when returning to desktop. The current page is indicated inside dropdown navigation too.

Cards use fixed image proportions and equal-height bodies, with links aligned at the bottom. Video play circles are centered within each image independently of captions. SVG arrows and line icons avoid platform-dependent missing glyphs. Body paragraphs remain 16px; small metadata and navigation have their own explicit scales. Dark-page body text and input contrast were also corrected.

Validation covers all 13 pages at 320, 360, 390, 700, 768, 1000, 1024, 1440, and 1920px; local links, clipped content, horizontal overflow, header collisions, player-control centers, menu behavior, form validation, and video cleanup. YouTube and Maps requests are isolated during layout checks; these checks do not certify third-party availability or video playback permissions.
