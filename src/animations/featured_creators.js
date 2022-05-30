import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
let sections = gsap.utils.toArray('.creator_wrap .car_wrap')
const animateSection = () => {
     gsap.registerPlugin(ScrollTrigger)
     gsap.timeline({
          scrollTrigger: {
               trigger: '.creators',
               scrub: 2,
               start: 'center center',
               end: 'bottom +=300',
               pin: '.creators',
               toggleActions: 'play reset none restart',
          },
     }).to('.creators .creator_wrap', {
          xPercent: -70 * (sections.length - 2),
          duration: 20,
          ease: Circ.easeInOut,
     })
}

export default animateSection
