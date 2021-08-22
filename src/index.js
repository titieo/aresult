import './css/style.css';

import confetti from 'canvas-confetti';
import '@fortawesome/fontawesome-free/js/all';
// Import Packages
const end = Date.now() + 15 * 1000;

const colors = ['#ff0000', '#ffff00'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
