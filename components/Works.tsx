import styles from "../components/Works.module.scss"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import image from "../assets/img/DSC02459-6.jpg"
const Works = () => {

    const headerRef = useRef<any>()
    const workTitleRef = useRef<any>()

    const firstBox = useRef<any>()
    const firstBox1 = useRef<any>()
    const firstBox2 = useRef<any>()

    useEffect(() => {


        gsap.to(firstBox1.current, { y: -300, ease: "power4.out", scrollTrigger: {        
            trigger: firstBox.current,
            markers: true,
            scrub: 0.8,
  }})
        gsap.to(firstBox2.current, { y: -400, ease: "power4.out", scrollTrigger: {        
            trigger: firstBox.current,
            markers: true,
            scrub: 0.8,
  }})
 
        gsap.fromTo(workTitleRef.current, {x: 100, letterSpacing: "0.25em" }, {x:0, y: 0, ease: "power4.out", letterSpacing: "-0.01em", scrollTrigger: {        
            trigger: workTitleRef.current,
            start: "-700px center",
            end: "400px center",
            markers: true,
            scrub: 1,

  }})


    }, [])

    return (
    <>
        <section  ref={headerRef} className={styles.container} >
            <div className={styles.titleContainer}>
                <h1 ref={workTitleRef}>PlayGround</h1>

            </div>

                {/* <div className={styles.firstBox} ref={firstBox}>
                    <div className={styles.containerFirstImg}></div>
                </div>
                <div className={styles.secondBox} ref={firstBox1}>
                    <div className={styles.containerSecondImg}></div>
                </div>
                    <div className={styles.thirdBox} ref={firstBox2}>
                <div className={styles.containerThirdImg}></div>

                </div> */}
            </section>

            <div>
                {/* <div className={styles.sideBar}></div> */}
                {/* <img src={image.src} /> */}
            </div>
  

        </>
    )
}

export default Works

