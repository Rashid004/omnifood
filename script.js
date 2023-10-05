'use strict'
//  console.log("hello world");

//  const myName = "Ansari Rashid";
//  const h1 = document.querySelector(".heading-primary");
//  console.log(myName);
//  console.log(h1);

 

  // h1.addEventListener("click", function () {
  // h1.textContent = myName;
  // h1.style.backgroundColor = "red";
  // h1.style.padding = "5rem";
  // h1.style.borderRadius ="9px";
  // });


  // Set current year 
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  ///////////////////////////////////////////////////////////

// Make mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const section1 = document.querySelector('.section-how');
const btnScroll = document.querySelector('.btn--outline');
const btnScrollTo = document.querySelector(".btn--full"); 
const sectionCta = document.querySelector(".section-cta"); 
const btnScrollSee = document.querySelector(".link");
//  Scroll sm0th
btnScroll.addEventListener('click',function(e){
  e.preventDefault();

  section1.scrollIntoView({ behavior: 'smooth'});
});
btnScrollTo.addEventListener('click',function(e){
  e.preventDefault();

  sectionCta.scrollIntoView({ behavior: 'smooth'});
 
  
});
btnScrollSee.addEventListener('click',function(e){
  e.preventDefault();
console.log(scroll);
  headerEl.scrollIntoView({ behavior: 'smooth'});
});


btnNavEl.addEventListener("click",function () {
 nav.classList.toggle("nav-open");
});
///////////////////////////////////////////////////////////
//  Smooth scrolling animation

document.querySelectorAll(".main-nav-link").forEach(function(el) {
  el.addEventListener('click',function(e) {
    e.preventDefault();
console.log('links');
  const id = this.getAttribute("href");
  document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    
  });
});

///////////////////////
// Menue fade Animation 
const nav = document.querySelector(".main-nav");

const handleHover = function(e) {
if(e.target.classList.contains('main-nav-link')){
    const link = e.target;
    const siblings = link.closest('.main-nav').
    querySelectorAll('.main-nav-link');
    const logo = link.closest(".header").querySelector("img");
   
    siblings.forEach(el =>{
      if(el !== link)
      el.style.opacity = this;
    });
    logo.style.opacity = this;
  };
}

 nav.addEventListener('mouseover',handleHover.bind(0.5));
 nav.addEventListener('mouseout',handleHover.bind(1));

///////////////////////////////////////////////////////////
// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".section-hero");
const sectionHeight = headerEl.getBoundingClientRect().height;
console.log(sectionHeight);
const obs = new IntersectionObserver(
  function(entries) {
    const entry = entries[0];
    console.log(entry);
    
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    else{
      document.body.classList.remove("sticky");
    }
  },
  {
    // IN THE VIEWPORT
    root: null,
    threshold: 0,
    rootMargin: `-${sectionHeight}px`,
  }
);
obs.observe(sectionHeroEl);





///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


// .no-flexbox-gap .main-nav-list li:not(:last-child) {
//   margin-right: 4.8rem;
// }

// .no-flexbox-gap .list-item:not(:last-child) {
//   margin-bottom: 1.6rem;
// }

// .no-flexbox-gap .list-icon:not(:last-child) {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .delivered-faces {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .meal-attribute:not(:last-child) {
//   margin-bottom: 2rem;
// }

// .no-flexbox-gap .meal-icon {
//   margin-right: 1.6rem;
// }

// .no-flexbox-gap .footer-row div:not(:last-child) {
//   margin-right: 6.4rem;
// }

// .no-flexbox-gap .social-links li:not(:last-child) {
//   margin-right: 2.4rem;
// }

// .no-flexbox-gap .footer-nav li:not(:last-child) {
//   margin-bottom: 2.4rem;
// }

// @media (max-width: 75em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 3.2rem;
//   }
// }

// @media (max-width: 59em) {
//   .no-flexbox-gap .main-nav-list li:not(:last-child) {
//     margin-right: 0;
//     margin-bottom: 4.8rem;
//   }
// }