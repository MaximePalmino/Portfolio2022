import styles from "../components/About.module.scss"
import HorizontalScrollText from "./animations/HorizontalScrollText"


const About: React.FC = () => {

const firstChildScroll = "Art direction — Digital design"
const secondChildScroll = "Branding — Illustration"

    return (
        <>
        <HorizontalScrollText firstChildScroll={firstChildScroll} secondChildScroll={secondChildScroll} />
        <div className={styles.container}>
            <div className={styles.paragraph}>
                <p>Hi! I am Claudia Mussett an interactive designer, art director and illustrator working from Barcelona (Spain) to everywhere. <br/><br/>
                Born and raised in Latin America I have more than ten years of experience focused mostly on the digital world. I try to bring a wide range of artistic craft into my work, storytelling and sometimes a sense of humour. I’ve also been a creative, designer, creative designer, art director, creative art director, UI / UX designer, interaction designer, product designer, design director and all those things that you can be at advertising and design agencies.
                Now I am leading the digital department at Vasava and since 2018 I’m judging some websites in Awwwards.<br/><br/> I just love to make stuff, sometimes pretty serious and sometimes just for fun.
                If you would like to see my full portfolio just send me a request, or send me a good pizza recipe by email.

You can also find me on Behance or Instagram.</p>
</div>
        </div>
        </>
    )
}

export default About