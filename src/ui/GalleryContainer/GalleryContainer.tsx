import { ImageUI } from '@/ui';
import styles from './GalleryContainer.module.css';
import cn from 'classnames';
import { IGalleryContainerProps } from './GalleryContainer.props';
import Link from 'next/link';

export const GalleryContainer = ({
  item1,
  item2,
  item3,
  vh,
  mb,
  className,
}: IGalleryContainerProps) => {
  if (item1 && item2 && item3) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.smallMb]: mb === 'small' },
          { [styles.mediumMb]: mb === 'medium' },
          { [styles.bigMb]: mb === 'big' },
          { [styles.vh100]: vh === 'vh100' },
          className,
        )}
      >
        <Link href={`${item1.url}`} className={styles.parent}>
          <ImageUI
            img={item1.projectImg}
            tags={item1.tags}
            title={item1.title}
            className={styles.heightMobile}
          />
        </Link>
        <Link href={`${item2.url}`} className={styles.parent}>
          <ImageUI
            img={item2.projectImg}
            tags={item2.tags}
            title={item2.title}
            className={styles.heightMobile}
          />
        </Link>
        <Link href={`${item3.url}`} className={styles.parent}>
          <ImageUI
            img={item3.projectImg}
            tags={item3.tags}
            title={item3.title}
            className={styles.heightMobile}
          />
        </Link>
      </div>
    );
  } else if (item1 && item2) {
    return (
      <div
        className={cn(
          styles.wrapperMedium,
          { [styles.smallMb]: mb === 'small' },
          { [styles.mediumMb]: mb === 'medium' },
          { [styles.bigMb]: mb === 'big' },
          { [styles.vh100]: vh === 'vh100' },
          className,
        )}
      >
        <Link href={`${item1.url}`} className={styles.parent}>
          <ImageUI
            img={item1.projectImg}
            tags={item1.tags}
            title={item1.title}
            className={styles.heightMobile}
          />
        </Link>
        <Link href={`${item2.url}`} className={styles.parent}>
          <ImageUI
            img={item2.projectImg}
            tags={item2.tags}
            title={item2.title}
            className={styles.heightMobile}
          />
        </Link>
      </div>
    );
  } else if (item1) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.smallMb]: mb === 'small' },
          { [styles.mediumMb]: mb === 'medium' },
          { [styles.bigMb]: mb === 'big' },
          { [styles.vh100]: vh === 'vh100' },
          className,
        )}
      >
        <Link href={`${item1.url}`} className={styles.parent}>
          <ImageUI
            img={item1.projectImg}
            tags={item1.tags}
            title={item1.title}
            className={styles.heightMobileBig}
          />
        </Link>
      </div>
    );
  }
};
