import styles from "../components/Works.module.scss"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Works = () => {

    const titleRef2 = useRef(null)

    const headerRef = useRef<any>()

//       useEffect(() => {
//     gsap.to(titleRef2.current, {
//       x: 100,
//       duration: 5,
//       scrollTrigger: {
//         trigger: titleRef2.current,
//         markers: true,
//         start: "top center",
//         end: "bottom 80px",
//         scrub: true
//       }
//     });
//   }, []);
    return (
    
        <section ref={headerRef} className={styles.container}>
                  <h1 ref={titleRef2} style={{color: "white"}} id="thirdCircle">hhhhh</h1>
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