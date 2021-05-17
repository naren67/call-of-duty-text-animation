


const words = ['World is at risk', 'who is gonna save the world', 'the number one killer is time', 'it destroys all']


//blinker
gsap.to('.blink', {opacity:0, ease:'power2.inOut', repeat:-1})
                              // or
// gsap.fromTo('.blink', {opacity:0,ease:'power2.inOut' }, {opacity:1,ease:'power2.inOut', repeat:-1 })



//text typing animation  (only plays once)
// let runText = gsap.timeline()

// words.forEach(word=>{
//           let t1 = gsap.timeline()

//           t1.to('.text', {duration:4, text:word})
//           runText.add(t1)
// })




//text typing animation  (repeat simultaneously)  type and delete function
                              //repeat -1 => runs code infinite times
let runText = gsap.timeline({repeat: -1})

words.forEach(word=>{                      //yoyo motion
          let t1 = gsap.timeline({repeat:1, yoyo:true, repeatDelay : 1})

          t1.to('.text', {duration:3, text:word})
          runText.add(t1)
})


