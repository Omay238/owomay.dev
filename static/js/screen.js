function resize() {
  let scale = Math.min(window.innerWidth / 640, window.innerHeight / 480);

  document.body.style.transform = `scale(${scale})`;
}

window.addEventListener("load", resize);
window.addEventListener("resize", resize);