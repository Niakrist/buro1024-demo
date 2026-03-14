'use client';

import React, { useState } from 'react';
import styles from './Slider.module.css';
import Image from 'next/image';
import { Htag, Icon } from '@/ui';
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
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              priority={index === 0}
              className={styles.image}
            />
            <div className={styles.info}>
              {!!slide.title && (
                <Htag color="white" size="medium" tag="h2">
                  {slide.title}
                </Htag>
              )}
              {!!slide.tags && (
                <ul className={styles.list}>
                  {slide.tags.map((tag) => (
                    <li className={styles.item} key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <button onClick={goToNext} className={styles.nextButton}>
        <Icon name="IconArrowRight" />
      </button>
    </section>
  );
};
