import styles from './TagList.module.css';
import { Tag } from '../Tag/Tag';
import { ITagListProps } from './TagList.props';
import cn from 'classnames';

export const TagList = ({ tags, color, className }: ITagListProps) => {
  return (
    <ul
      className={cn(
        styles.tagList,
        {
          [styles.whiteColor]: color === 'white',
          [styles.blackColor]: color === 'black',
        },
        className,
      )}
    >
      {tags.map((tag) => (
        <Tag className={styles.tag} key={tag}>
          {tag}
        </Tag>
      ))}
    </ul>
  );
};
