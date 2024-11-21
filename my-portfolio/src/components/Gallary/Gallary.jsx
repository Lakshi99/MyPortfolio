import React from 'react';
import styles from './Gallary.module.css';
import portfolioData from '../../data/gallary.json'; 

const Section = ({ title, items }) => (
  <section className={styles.gallarySection}>
    <h2 className={styles.titles}>Gallary</h2>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.cardContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <img src={`/src/assets/${item.image}`} alt={item.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            {item.description && <p className={styles.cardDescription}>{item.description}</p>}
            <p className={styles.cardDate}>{item.date}</p>
            {item.issuer && <p className={styles.cardIssuer}>Issuer: {item.issuer}</p>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Gallary = () => {
  return (
    <div className={styles.experienceContainer}>
      <Section title="Volunteering" items={portfolioData.volunteering} />
      <Section title="Awards" items={portfolioData.certificates} />
      <Section title="Others" items={portfolioData.hackathons} />
    </div>
  );
};

export default Gallary;
