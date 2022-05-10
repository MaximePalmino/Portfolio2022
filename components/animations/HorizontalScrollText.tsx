import { useEffect, useRef } from "react"
import styles from "../../components/animations/HorizontalScrollText.module.scss"
import gsap from "gsap"


interface horizontalScrollProps {
    firstChildScroll: string,
    secondChildScroll: string,
}


const HorizontalScrollText: React.FC<horizontalScrollProps> = ({firstChildScroll, secondChildScroll}) => {

const firstChild = useRef<any>()
const secondChild = useRef<any>()

useEffect(() => {

    gsap.fromTo(firstChild.current, {x: 1500}, {x:-1000, scrollTrigger: {
        trigger: firstChild.current,
        markers: true,
        start: "-500px center",
        end: "bottom top",
        scrub: 1,

    }})
    gsap.fromTo(secondChild.current, {x: -1500}, {x:1000, scrollTrigger: {
        trigger: secondChild.current,
        markers: true,
        start: "-700px center",
        end: "bottom top",
        scrub: 1,

    }})

}, [])

    return (
        <div className={styles.container}>
            <div ref={firstChild}>
                <h1>{firstChildScroll}</h1>
            </div>
            <div ref={secondChild}>
                <h1>{secondChildScroll}</h1>
            </div>
        </div>
    )
}

export default HorizontalScrollText