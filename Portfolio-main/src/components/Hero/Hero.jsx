import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils"

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi, I'm Shahbaz Ali
                </h1>
                <p className={styles.description}>
                As a Data Analyst & Business Analyst with 3 months of experience, I transform data into actionable insights to drive strategic decisions and optimize business processes. Let's connect to discuss how I can contribute to your team's success.
                </p>
                <div className={styles.heroBtnSection}>
                    <a href="shahbazali.readytojoin@gmail.com" className={styles.contactBtn}>
                        Contact Me
                    </a>
                    <a href="https://drive.google.com/file/d/1lSvMGuNqOHj_OY4xpJadyGkAXuxlxAz6/view?usp=sharing" className={styles.contactBtn}>
                        Resume
                    </a>
                </div>

            </div>
            <img src={getImageUrl("hero/heroImage.png")}
                alt="Hero image of mine"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}

export default Hero
