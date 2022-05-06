import styles from './header.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import image from "../assets/img/DSC02459-6.jpg"
const Header: React.FC = () => {


  const boxRef = useRef<any>();
  const textRef = useRef<any>()
  const titleRef = useRef<any>()
  const containerRef = useRef<any>(null)


  useEffect(() => {
  
 /* @ts-ignore */
    import("locomotive-scroll").then(locomotiveModule => {
      const scroll = new locomotiveModule.default({
        el: containerRef.current,
        smooth: true,
      })
    })
    
    gsap.fromTo(boxRef.current, { y: "700", scale:'1.3', opacity:"0", rotation: "5"}, {y: "0",rotation: "0",scale:'1', opacity: "1", duration: "1", ease:"power4.out"});
    gsap.fromTo(textRef.current, { opacity:"0", y: "40"}, { y: "0", opacity: "1", duration: "1", ease:"power4.out", delay:".4"});
    gsap.fromTo(titleRef.current, { opacity:"0", y: "80", rotation: "1.5"}, { y:"0", opacity: "1", rotation: "0", duration: "1.2", ease:"power4.out", delay:".6"});

  }, []);

    return (
      <div ref={containerRef}  data-scroll-container  >
        <header className={styles.header} >
          <div className={styles.container} data-scroll-section>
            <div className={styles.textFirst}  >
              <div className={styles.paragraph} ref={textRef} data-scroll data-scroll-speed="1">
                <p > Intrigued by beauty, fascinated by technology </p>
                <p>and fuelled with an everlasting devotion to digital </p>
                <p>craftsmanship and meaningful aesthetics. </p>
              </div>
            </div>
              <h1  id="ud" ref={titleRef} className={styles.titles} data-scroll data-scroll-speed="1">Digital</h1>
              <h1 className={styles.titles} data-scroll data-scroll-speed="2" >Design</h1>
              <h1 className={styles.titles} data-scroll data-scroll-speed="3" >Experience</h1>
              <div className={styles.textSecond}>
                <div className={styles.description}>
                 <p data-scroll data-scroll-speed="2" >White-glove digital experiences, engaging content and impactful design solutions that inspire, affect and delight. We carefully wrap emotionally rich aesthetics around strategic concepts to deliver award-winning digital design that exceeds expectations.</p>
                </div>
                <div data-scroll data-scroll-speed="2"  className={styles.info}>
                  <p>maximepalmino.pro@gmail.com</p>
                  <p>07 67 88 45 02</p>
                </div>

              </div>

          </div>
          <div className={styles.background} data-scroll-section >
           <img ref={boxRef}  className={styles.img} src={image.src} alt="" />
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651546909228-2f33515c2e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651762971888-64dadfa959be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651440391743-ef05664bbc93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" /> */}

          </div>



        </header>

      </div>
    )
}


export default Header