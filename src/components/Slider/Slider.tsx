'use client';

import React, { useState } from 'react';
import styles from './Slider.module.css';
import Image from 'next/image';
import { Htag, Icon, ImageUI, Tag } from '@/ui';
import { slides } from '@/constants';

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.sliderSection}>
      <button onClick={goToPrevious} className={styles.prevButton}>
        <Icon name="IconArrowLeft" />
      </button>

      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => (
          <div
            key={slide.url}
            className={`${styles.slideWrapper} ${index === currentIndex ? styles.active : ''}`}
          >
            <ImageUI slide={slide} index={index} />
          </div>
        ))}
      </div>

      <button onClick={goToNext} className={styles.nextButton}>
        <Icon name="IconArrowRight" />
      </button>
    </section>
  );
};
