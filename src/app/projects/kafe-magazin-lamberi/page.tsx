import { Container, Htag, ImgContainer } from '@/ui';
import { Content, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function KafeMagazinLamberiPage() {
  const slides = adapterSliderForProject(projects[12]);
  const content = adapterContent(projects[12]);
  const gallery = adapterGallery(projects[12]);

  return (
    <div className={styles.page}>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container>
        <ImgContainer
          item1={gallery[0]}
          item2={gallery[1]}
          item3={gallery[2]}
        />
      </Container>
      <Container>
        <Htag
          color="black"
          size="big"
          tag="h2"
          className={cn(styles.mb40, styles.mt160)}
        >
          Другие проекты
        </Htag>
        <Recommendations projects={projects} />
      </Container>
    </div>
  );
}
