import styles from "../components/Works.module.scss"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Works = () => {

    const headerRef = useRef<any>()
    useEffect(() => {

        gsap.to(headerRef.current, { backgroundColor: "pink", duration: 1,  ease: 'none' });
    
      });
    
    return (
    
        <section ref={headerRef} className={styles.container}>
            <h2>Nope</h2>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
            <h1>Hey</h1>
        </section>
    
    )
}

export default Works