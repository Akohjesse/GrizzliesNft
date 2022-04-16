import { gsap, Circ } from 'gsap'

const animateSection = () => {
    gsap.from('.img .indiv', {
        opacity: 0,
        ease: Circ.easeInOut,
        stagger: 0.5,
        duration: 1,
    })
}

export default animateSection
