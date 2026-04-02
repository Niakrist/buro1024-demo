'use client';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import styles from './Line.module.css';

interface ILineProps {
  index: number;
  currentIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
}

export const Line = ({
  index,
  currentIndex,
  isActive,
  isCompleted,
  duration = 7000,
  onAnimationComplete,
}: ILineProps) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>(null);
  const startTimeRef = useRef<number>(null);

  // Сбрасываем или устанавливаем прогресс в зависимости от состояния
  useEffect(() => {
    if (isCompleted) {
      // Если слайд уже просмотрен - полоска полностью закрашена
      setProgress(1);
    } else if (!isActive) {
      // Если не активен и не завершен - полоска пустая
      setProgress(0);
    }
  }, [isCompleted, isActive]);

  // Анимация для активного слайда
  useEffect(() => {
    if (!isActive || isCompleted) {
      // Останавливаем анимацию если слайд не активен или уже завершен
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
      return;
    }

    // Запускаем анимацию
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const newProgress = Math.min(elapsed / duration, 1);
      setProgress(newProgress);

      if (newProgress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Анимация завершена
        onAnimationComplete?.();
      }
    };

    startTimeRef.current = undefined;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    };
  }, [isActive, isCompleted, duration, onAnimationComplete]);

  return (
    <div
      className={cn(styles.line, {
        [styles.active]: index === currentIndex,
        [styles.completed]: isCompleted,
      })}
    >
      <div
        className={styles.progress}
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
};
