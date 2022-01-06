var $ = jQuery;
gsap.registerPlugin(ScrollTrigger)

gsap.to(".intro_title",{
  y:0,
  opacity:1,
  duration: 1.5,
  delay: 0.5,
  startAt: {y:100},
  scrollTrigger: {
    trigger: ".section_hero",
  }
})

gsap.to(".description",{
  opacity:1,
  duration: 1.5,
  delay:0.5,
  scrollTrigger: {
    trigger: ".section_hero",
  }
})

gsap.to(".article_title",{
  y:0,
  opacity:1,
  duration: 1.5,
  delay: 0.5,
  startAt: {y:100},
  scrollTrigger: {
    trigger: ".section_about",
  }
})

gsap.to(".last_title",{
  y:0,
  opacity:1,
  duration: 1.5,
  delay: 0.5,
  startAt: {y:100},
  scrollTrigger: {
    trigger: ".section_news",
  }
})

 // Animazione carosello

$(function(){
  var colorchange = false;

    function togglecolorchange(){
      $("#change").toggleClass("colorchange")
      $("#one").toggleClass("colorchange")
      colorchange = !colorchange;
    }

    $("#one").on("mouseover", togglecolorchange)
    $("#one").on("mouseout", togglecolorchange)
});

$(function(){
  var colorchange = false;

    function togglecolorchange(){
      $("#change").toggleClass("colorchange1")
      $("#two").toggleClass("colorchange1")
      colorchange = !colorchange;
    }

    $("#two").on("mouseover", togglecolorchange)
    $("#two").on("mouseout", togglecolorchange)
});

$(function(){
  var colorchange = false;

    function togglecolorchange(){
      $("#change").toggleClass("colorchange2")
      $("#three").toggleClass("colorchange2")
      colorchange = !colorchange;
    }

    $("#three").on("mouseover", togglecolorchange)
    $("#three").on("mouseout", togglecolorchange)
});


// Animazione lista

$(function(){
  var hovermode = false;

    function togglehovermode(){
      $("#imageone").toggleClass("hovermode")
      $("#first .data").toggleClass("hovermode")
      $("#first .name").toggleClass("hovermode")
      $("#first .subtitle").toggleClass("hovermode")
      hovermode = !hovermode;
    }

    $("#first").on("mouseover", togglehovermode)
    $("#first").on("mouseout", togglehovermode)
});

$(function(){
  var hovermode = false;

    function togglehovermode(){
      $("#imagetwo").toggleClass("hovermode")
      $("#second .data").toggleClass("hovermode")
      $("#second .name").toggleClass("hovermode")
      $("#second .subtitle").toggleClass("hovermode")
      hovermode = !hovermode;
    }

    $("#second").on("mouseover", togglehovermode)
    $("#second").on("mouseout", togglehovermode)
});

$(function(){
  var hovermode = false;

    function togglehovermode(){
      $("#imagethree").toggleClass("hovermode")
      $("#third .data").toggleClass("hovermode")
      $("#third .name").toggleClass("hovermode")
      $("#third .subtitle").toggleClass("hovermode")
      hovermode = !hovermode;
    }

    $("#third").on("mouseover", togglehovermode)
    $("#third").on("mouseout", togglehovermode)
});
