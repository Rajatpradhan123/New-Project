gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".Main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".Main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".Main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".Main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




var t1 = gsap.timeline()

t1.from("nav", {

  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  scrub: true


})



t1.from("nav>#N1>h4", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,

})


t1.from("nav>#N2>h4", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,

})


t1.from("nav>#N3", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 0.5,

})


t1.from("#Head", {

  opacity: 0,
  delay: 0.3,
  duration: 2,

})


t1.from(".Overlay>img", {
  y: 30,
  scale: 1,
  opacity: 0,
  delay: 0.1,
  duration: 1,

})


t1.from("#Left", {
  x: -30,
  scale: 1,
  opacity: 0,
  duration: 1,

})


t1.from("#Right", {
  x: 30,
  scale: 1,
  opacity: 0,
  duration: 1,

})






