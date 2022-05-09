import styles from './header.module.scss'
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import image from "../assets/img/DSC02459-6.jpg"
import Works from './Works';
import { title } from 'process';
import { text } from 'node:stream/consumers';


const Header: React.FC = () => {


  const boxRef = useRef<any>();
  const textRef = useRef<any>()
  const titleRef = useRef<any>()
  const titleRef1 = useRef<any>()
  const titleRef2 = useRef<any>()
  const containerRef = useRef<any>(null)
  const img = useRef<any>(null)

  const headerRef = useRef<any>()

  useEffect(() => {

    gsap.fromTo(boxRef.current, { y: "700", scale:'1.6', opacity:"0", rotation: "5"}, {y: "0",rotation: "0",scale:'1', opacity: "1", duration: "1.3", ease:"power4.out", delay: '.2'});
    gsap.fromTo(textRef.current, { opacity: 0, y: 40, rotation: "2"}, {rotation:0, y: "0", opacity: "1", duration: "1", ease:"power4.out", delay:".4"});
    gsap.fromTo(titleRef.current, { opacity: 0 , y: 80, rotation: "2"}, { y: 0, opacity: 1, rotation: 0, duration: 1.2, ease:"power4.out", delay: .6});

    setTimeout(() => {
      gsap.to(headerRef.current, { y: "-30%", ease: "power4.out",
        scrollTrigger: {
          trigger: headerRef.current,
          markers: true,
          start: "top center",
          end: "bottom top",
          scrub: 0.8,

        }
      });
    }, 600)
    
  }, []);



    return (
      <div ref={containerRef} className="box" data-scroll-container >
        <header className={styles.header} >
          <div className={styles.container} ref={headerRef}>
            <div className={styles.textFirst}  >
              <div className={styles.paragraph} ref={textRef} data-scroll-section >
                <p> Intrigued by beauty, fascinated by technology </p>
                <p>and fuelled with an everlasting devotion to digital </p>
                <p>craftsmanship and meaningful aesthetics. </p>
              </div>
            </div>
            <div  ref={titleRef} data-scroll-section >
                <h1 className={styles.titles} data-scroll data-scroll-speed="1" >Digital</h1>
                <h1 className={styles.titles} data-scroll data-scroll-speed="1">Design</h1>
                <h1 className={styles.titles} data-scroll data-scroll-speed="1">Experience</h1>
              </div>
              <div className={styles.textSecond} ref={titleRef1} data-scroll-section>
                <div className={styles.description} data-scroll data-scroll-speed="1">
                 <p>White-glove digital experiences, engaging content and impactful design solutions that inspire, affect and delight. We carefully wrap emotionally rich aesthetics around strategic concepts to deliver award-winning digital design that exceeds expectations.</p>
                </div>
                <div className={styles.info} data-scroll data-scroll-speed="1">
                  <p>maximepalmino.pro@gmail.com</p>
                  <p>07 67 88 45 02</p>
                </div>

              </div>
              
          </div>

 
        </header>
        <div className={styles.background} >
           <img ref={boxRef}  className={styles.img} src={image.src} alt="" />
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651546909228-2f33515c2e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651762971888-64dadfa959be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" /> */}
           {/* <img ref={boxRef}  className={styles.img} src="https://images.unsplash.com/photo-1651440391743-ef05664bbc93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" /> */}

          </div>

      </div>
    )
}


export default Header