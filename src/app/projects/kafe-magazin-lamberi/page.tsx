import { Container, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function KafeMagazinLamberiPage() {
  const slides = adapterSliderForProject(projects[12]);
  const content = adapterContent(projects[12]);
  const gallery = adapterGallery(projects[12]);

  return (
    <div className={styles.page}>
      <Header absolute color="white">
        <NavMenu color="white" />
      </Header>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container className={styles.mb160}>
        <ImgContainer
          item1={gallery[0]}
          item2={gallery[1]}
          item3={gallery[2]}
        />
      </Container>
    </div>
  );
}
