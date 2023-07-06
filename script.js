var tl=gsap.timeline();
tl
.from("#nav img",{
    scale:0.8,
    opacity:0,
    // scale:1.3,
    duration:0.5,
  })
.from("#nav1",{
    y:50,
    opacity:0,
    // scale:1.3,
    duration:0.8,
  })

.from("#page1 #img11",{
    // y:50,
    opacity:0,
    scale:1,
    duration:0.9,
  })
  .from("#page1 .page1_content h1",{
    y:50,
    opacity:0,
    // scale:0.8,
    duration:0.5,
  })
.from("#page1 .page1_content h4",{
    y:50,
    opacity:0,
    // scale:0.8,
    duration:0.5,
  })
.from("#page1 .page1_content p",{
    y:50,
    opacity:0,
    // scale:0.8,
    duration:0.5,
  })
.from("#page1 .page1_content button",{
    // y:50,
    opacity:0,
    scale:0.7,
    duration:0.5,
  })
gsap.from("#page2 #page21 img",{
    x:-40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #page21 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page2 #page22 img",{
    x:40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #page22 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page2 #page21 .img21 , #page2 #page22 .img22",{
    y:40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #page21 .img21 , #page2 #page22 .img22",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page3 #page31 img",{
    x:-40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #page31 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page3 #page32 img",{
    x:40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #page32 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page3 #page31 .img31 , #page3 #page32 .img32",{
    y:40,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page3 #page31 .img31 , #page3 #page32 .img32",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2,
    }
})
gsap.from("#page4",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1,
    }
})
gsap.from("#page5",{
    scale:1,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:2,
    }
})