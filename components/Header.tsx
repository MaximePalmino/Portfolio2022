import styles from './header.module.scss'
import { motion, useViewportScroll, useTransform, useElementScroll } from "framer-motion";
import useRefScroll from '../hooks/useRefScroll';
import { useRef, useEffect } from 'react';


const Intro: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  
    return (
      <motion.div className={styles.text} style={{ scale }}>
        <h2 style={{color: "white"}}>Hi there!</h2>
      </motion.div>
    );
  };

const HeaderTitle = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200,  1]);
  
    return (
        <motion.div className={styles.header__title} style={{scale}}>
                <h1 style={{color:"white", zIndex:9999}} >Design</h1>
        </motion.div>
    )
}
const Header: React.FC = () => {

    return (
        <>
            <motion.div style={{ height: "200vh", backgroundColor: "black" }}>
                <Intro />
            </motion.div>
            <header className={styles.header__container}>
            <motion.div  style={{ height: "200vh"}} className={styles.container__img}  >         
                 <HeaderTitle />      
             </motion.div>    
              <motion.p className={styles.header__paragraph}> Intrigued by beauty, fascinated by technology <br/> Intrigued by beauty, fascinated by technology </motion.p>
                
        </header>
        </>
    )
}

export default Header