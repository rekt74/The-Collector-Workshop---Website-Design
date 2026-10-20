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

Includes sticky navigation, a restoration dropdown, workshop image dialog, service sections, restoration process, FAQs and a validated enquiry form. The form is a demonstration and does not send or store submissions.

## Before launch

- Confirm official colors, logo, navigation, contact information and service copy against the current brand. The reference website was blocked by the onboarding network policy. The monogram is provisional. Brand colors supplied by the client: #233745 and #A69B98, paired with a warm off-white background.
- Replace the generated concept image with approved photography and supply the official landing video. The hero currently opens an image dialog, not a video player.
- Connect a secure enquiry backend or form provider and add the applicable privacy notice.
- Optional Google Fonts have Georgia/Arial fallbacks.

Image: generated specifically for this design; it does not depict a verified customer project or the actual workshop. No testimonials or project history are claimed.
