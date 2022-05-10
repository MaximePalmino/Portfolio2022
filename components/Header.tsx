import styles from './Header.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import image from "../assets/img/DSC02459-6.jpg"


const Header: React.FC = () => {


  const boxRef = useRef<any>();
  const textRef = useRef<any>()
  const titleRef = useRef<any>()
  const titleRef1 = useRef<any>()
  const containerRef = useRef<any>(null)
  const headerRef = useRef<any>()

  useEffect(() => {

    gsap.fromTo(boxRef.current, { y: "700", scale:'1.6', rotation: "5", opacity:0}, {y: "0",rotation: "0",scale:'1', opacity: "1", duration: "1.3", ease:"power4.out", delay: ''});
    gsap.fromTo(textRef.current, { opacity: 0, y: 40, rotation: "2"}, {rotation:0, y: "0", opacity: "1", duration: "1", ease:"power4.out", delay:".4"});
    gsap.fromTo(titleRef.current, { opacity: 0 , y: 80, rotation: "2"}, { y: 0, opacity: 1, rotation: 0, duration: 1.2, ease:"power4.out", delay: .6});

      gsap.to(headerRef.current, { y: "-30%", ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          markers: true,
          start: "top center",
          end: "bottom top",
          scrub: 0.8,

        }
      });
    
  }, []);



    return (
      <div ref={containerRef} className="box">
        <header className={styles.header} >
          <div className={styles.container} ref={headerRef}>
            <div className={styles.textFirst}  >
              <div className={styles.paragraph} ref={textRef}>
                <p> Intrigued by beauty, fascinated by technology </p>
                <p>and fuelled with an everlasting devotion to digital </p>
                <p>craftsmanship and meaningful aesthetics. </p>
              </div>
            </div>
            <div  ref={titleRef}>
                <h1 className={styles.titles}>Digital</h1>
                <h1 className={styles.titles}>Design</h1>
                <h1 className={styles.titles}>Experience</h1>
              </div>
              <div className={styles.textSecond} ref={titleRef1}>
                <div className={styles.description}>
                <p>maximepalmino.pro@gmail.com</p>
                  <p>07 67 88 45 02</p>      </div>
                <div className={styles.info}>
                  <p>maximepalmino.pro@gmail.com</p>
                  <p>07 67 88 45 02</p>
                </div>

              </div>
              
          </div>

 
        </header>
        <div className={styles.background} >
           <img ref={boxRef}  className={styles.img} src={image.src} alt="" />
          </div>

      </div>
    )
}


export default Header