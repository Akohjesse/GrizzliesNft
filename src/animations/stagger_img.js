import { gsap, Circ } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const animateSection = () => {
    gsap.registerPlugin(ScrollTrigger)

    let tl = new gsap.timeline({
        scrollTrigger: {
            trigger: '.carousel',
            scrub: 3,
            start: 'center center',
            end: 'bottom +=300',
            pin: '.carousel',
            toggleActions: 'play pause resume restart',
        },
    })
}

export default animateSection
