// ── NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── HERO SLIDESHOW
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 5000);

// ── SCROLL REVEAL
const allReveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 100);
            revealObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
allReveals.forEach(el => revealObserver.observe(el));

// ── NUMBER COUNTER
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count);
            if (!target) return;
            let count = 0;
            const step = Math.ceil(target / 60);
            const timer = setInterval(() => {
                count += step;
                if (count >= target) { count = target; clearInterval(timer); }
                el.querySelector('.count-num').textContent = count;
            }, 30);
            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ── WHATSAPP FORM
function handleSubmit() {
    const nome = document.getElementById('nome').value;
    const tel = document.getElementById('tel').value;
    const servizio = document.getElementById('servizio').value;
    const msg = document.getElementById('msg').value;
    if (!nome || !tel) { alert('Compila nome e telefono.'); return; }
    const text = `Ciao! Mi chiamo ${nome} (${tel}). Sono interessato a: ${servizio}. ${msg}`;
    window.open(`https://wa.me/393477320443?text=${encodeURIComponent(text)}`, '_blank');
}
const btn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
});
