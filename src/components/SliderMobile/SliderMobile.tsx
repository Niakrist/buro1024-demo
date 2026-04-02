'use client';
import { useState, useCallback, useRef, useEffect } from 'react';
import styles from './SliderMobile.module.css';
import { ImageUI, LineList } from '@/ui';
import { ISlide } from '@/types';

interface ISliderMobileProps {
  slides: ISlide[];
  duration?: number;
  onAllSlidesViewed?: () => void;
  onRestart?: () => void; // колбэк при перезапуске
  children?: (slide: any, index: number) => React.ReactNode;
}

export const SliderMobile = ({
  slides,
  duration = 7000,
  onAllSlidesViewed,
  onRestart,
  children,
}: ISliderMobileProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedSlides, setCompletedSlides] = useState<Set<number>>(
    new Set(),
  );
  const allSlidesViewedRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const isRestartingRef = useRef(false);

  // Функция перезапуска слайдера
  const restartSlider = useCallback(() => {
    if (isRestartingRef.current) return;
    isRestartingRef.current = true;

    // Сбрасываем все состояния
    setCurrentIndex(0);
    setCompletedSlides(new Set());
    allSlidesViewedRef.current = false;

    // Вызываем колбэк перезапуска
    onRestart?.();

    // Сбрасываем флаг после небольшой задержки
    setTimeout(() => {
      isRestartingRef.current = false;
    }, 100);
  }, [onRestart]);

  // Закрашиваем все слайды, которые меньше текущего индекса
  useEffect(() => {
    setCompletedSlides((prev) => {
      const newSet = new Set(prev);
      for (let i = 0; i < currentIndex; i++) {
        if (!newSet.has(i)) {
          newSet.add(i);
        }
      }
      return newSet;
    });
  }, [currentIndex]);

  // Проверяем, все ли слайды просмотрены
  useEffect(() => {
    if (
      completedSlides.size === slides.length &&
      !allSlidesViewedRef.current &&
      !isRestartingRef.current
    ) {
      allSlidesViewedRef.current = true;
      onAllSlidesViewed?.();

      // Перезапускаем слайдер через небольшую задержку
      // чтобы пользователь увидел, что все слайды просмотрены
      setTimeout(() => {
        restartSlider();
      }, 500); // Задержка 500ms перед перезапуском
    }
  }, [completedSlides.size, slides.length, onAllSlidesViewed, restartSlider]);

  // Отмечаем текущий слайд как просмотренный при завершении анимации
  const handleSlideComplete = useCallback(
    (completedIndex: number) => {
      if (
        completedIndex === currentIndex &&
        !isAnimatingRef.current &&
        !isRestartingRef.current
      ) {
        isAnimatingRef.current = true;
        setCompletedSlides((prev) => {
          const newSet = new Set(prev);
          if (!newSet.has(completedIndex)) {
            newSet.add(completedIndex);
          }
          return newSet;
        });

        // Переключаемся на следующий слайд
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
        isAnimatingRef.current = false;
      }
    },
    [currentIndex, slides.length],
  );

  // Переключение на следующий слайд
  const nextSlide = useCallback(() => {
    if (isRestartingRef.current) return;

    // Отмечаем текущий слайд как просмотренный
    setCompletedSlides((prev) => {
      const newSet = new Set(prev);
      if (!newSet.has(currentIndex)) {
        newSet.add(currentIndex);
      }
      return newSet;
    });

    // Переключаемся на следующий слайд
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, slides.length]);

  // Обработчик клика по слайду
  const handleSlideClick = () => {
    if (isRestartingRef.current) return;
    nextSlide();
  };

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContainer} onClick={handleSlideClick}>
        {slides.map((slide, index) => (
          <div
            key={slide.img}
            className={`${styles.slideWrapper} ${
              index === currentIndex ? styles.active : ''
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            {children ? (
              children(slide, index)
            ) : (
              <div className={styles.slideContent}>
                <ImageUI
                  img={slide.img}
                  title={slide.title}
                  tags={slide.tags}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <LineList
        items={slides}
        currentIndex={currentIndex}
        duration={duration}
        onSlideComplete={handleSlideComplete}
        completedSlides={completedSlides}
      />
    </div>
  );
};
