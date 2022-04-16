import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
let sections = gsap.utils.toArray('.carousel_container .car_wrap')
const animateSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline({
        scrollTrigger: {
            trigger: '.carousel',
            scrub: 3,
            start: 'center center',
            end: 'bottom +=300',
            pin: '.carousel',
            toggleActions: 'play pause resume restart',
        },
    }).to('.carousel', {
        xPercent: 100 * (sections.length - 2),
        duration: 20,
        ease: Circ.easeInOut,
    })
}

export default animateSection