// cursor
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li');

document.addEventListener('mousemove', e => {
  mouseCursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
});

document.addEventListener('click', () => {
  mouseCursor.classList.add("shrink");

  setTimeout(() => {
    mouseCursor.classList.remove("shrink");
  }, 400);
});


// to scroll up
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

// ANIMATION
const tl = gsap.timeline();

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 2});
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.7");
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 1});
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".front-text", {opacity: 0}, {opacity: 1}, "-=1");