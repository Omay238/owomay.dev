function resize() {
  const baseW = 640;
  const baseH = 480;
  const scale = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
  const body = document.body;

  const scaledW = baseW * scale;
  const scaledH = baseH * scale;
  const left = Math.round((window.innerWidth - scaledW) / 2);
  const top = Math.round((window.innerHeight - scaledH) / 2);

  body.style.position = 'absolute';
  body.style.left = `${left}px`;
  body.style.top = `${top}px`;
  body.style.transformOrigin = 'top left';
  body.style.transform = `scale(${scale})`;
}

window.addEventListener('load', resize);
window.addEventListener('resize', resize);