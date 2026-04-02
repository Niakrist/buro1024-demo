import { Htag, TagList } from '@/ui';
import styles from './ImageUI.module.css';

import cn from 'classnames';
import { IImageUIProps } from './ImageUI.props';

export const ImageUI = ({
  img,
  title,
  tags,
  className,
  type,
}: IImageUIProps) => {
  return (
    <>
      <img src={img} alt={title} className={cn(styles.image, className)} />
      <div
        className={cn(styles.info, {
          [styles.mobileMain]: type === 'mobileMain',
          [styles.mobileProjects]: type === 'mobileProjects',
        })}
      >
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
