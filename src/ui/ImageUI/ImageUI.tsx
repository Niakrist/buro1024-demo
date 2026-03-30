import { Htag, TagList } from '@/ui';
import styles from './ImageUI.module.css';

interface IImageUIProps {
  img: string;
  title?: string;
  tags?: string[];
  className?: string;
}
import cn from 'classnames';

export const ImageUI = ({ img, title, tags, className }: IImageUIProps) => {
  return (
    <>
      <img src={img} alt={title} className={cn(styles.image, className)} />
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
