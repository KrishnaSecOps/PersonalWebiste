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
