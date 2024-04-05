import React from 'react'
import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';


export const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Olá, meu nome é Davy</h1>
      <p className={styles.description}>Desenvolvedor Full Stack experiente em C#, Unity e React, entre outras tecnologias. Estou disponível para discutir oportunidades de colaboração. Entre em contato para mais informações. </p>
      <a href="mailto:davywoolley@gmail.com" className={styles.contactBtn}>Contate-me</a>
    </div>
    <img src={getImageUrl("hero/profile.png")} className={styles.heroImg} />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>;
}
