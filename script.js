const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('button');
function closeDropdown() { dropdown.classList.remove('open'); dropdownButton.setAttribute('aria-expanded', 'false'); }
function closeMenu() { nav.classList.remove('mobile-open'); menuButton.setAttribute('aria-expanded', 'false'); closeDropdown(); }
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(expanded)); nav.classList.toggle('mobile-open', expanded); });
dropdownButton.addEventListener('click', () => { const expanded = dropdownButton.getAttribute('aria-expanded') !== 'true'; dropdownButton.setAttribute('aria-expanded', String(expanded)); dropdown.classList.toggle('open', expanded); });
document.addEventListener('click', e => { if (!dropdown.contains(e.target)) closeDropdown(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
const dialog = document.querySelector('#video-dialog');
const stage = document.querySelector('#video-stage');
const message = document.querySelector('#video-message');
function getEmbedURL(raw) {
  const url = new URL(raw, location.href);
  if (url.protocol !== 'https:' && url.origin !== location.origin) throw new Error('Use an HTTPS video URL.');
  const host = url.hostname.replace(/^www\./, '');
  if (['youtube.com', 'm.youtube.com', 'youtu.be', 'youtube-nocookie.com'].includes(host)) {
    const id = host === 'youtu.be' ? url.pathname.split('/')[1] : url.searchParams.get('v') || url.pathname.split('/').filter(Boolean).pop();
    if (!/^[\w-]{11}$/.test(id || '')) throw new Error('Invalid YouTube video link.');
    const time = url.searchParams.get('start') || url.searchParams.get('t') || '';
    let start = 0;
    if (/^\d+$/.test(time)) start = Number(time);
    else {
      const parts = time.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      if (parts) start = Number(parts[1] || 0) * 3600 + Number(parts[2] || 0) * 60 + Number(parts[3] || 0);
    }
    return { embed: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start > 0 ? '&start=' + start : ''}` };
  }
  if (host === 'vimeo.com' || host === 'player.vimeo.com') {
    const match = url.pathname.match(/(?:video\/)?(\d+)(?:\/([a-zA-Z0-9]+))?\/?$/);
    if (!match) throw new Error('Invalid Vimeo video link.');
    const hash = url.searchParams.get('h') || match[2];
    return { embed: `https://player.vimeo.com/video/${match[1]}?autoplay=1${hash ? '&h=' + encodeURIComponent(hash) : ''}` };
  }
  if (url.origin !== location.origin && !/\.mp4$/i.test(url.pathname)) throw new Error('Use an MP4, YouTube, or Vimeo link.');
  return { source: url.href };
}
document.querySelectorAll('.video-trigger').forEach(button => button.addEventListener('click', () => {
  const config = window.WORKSHOP_VIDEOS[button.dataset.video];
  stage.replaceChildren(); message.textContent = '';
  document.querySelector('#video-title').textContent = config.title;
  if (!config.url) {
    const image = document.createElement('img'); image.src = config.poster; image.alt = 'Workshop film cover'; stage.append(image);
    const badge = document.createElement('span'); badge.className = 'video-pending'; badge.textContent = 'WORKSHOP FILM / PREVIEW'; stage.append(badge);
    message.textContent = 'The official workshop film will appear here once the video is supplied. For now, explore the visual direction for this story.';
  } else {
    try {
      const media = getEmbedURL(config.url);
      if (media.embed) {
        const frame = document.createElement('iframe'); frame.src = media.embed; frame.title = config.title; frame.allow = 'autoplay; fullscreen; picture-in-picture'; frame.allowFullscreen = true; frame.referrerPolicy = 'strict-origin-when-cross-origin'; stage.append(frame);
        const directLink = document.createElement('a'); directLink.href = config.url; directLink.target = '_blank'; directLink.rel = 'noopener noreferrer'; directLink.className = 'text-link'; directLink.textContent = 'Open film in a new tab ↗'; message.append(directLink);
      } else {
        const video = document.createElement('video'); video.controls = true; video.playsInline = true; video.poster = config.poster; video.src = media.source; video.autoplay = true; stage.append(video);
        video.addEventListener('error', () => { message.textContent = 'This film is temporarily unavailable. Please try again later.'; });
        video.play().catch(() => {});
      }
    } catch { message.textContent = 'This video link needs updating. Please contact the workshop to view the film.'; }
  }
  dialog.showModal(); document.body.classList.add('modal-open');
}));
function closeVideo() { dialog.close(); }
dialog.addEventListener('close', () => { const video = stage.querySelector('video'); if(video) video.pause(); stage.replaceChildren(); document.body.classList.remove('modal-open'); });
document.querySelector('.close-dialog').addEventListener('click', closeVideo);
document.querySelector('#dialog-enquire').addEventListener('click', closeVideo);
dialog.addEventListener('click', e => { if(e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom) closeVideo(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('form').addEventListener('submit', e => { e.preventDefault(); document.querySelector('#form-status').textContent = 'Your enquiry has not been sent. This design preview needs an enquiry delivery service connected before launch.'; });
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) { document.querySelectorAll('nav > a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id)); } }); }, {rootMargin:'-20% 0px -60% 0px'});
document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
