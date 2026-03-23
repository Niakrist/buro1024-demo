import { Container, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function ChastnyyDomVMyaglovoPage() {
  const slides = adapterSliderForProject(projects[5]);
  const content = adapterContent(projects[5]);
  const gallery = adapterGallery(projects[5]);

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
        <ImgContainer item1={gallery[0]} />
        <ImgContainer item1={gallery[1]} />
      </Container>
    </div>
  );
}
