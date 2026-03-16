import { Tag, Htag } from '@/ui';
import styles from './ImageUI.module.css';

interface iImageUIProps {
  img: string;
  title?: string;
  tags?: string[];
}

export const ImageUI = ({ img, title, tags }: iImageUIProps) => {
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
          <ul className={styles.list}>
            {tags.map((tag) => (
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
