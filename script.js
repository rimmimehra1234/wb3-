const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



 var tl1= gsap.timeline();


 
    

 tl1.from(".nav",{
    y:-100,
    opacity : 0,
    duration : 1,
    
})

gsap.from(".page1 h1",{
    scale: 2,
    opacity:0,
    duration: 1,
    delay:1

})
gsap.from(".page1 h2",{
    scale: 2,
    opacity:0,
    duration: 1,
    delay:1
    
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub: 2

    }
});
tl2.from(".page2>h1",{
    scale:2,
    y:100,
    duration:1,
    opacity:0,
 
})

tl2.from(".leftpage2>h2",{
    y:100,
    duration:1,
    opacity:0,
 
})
tl2.from(".leftpage2>p",{
    y:100,
    duration:1,
    opacity:0,
 
})
tl2.from(".leftpage2>ul",{
    y:100,
    duration:1,
    opacity:0,
 
})
tl2.from(".leftpage2>button",{
    y:100,
    duration:1,
    opacity:0,
 
})


gsap.from(".rightpage2 >img",{
  
    y:100,
    scale:2,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger:".page2",
        scroller:".main",
        // markers:true,
        start:"top 30%",
        end:"top 10%",
        scrub: 2

    }

})

// gsap.from(".page3>h1",{
  
//     y:100,
//     scale:2,
//     opacity:0,
//     duration: 1,
//     scrollTrigger: {
//         trigger:".page3",
//         scroller:".main",
//         // markers:true,
//         start:"top 30%",
//         end:"top 10%",
//         scrub: 2

//     }

// })