// 
import React, { useState } from 'react';
import styles from './Gallary.module.css';
import portfolioData from '../../data/gallary.json';

const Gallary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allItems = [
    ...portfolioData.volunteering,
    ...portfolioData.certificates,
    ...portfolioData.hackathons,
  ];

  const itemsPerView = 3; // Number of items visible at a time

  const handleNext = () => {
    if (currentIndex < allItems.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.gallaryContainer}>
      <h2 className={styles.titles}>Gallery</h2>
      <div className={styles.carousel}>
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &#8592;
        </button>
        <div className={styles.carouselWindow}>
          <div
            className={styles.carouselItems}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {allItems.map((item, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={`/src/assets/${item.image}`}
                  alt={item.title}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.description && (
                  <p className={styles.cardDescription}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={handleNext}
          disabled={currentIndex >= allItems.length - itemsPerView}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Gallary;

