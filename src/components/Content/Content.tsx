import { IContentProps } from './Content.props';
import { Container, Htag, TagList } from '@/ui';

import styles from './Content.module.css';
export const Content = ({ title, description, tags }: IContentProps) => {
  return (
    <Container className={styles.container}>
      <div className={styles.content}>
        <Htag color="black" tag="h1" size="big" className={styles.title}>
          {title}
        </Htag>
        <div className={styles.texts}>
          {description.map((text, index) => (
            <p className={styles.text} key={index}>
              {text}
            </p>
          ))}
        </div>
        <TagList tags={tags} className={styles.tags} color="black" />
      </div>
    </Container>
  );
};
