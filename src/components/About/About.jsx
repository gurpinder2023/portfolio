import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id ='about'>
            <h2 className= {styles.title}>About</h2>
            <div className={styles.content}>
               <img src ={getImageUrl("about/aboutImage.png")} alt="About image"  className={styles.aboutImage}/>
               <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src ={getImageUrl("about/cursorIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Full Stack Developer</h3>
                        <p> I specialize in designing and developing dynamic, scalable web applications with expertise in both frontend and backend technologies. My work ensures seamless user experiences and robust server-side performance.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src ={getImageUrl("about/serverIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Engineer</h3>
                        <p> I have experience in architecting, deploying, and managing cloud solutions to optimize performance, scalability, and cost-effectiveness. Proficient in leveraging cloud platforms to meet business needs efficiently.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src ={getImageUrl("about/uiIcon.png")} alt="cursor"/>
                    <div className={styles.aboutItemText}>
                        <h3>DevOps Engineer</h3>
                        <p>I bring expertise in automating workflows, managing CI/CD pipelines, and ensuring reliable software delivery. Skilled in bridging development and operations to streamline deployment processes and improve system reliability.</p>
                    </div>
                </li>
               </ul>
            </div>
        </section>
    )
};