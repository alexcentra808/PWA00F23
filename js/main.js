
function regSW() {
  if ('serviceWorker' in naviagator) {
    navigator.serviceWorker.register('sw.js');
  }
}
