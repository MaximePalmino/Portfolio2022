import styles from './header.module.scss'
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
// import { useRef, useEffect, useState } from 'react';
import { useEffect, useRef } from 'react';



const Intro: React.FC = () => {

    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);

    return (
      <motion.div className={styles.text} >
        <h2  style={{color: "black", fontWeight: 100}}>PASSIONATE ABOUT WEB TECHNOLOGIES.<br/>I LOVE WORKING AT THE INTERSECTION OF CREATIVITY<br/>ANDUSER FRIENDLY INTERFACES.<br/>I CREATE MEMORABLE WEB EXPERIENCES.</h2>
      </motion.div>
    );
  };


// const HeaderTitle: React.FC = () => {

//     return (
        
//         <motion.div 
//         // initial={{ opacity: 0, x: -100}}
//         // whileInView={{ opacity: 1, x: 100 }}
//         // transition={{duration:0.8, staggerChildren: 0.3}}
//         >
//             <h1         className={styles.header__title} 
//  style={{color:"white", zIndex:9999}}>Digital <br/> Design</h1>
//         </motion.div>
//     )
// }

const Header: React.FC = () => {



    return (
        <>

            <motion.div style={{ height: "200vh", backgroundColor: "white"}}>
                <Intro />
            </motion.div>
            <header className={styles.header__container}>
            <motion.div  style={{ height: "200vh"}} className={styles.container__img}  >   
             <h1 className={styles.header__title} style={{color:"white", zIndex:9999}}>Front-end<br/> Developer</h1>
            </motion.div>     
            {/* <motion.p className={styles.header__paragraph}>Front-end based in Paris programmer </motion.p> */}
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