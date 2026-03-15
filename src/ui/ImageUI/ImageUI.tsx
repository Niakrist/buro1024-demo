import { Tag, Htag } from '@/ui';
import styles from './ImageUI.module.css';
import { ISlide } from '@/types';

interface iImageUIProps {
  slide: ISlide;
}

export const ImageUI = ({ slide }: iImageUIProps) => {
  return (
    <>
      <img src={slide.url} alt={slide.title} className={styles.image} />
      <div className={styles.info}>
        {!!slide.title && (
          <Htag color="white" size="medium" tag="h2">
            {slide.title}
          </Htag>
        )}
        {!!slide.tags && (
          <ul className={styles.list}>
            {slide.tags.map((tag) => (
              <li className={styles.item} key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
