import { Bubble } from './Bubble/Bubble';
import { IBubbleListProps } from './BubbleList.props';

import styles from './BubbleList.module.css';

export const BubbleList = ({
  items,
  currentIndex,
  onBubbleClick,
}: IBubbleListProps) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item, index) => (
        <li key={item.img}>
          <Bubble
            onBubbleClick={onBubbleClick}
            index={index}
            currentIndex={currentIndex}
          />
        </li>
      ))}
    </ul>
  );
};
