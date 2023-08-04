let tl = gsap.timeline({ default: { ease: "power4.inOut", duration: 2 } });
let flatballs = CSSRulePlugin.getRule(".card:before") // to select the psudo element

tl.to("h1", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 1.8 })
  .to(".form", { "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, duration: 1.5 }, "-=1.5")
  .from('.card', {scaleY: 0, stagger: '.2', duration: 1.5}, '-=2')
  .from(flatballs, {transform: 'translateY: 100px', stagger: .2, opacity: 0, duration: 2}, '-=.8')
  .to('.title, .desc', {stagger: .1, opacity: 1, duration: 1.5, y: 0}, '-=2.5')
  .to('footer', {opacity: 1}, '-=2.5')
