import { IContentProps } from './Content.props';
import { Container, Htag, Tag } from '@/ui';

import styles from './Content.module.css';
export const Content = ({ title, description, tags }: IContentProps) => {
  return (
    <Container flex className={styles.container}>
      <div className={styles.content}>
        <Htag color="black" tag="h1" size="big" className={styles.title}>
          {title}
        </Htag>
        <div>
          {description.map((text, index) => (
            <p className={styles.text} key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
      <ul className={styles.tagList}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
    </Container>
  );
};
