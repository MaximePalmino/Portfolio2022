import styles from "../components/Works.module.scss"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Works = () => {

    const titleRef = useRef(null)

    const headerRef = useRef<any>()

      useEffect(() => {
        gsap.fromTo(headerRef.current, { y: "0", opacity:"1"}, { y: "-300", scale:'1', opacity: "1", duration: "1", ease:"power4.out", delay: '.2', 
        scrollTrigger: {
            trigger: headerRef.current,
            markers: true,
            scrub: 0.8
          }});
        gsap.fromTo(titleRef.current, { y: "100", scale:'1', opacity:"1"}, { y: "0", scale:'1', opacity: "1", duration: "1", ease:"power4.out", delay: '.2', 
        scrollTrigger: {
            trigger: titleRef.current,
            markers: true,
            scrub: 0.8
          }});


  }, []);
    return (
    
        <section ref={headerRef} className={styles.container}>
            <div ref={titleRef}>
            <h1 >Ton Of Love</h1>
            {/* <p>C'est un chalumeau</p> */}
            </div>

 
        </section>
    
    )
}

export default Works