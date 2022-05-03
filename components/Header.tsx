import styles from './header.module.scss'
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useEffect, useState } from 'react';



const Intro: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
      
    return (
      <motion.div        
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:1, delay: 0.2}}
        className={styles.text} style={{ scale }}
        >
        <h2 style={{color: "white", fontWeight: 100}}>BUILDER OF GRACEFUL DIGITALSTORIES</h2>
      </motion.div>
    );
  };


const HeaderTitle: React.FC = () => {

    // const {  scrollYProgress } = useViewportScroll();
    // const scale =  useTransform(scrollYProgress, [0,  1], [0.8, 1.3]);

    return (
        
        <motion.div 
        className={styles.header__title} 
        // style={{scale}}         
        initial={{ opacity: 0, x: -100}}
        whileInView={{ opacity: 1, x: 100 }}
        transition={{duration:0.8}}
        >
            <h1 style={{color:"white", zIndex:9999}}><span>Digital</span><br/></h1>
        </motion.div>
    )
}

const Header: React.FC = () => {

    return (
        <>

            <motion.div style={{ height: "200vh", backgroundColor: "black"}}>
                <Intro />
            </motion.div>
            <header className={styles.header__container}>
            <motion.div  style={{ height: "200vh"}} className={styles.container__img}  >   
                 <HeaderTitle />    
            </motion.div>     
            <motion.p className={styles.header__paragraph}>Front-end based in Paris programmer </motion.p>
            <AnimatePresence>
                <motion.div style={{ margin: 0, padding: 0 }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
                </motion.div>
            </AnimatePresence>
        </header>
        </>
    )
}

export default Header