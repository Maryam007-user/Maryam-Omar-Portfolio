document.documentElement.classList.add('js');
(function(){
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;

// Count-up numbers in the hero
function count(el){var t=+el.dataset.count,suf=el.dataset.suf||'';if(rm)return;var s=null;
 (function f(ts){if(!s)s=ts;var q=Math.min((ts-s)/1500,1),e=1-Math.pow(1-q,3);el.textContent=Math.round(t*e)+suf;if(q<1)requestAnimationFrame(f)})(0)}
document.querySelectorAll('.hstats [data-count]').forEach(count);

// Fade-in on scroll
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});

// Hero headline lines slide sideways as you scroll
var ls=document.querySelectorAll('.ttl span');
if(!rm)addEventListener('scroll',function(){var y=Math.min(scrollY,innerHeight);ls.forEach(function(n){n.style.transform='translateX('+(y*n.dataset.d*6).toFixed(1)+'px)'})},{passive:true});

// Click-to-copy email in the footer
var cp=document.getElementById('cp');
cp.addEventListener('click',function(){var v=cp.dataset.v;try{navigator.clipboard.writeText(v)}catch(e){}cp.textContent='Copied!';setTimeout(function(){cp.textContent=v},1600)});
})();
