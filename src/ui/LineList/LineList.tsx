'use client';

import { Line } from './Line/Line';
import styles from './LineList.module.css';

interface ILineListProps {
  items: any[];
  currentIndex: number;
  duration?: number;
  onSlideComplete?: (index: number) => void;
  completedSlides?: Set<number>;
}

export const LineList = ({
  items,
  currentIndex,
  duration = 7000,
  onSlideComplete,
  completedSlides = new Set(),
}: ILineListProps) => {
  const handleAnimationComplete = (index: number) => {
    if (index === currentIndex) {
      onSlideComplete?.(index);
    }
  };

  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <li key={item.img} className={styles.lineItem}>
          <Line
            index={index}
            currentIndex={currentIndex}
            isActive={index === currentIndex}
            isCompleted={completedSlides.has(index)}
            duration={duration}
            onAnimationComplete={() => handleAnimationComplete(index)}
          />
        </li>
      ))}
    </ul>
  );
};
