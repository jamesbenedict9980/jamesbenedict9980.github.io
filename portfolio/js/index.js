var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right:none; }";
  document.body.appendChild(css);
};





var canvas = document.createElement('canvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
ctx.globalAlpha = 0.65;

var mousePos = { x: canvas.width / 2, y: canvas.height / 2 };
window.onmousemove = function(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
};

function Particle() {
  this.x = mousePos.x;
  this.y = mousePos.y;
  this.size = 4 + (Math.random() * 11);
  this.speed = 0.045 + (Math.random() / 12) * 2;
  this.entropy = (Math.random() / 2) - 0.5;
};
Particle.prototype.update = function() {
  var theta = -1 * Math.atan2(this.x - mousePos.x, this.y - mousePos.y) - Math.PI / 2;
  var distance = Math.sqrt(Math.pow(this.x - mousePos.x, 2) + Math.pow(this.y - mousePos.y, 2));
  
  this.x += Math.cos(theta + this.entropy) * distance * this.speed;
  this.y += Math.sin(theta + this.entropy) * distance * this.speed;
};
Particle.prototype.render = function() {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.strokeStyle = '#3498db';
  ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
};

var particles = [];
for(var i = 0; i < 40; i++) {
  particles.push(new Particle());
}

function demo () {
  ctx.save();
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
  particles.forEach(function(particle) {
    particle.update();
    particle.render();
  })
  requestAnimationFrame(demo);
};

requestAnimationFrame(demo);


