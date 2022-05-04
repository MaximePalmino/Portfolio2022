import styles from './loader.module.scss'
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';


const Loader: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isOpenBackground, setIsOpenBackground] = useState<boolean>(false)
    const [titleFade, setTitleFade] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        }, 2500)
        setTimeout(() => {
            setIsOpenBackground(true)
            setTitleFade(true)
        }, 2900)
    }, [isOpen, isOpenBackground, titleFade])

    const title = {
        hidden: {
            opacity: 0,
            rotate: -4,
            y:40,
            color: "white",
            transition: {
              when: "afterChildren",
            },
          },
        visible: {
          opacity: 1,
          rotate: 0,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration:2, delay: 0.6, ease: 'easeOut'
          },
        },
      }
    
    const replace = {
        hidden: {
            opacity: 0,
            rotate: 4,
            y:100,
            color: "white",
            transition: {
              when: "afterChildren",
            },
          },
        visible: {
          opacity: 1,
          rotate: 0,
          y: 40,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
            duration:2, delay: 0.6, ease: 'easeOut'
          },
        },
      }
    
      
    return (
        <>
        <motion.div className={styles.container}  data-isOpenBackground={isOpenBackground}>

            <motion.h1 
            className={styles.title}
            variants={title}
            animate="visible"
            initial="hidden"
            data-titleFade={titleFade}
            >Loading</motion.h1>
           <motion.div 
            data-isOpen={isOpen}
            variants={replace}
            animate="visible"
            initial="hidden"
            className={styles.img__replace}></motion.div>
        </motion.div>
        </>
    )
}

export default Loader