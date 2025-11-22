/* Fade-in on scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.25 });
document.querySelectorAll('.fade').forEach(el => observer.observe(el));

/* 24-hour timer */
function pad(n){ return n.toString().padStart(2,'0'); }
function updateTimer() {
  const now = new Date();
  const midnight = new Date(now); midnight.setHours(24,0,0,0);
  const diff = midnight - now;
  if(diff<=0){ document.getElementById('timer').textContent='00:00:00'; return; }
  const h=Math.floor(diff/(1000*60*60));
  const m=Math.floor((diff%(1000*60*60))/(1000*60));
  const s=Math.floor((diff%(1000*60))/1000);
  document.getElementById('timer').textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;
}
updateTimer();
setInterval(updateTimer,1000);

/* Navbar shrink on scroll */
const nav = document.getElementById('mainNav');
const threshold = 120;
window.addEventListener('scroll',()=>{
  if(window.scrollY>threshold) nav.classList.add('shrink');
  else nav.classList.remove('shrink');
});

/* Floating particles */
const container = document.getElementById("particles");
for(let i=0;i<40;i++){
  const p = document.createElement("div");
  p.classList.add("particle");
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = (6 + Math.random() * 10) + "s";
  p.style.animationDelay = Math.random() * 5 + "s";
  p.style.opacity = Math.random();
  container.appendChild(p);
}
// Select all nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const targetId = this.getAttribute('href').substring(1); // get section id
    const targetSection = document.getElementById(targetId);

    // Add the show class to fade in
    targetSection.classList.add('show');

    // Scroll smoothly to section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
const typingElement = document.querySelector('.typing');
const texts = ["DevOps Engineer", "Cloud Engineer", "Problem Solver"]; // add your names
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 100; // typing speed in ms
let deletingSpeed = 50;
let delayBetweenTexts = 2000;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    // Wait before deleting
    setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, deletingSpeed);
  } else {
    // Move to next text
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  }
}

// Start typing
type();


