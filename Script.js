// Typing effect
const typedText = "No hype. No corporate energy. Just me.";
const typedEl = document.getElementById("typed-text");
let i = 0;
function typeHero() {
    if(i < typedText.length){
        typedEl.innerHTML += typedText.charAt(i);
        i++;
        setTimeout(typeHero, 50);
    }
}
typeHero();

// Dynamic Now with fade effect
const nowEl = document.getElementById("dynamic-now");
const messages = [
    "Currently exploring new games and tech.",
    "PC setup complete. Grinding titles and coding.",
    "Streaming occasionally and posting clips online."
];
let n = 0;

function rotateNow() {
    nowEl.style.opacity = 0; // fade out
    setTimeout(() => {
        nowEl.textContent = messages[n]; // change text
        nowEl.style.opacity = 1; // fade in
        n = (n + 1) % messages.length;
    }, 800); // matches CSS transition
}

setInterval(rotateNow, 5000);

// Particle background
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let p=0;p<100;p++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        r: Math.random()*2+1,
        dx: (Math.random()-0.5)*0.3,
        dy: (Math.random()-0.5)*0.3
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p=>{
        p.x += p.dx;
        p.y += p.dy;
        if(p.x<0||p.x>canvas.width) p.dx*=-1;
        if(p.y<0||p.y>canvas.height) p.dy*=-1;
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(91,140,255,0.2)";
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
