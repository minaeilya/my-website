/* app-pro.js */
particlesJS("particles-pro", {
  "particles": {
    "number": {
      "value": 70,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#FE7743" },  // هنا اللون المختلف
    "shape": { "type": "circle" },
    "opacity": { "value": 0.5 },
    "size": { "value": 4, "random": true },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#FE7743",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});
