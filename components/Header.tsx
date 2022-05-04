import styles from './header.module.scss'
import { motion, useViewportScroll, useTransform, AnimatePresence, useMotionValue } from "framer-motion";
// import { useRef, useEffect, useState } from 'react';
import { useEffect, useRef } from 'react';
import Box from '../components/Box';
import Nav from './Nav';


const Header: React.FC = () => {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const left = useTransform(scrollYProgress, [0, 0.7], [150, 600]);
  const right = useTransform(scrollYProgress, [0, 0.7], [150, 600]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["#aea2829c", "rgb(0, 0, 0)"]
  // )
  let top = useTransform(
    scrollYProgress,
    [0, 1],
    [230, 800]
  )
 const bottom = useTransform(
  scrollYProgress,
  [0, 1],
  [200, -200]
 )
  const textIntro = {
    hidden: {
      // transform: "translate3d(0px, -100%, 0px)",
      y:10,
      x: -60,
      opacity:0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      // transform: "translate3d(0px, -7%, 0px)",
      x:0,
      opacity:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:.4, ease: 'easeOut'
      },
    },
  }
  const textIntroSec = {
    hidden: {
      y: -30,
      x: 60,
      opacity:0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: -50,
      x: 0,
      opacity:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:.4, delay:.1, ease: 'easeOut'
      },
    },
  }
  const imgHeader = {
    hidden: {
      y:30,
      opacity:0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:.6, delay:.3, ease: 'easeOut'
      },
    },
  }
  const imgHeaderLeft = {
    hidden: {
      y:30,
      opacity:0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:.6, delay:.2, ease: 'easeOut'
      },
    },
  }
  const imgHeaderRight = {
    hidden: {
      y:30,
      opacity:0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      y: 0,
      opacity:1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration:.6, delay:.4, ease: 'easeOut'
      },
    },
  }

    return (
      <>
      <div className={styles.container}>
        <motion.header className={styles.header}>
          {/* <Nav /> */}
          <motion.h1 
          className={styles.titles}
            variants={textIntro}
            animate="visible"
            initial="hidden"
          >Front-end Developer <br/>
          </motion.h1>
          <motion.h1
          className={styles.titles}
            variants={textIntroSec}
            animate="visible"
            initial="hidden"
        >
            Based in Paris
      </motion.h1>
      <motion.div
           variants={imgHeader}
           animate="visible"
           initial="hidden"     
           style={{bottom}}
           whileHover={{ transform: "skew(15deg, 15deg)" }}

      className={styles.img}></motion.div>
      <motion.div           style={{ top, left}}

           variants={imgHeaderLeft}
           animate="visible"
           initial="hidden"     
      className={styles.imgLeft}></motion.div>
      <motion.div           style={{ top, right }}

           variants={imgHeaderRight}
           animate="visible"
           initial="hidden"     
      className={styles.imgRight}></motion.div>
        </motion.header>
        {/* <section style={{height: "100vh", backgroundColor:"white", zIndex:9999}}>
          <h1>Ho</h1>
        </section>
        <section>
          <h1>Ho</h1>
        </section>
        <section>
          <h1>Ho</h1>
        </section> */}

        </div>
        </>
    )
}

export default Header