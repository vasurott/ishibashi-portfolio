/* -------------------------------------


define


---------------------------------------*/
const Poster = document.querySelectorAll(".Poster");
const zoom = document.getElementById('zoom');
const POSTER = document.getElementById('POSTER');

const curtain = document.getElementById('curtain');
const tl = gsap.timeline();

const menu = document.querySelector('.menu');
const border = document.querySelector('.border');
const navbar = document.querySelector('.navbar');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const main = document.getElementById('main');
const RB = document.getElementById('rights-button');
const imgRights = document.querySelector('.img-rights');
const button = document.querySelectorAll('.button');
/* -------------------------------------


image zoom


---------------------------------------*/
Poster.forEach(function(value) {
    value.addEventListener('click', kakudai);
});

function kakudai(e) {
    zoom.style.visibility = 'visible';
    zoom.style.opacity = '1';
    POSTER.setAttribute('src', e.target.getAttribute('src'));
};

zoom.addEventListener('click', modosu);

function modosu() {
    zoom.style.visibility = 'hidden';
    zoom.style.opacity = '0';
};

/* -------------------------------------


opening


---------------------------------------*/
tl.fromTo(
    curtain,
    2,
    { y: '0%' },
    { y: '-100%', ease: Power2.easeInOut},
).fromTo(
    menu,
    .5,
    { y: '-200%' },
    { y: '0%' },
);

/* -------------------------------------


scroll


---------------------------------------*/
  gsap.set('.left-hand',  {
    opacity: 0,
    x: -300,
  });
  ScrollTrigger.batch('.left-hand', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      x: 0,
    }),
    start: 'top 80%',
  });
 
  gsap.set('.right-hand', {
    opacity: 0,
    x: 300,
  });
  ScrollTrigger.batch('.right-hand', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        x: 0,
    }),
    strart: 'top 80%',
  });

  gsap.set('.zoom-in', {
    scale: .8,
    opacity: 0,
  });
  ScrollTrigger.batch('.zoom-in', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        scale: 1,
    }),
    start: 'top 90%',
  });

  gsap.set('.content', {
    opacity: 0,
    y: 50,
  });
  ScrollTrigger.batch('.content', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: .1,
        overwrite: true,
    }),
    start: 'top 80%',
  });

  gsap.set('.title-left', {
    opacity: 0,
    x: -100,
  });
  ScrollTrigger.batch('.title-left', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        x: 0,
    }),
    start: 'top 90%',
  });
  gsap.set('.title-right', {
    opacity: 0,
    x: 100,
  });
  ScrollTrigger.batch('.title-right', {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        x: 0,
    }),
    start: 'top 100%',
  });

  gsap.fromTo('.NAME', {
    x: -200, autoAlpha: 0
   },
   {
    x: 0, autoAlpha: 1,
    scrollTrigger: {
      trigger: '.NAME',
      start: 'top 80%',
      end: 'bottom 20%',
    }
  });
  gsap.fromTo('.birth', {
    x: -50, autoAlpha: 0
  },
  {
    x: 0, autoAlpha: 1,
    scrollTrigger: {
        trigger: '.birth',
        start: 'top 80%',
        end: 'bottom 20%',
    }
  });

  gsap.fromTo('.int-left', {
    x: -100, autoAlpha: 0
  },
  {
    x: 0, autoAlpha:1,
    scrollTrigger: {
        trigger: '.int-left',
        start: 'top 80%',
        end: 'bottom, 20%'
    }
  });
  gsap.fromTo('.int-right', {
    x: 100, autoAlpha: 0
  },
  {
    x: 0, autoAlpha: 1,
    scrollTrigger: {
        trigger: '.int-right',
        start: 'top 80%',
        end: 'bottom 20%'
    }
  });
  gsap.fromTo('.int-img', {
    y: -300, autoAlpha: 0
  },
  {
    y: 0, autoAlpha: 1,
    scrollTrigger: {
        trigger: '.int-img',
        start: 'center 100%',
        end: 'bottom 20%'
    }
  });

  gsap.fromTo('#explain', {
    x: 100, autoAlpha: 0
  },
  {
    x: 0, autoAlpha: 1,
    scrollTrigger: {
        trigger: '#explain',
        start: 'top 100%',
        end: 'bottom 20%'
    }
  });

/* -------------------------------------


menubar


---------------------------------------*/
border.addEventListener('click', function(){
    one.classList.toggle('active');
    two.classList.toggle('active');
    three.classList.toggle('active');
    navbar.classList.toggle('active');
});
main.addEventListener('click', function(){
    navbar.classList.remove('active');
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.remove('active');
});
button.forEach(function(btn){
  btn.addEventListener('click', function(){
    navbar.classList.remove('active');
    one.classList.remove('active');
    two.classList.remove('active');
    three.classList.remove('active');
  });
});



