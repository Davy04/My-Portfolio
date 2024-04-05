import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section id='sobre' className={styles.container}>
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/desfoque-removebg-preview.png")} className={styles.aboutImg} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor BackEnd</h3>
              <p>Sou um desenvolvedor BackEnd experiente em C#, com sólidos conhecimentos em princípios de Programação Orientada a Objetos (POO).</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor FrontEnd</h3>
              <p>Experiência em prototipagem e desenvolvimento de hotsites com HTML, CSS, JS, React e Bootstrap.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} />
            <div className={styles.aboutItemText}>
              <h3>Desenvolvedor Unity</h3>
              <p>Tenho experiencia com criação de jogos 3D e 2D na Unity.</p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
