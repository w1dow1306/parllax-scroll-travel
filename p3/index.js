let controller =  new ScrollMagic.Controller();
let timeline = new TimelineMax();
timeline
.to(".g2",3,{y:-200,scale:1.1},"-=3")
.to(".g3",3,{scale:0.7,y:-178},"-=3")
.fromTo(".bg",{y:-100},{y:0,duration:3},"-=3")
.to(".lt",3,{scale:1.5},"-=3")
.to(".content",3,{top:'0%',zIndex:10000000,},"-=3")

let scene = new ScrollMagic.Scene({
  triggerElement:"section",
  duration:"100%",
  triggerHook:0,
}).setTween(timeline).setPin("section").addTo(controller)