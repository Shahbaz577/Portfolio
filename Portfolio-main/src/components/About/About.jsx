import React from 'react';
import styles from './About.module.css';
import { getImageUrl } from "../../utils";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1 className={styles.title}>About</h1>

            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    className={styles.aboutimg}
                />

                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Data Analyst</h3>
                            <p>With a keen eye for data accuracy and interpretation, I ensure that every analysis I conduct is insightful, actionable, and tailored to drive informed decision-making.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="server Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>Business Analyst</h3>
                            <p>For a Business Analyst, my expertise lies in understanding business needs, optimizing processes, and leveraging data insights to drive strategic decisions and enhance operational efficiency.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="ui Icon" />
                        <div className={styles.aboutItemsText}>
                            <h3>MIS Exicutive</h3>
                            <p>In the role of an MIS Executive, I specialize in transforming data into actionable insights through efficient reporting systems, ensuring that management has the information needed to make informed decisions.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
