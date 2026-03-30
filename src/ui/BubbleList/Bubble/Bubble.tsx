import styles from './Bubble.module.css';
import cn from 'classnames';
import { IBubbleProps } from './Bubble.props';

export const Bubble = ({
  index,
  currentIndex,
  onBubbleClick,
}: IBubbleProps) => {
  return (
    <div
      onClick={() => onBubbleClick(index)}
      className={cn(styles.bubble, { [styles.active]: index === currentIndex })}
    />
  );
};
