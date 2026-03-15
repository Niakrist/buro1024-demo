import { ImageUI } from '@/ui';
import styles from './GalleryContainer.module.css';
import cn from 'classnames';
import { IGalleryContainerProps } from './GalleryContainer.props';

export const GalleryContainer = ({
  item1,
  item2,
  item3,
  vh,
  className,
}: IGalleryContainerProps) => {
  if (item1 && item2 && item3) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          className,
        )}
      >
        <div className={styles.parent}>
          <ImageUI slide={item1} />
        </div>
        <div className={styles.parent}>
          <ImageUI slide={item2} />
        </div>
        <div className={styles.parent}>
          <ImageUI slide={item3} />
        </div>
      </div>
    );
  } else if (item1 && item2) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          className,
        )}
      >
        <div className={styles.parent}>
          <ImageUI slide={item1} />
        </div>
        <div className={styles.parent}>
          <ImageUI slide={item2} />
        </div>
      </div>
    );
  } else if (item1) {
    return (
      <div
        className={cn(
          styles.one,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          className,
        )}
      >
        <ImageUI slide={item1} />
      </div>
    );
  }
};
