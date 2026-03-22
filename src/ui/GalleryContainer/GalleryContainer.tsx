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
  mb = 'big',
  className,
}: IGalleryContainerProps) => {
  if (item1 && item2 && item3) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          { [styles.smallMb]: mb === 'small' },
          { [styles.bigMb]: mb === 'big' },
          className,
        )}
      >
        <Link href={`${item1.url}`} className={styles.parent}>
          <ImageUI img={item1.img} tags={item1.tags} title={item1.title} />
        </Link>
        <Link href={`${item2.url}`} className={styles.parent}>
          <ImageUI img={item2.img} tags={item2.tags} title={item2.title} />
        </Link>
        <Link href={`${item3.url}`} className={styles.parent}>
          <ImageUI img={item3.img} tags={item3.tags} title={item3.title} />
        </Link>
      </div>
    );
  } else if (item1 && item2) {
    return (
      <div
        className={cn(
          styles.wrapper,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          { [styles.smallMb]: mb === 'small' },
          { [styles.bigMb]: mb === 'big' },
          className,
        )}
      >
        <Link href={`${item1.url}`} className={styles.parent}>
          <ImageUI img={item1.img} tags={item1.tags} title={item1.title} />
        </Link>
        <Link href={`${item2.url}`} className={styles.parent}>
          <ImageUI img={item2.img} tags={item2.tags} title={item2.title} />
        </Link>
      </div>
    );
  } else if (item1) {
    return (
      <Link
        href={`${item1.url}`}
        className={cn(
          styles.one,
          { [styles.vh100]: vh === 'vh100' },
          { [styles.vh90]: vh === 'vh90' },
          { [styles.smallMb]: mb === 'small' },
          { [styles.bigMb]: mb === 'big' },
          className,
        )}
      >
        <ImageUI img={item1.img} tags={item1.tags} title={item1.title} />
      </Link>
    );
  }
};
