'use client';

import { useState } from 'react';
import styles from './Slider.module.css';
import { BubbleList, Icon, ImageUI } from '@/ui';
import { ISlideProps } from './Slider.props';

export const Slider = ({ slides }: ISlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleClickSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.sliderSection}>
      <button onClick={goToPrevious} className={styles.prevButton}>
        <Icon name="iconArrowLeft" />
      </button>

      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => {
          return (
            <div
              key={slide.img}
              className={`${styles.slideWrapper} ${index === currentIndex ? styles.active : ''}`}
            >
              <ImageUI img={slide.img} title={slide.title} tags={slide.tags} />
            </div>
          );
        })}
        <BubbleList
          items={slides}
          currentIndex={currentIndex}
          onBubbleClick={handleClickSlide}
        />
      </div>

      <button onClick={goToNext} className={styles.nextButton}>
        <Icon name="iconArrowRight" />
      </button>
    </section>
  );
};
