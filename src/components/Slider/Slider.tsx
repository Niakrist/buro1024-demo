'use client';

import { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import { BubbleList, Icon, ImageUI } from '@/ui';
import { ISlideProps } from './Slider.props';

export const Slider = ({ slides }: ISlideProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevCurrent, setPrevCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevCurrent(currentIndex);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPrevCurrent(currentIndex);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleClickSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setPrevCurrent(currentIndex);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Автоматическое перелистывание каждые 7 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className={styles.sliderSection}>
      <button onClick={goToPrevious} className={styles.prevButton}>
        <Icon name="iconArrowLeft" />
      </button>

      <div className={styles.sliderContainer}>
        {slides.map((slide, index) => {
          // Вычисляем направление анимации
          let slideDirection = '';
          if (isAnimating) {
            if (index === currentIndex) {
              // Активный слайд - въезжает
              const isNext = currentIndex === (prevCurrent + 1) % slides.length;
              slideDirection = isNext
                ? styles.slideInRight
                : styles.slideInLeft;
            } else if (index === prevCurrent) {
              // Предыдущий активный слайд - выезжает
              const isNext = currentIndex === (prevCurrent + 1) % slides.length;
              slideDirection = isNext
                ? styles.slideOutLeft
                : styles.slideOutRight;
            }
          }

          return (
            <div
              key={slide.img}
              className={`${styles.slideWrapper} ${index === currentIndex ? styles.active : ''} ${slideDirection}`}
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
