import styles from './Galery.module.css';
import cn from 'classnames';
import { Container } from '@/ui';
import { IGalleryProps } from './Galery.props';

export const Galery = ({ gallery }: IGalleryProps) => {
  return (
    <Container className={styles.flex}>
      {gallery.map((item, index) => (
        <div
          key={index}
          className={cn(styles.slide, {
            [styles.large]: item.size === 'large',
            [styles.medium]: item.size === 'medium',
            [styles.small]: item.size === 'small',
          })}
        >
          <img className={styles.slideImg} src={item.img} alt="" />
        </div>
      ))}
    </Container>
  );
};
