import { Htag, TagList } from '@/ui';
import styles from './ImageUI.module.css';

interface IImageUIProps {
  img: string;
  title?: string;
  tags?: string[];
}

export const ImageUI = ({ img, title, tags }: IImageUIProps) => {
  return (
    <>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.info}>
        {!!title && (
          <Htag color="white" size="medium" tag="h2">
            {title}
          </Htag>
        )}
        {!!tags && (
          <TagList tags={tags} color="white" className={styles.list} />
        )}
      </div>
    </>
  );
};
