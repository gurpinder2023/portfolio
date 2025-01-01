import React from 'react';
import { getImageUrl } from '../../../utils';
import Styles from './Hero.module.css';

export const Hero = () => {
    return <section className ={Styles.container}>   
        <div className = {Styles.content}>
            <h1 className = {Styles.title}>Hi, I'm Gurpinder kaur</h1>
            <p className = {Styles.description}>I am full Stack Developer having 2 Years of Hands-On Experince with Javascript, NodeJS.
                Reach out to learn more about me.
            </p>
            <a href="mailto:gurpinderk714@gmail.com" className={Styles.contactBtn}>Contact Me</a>
        </div>

        <img src ={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className = {Styles.heroImg} />

        <div className={Styles.topBlur}/>
        <div className={Styles.bottomBlur}/>
    </section>;
};