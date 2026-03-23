import { Container, DropDown, Htag, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function ChastnyyDomVRoshchinoPage() {
  const slides = adapterSliderForProject(projects[0]);
  const content = adapterContent(projects[0]);
  const gallery = adapterGallery(projects[0]);

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
      <Container className={styles.mb80}>
        <ImgContainer item1={gallery[0]} />
        <ImgContainer item1={gallery[1]} />
        <ImgContainer item1={gallery[2]} />
      </Container>
      <Container className={styles.mb160}>
        <DropDown name="Технические планы проекта" />
      </Container>
      <Container>
        <Htag color="black" size="big" tag="h2" className={styles.mb40}>
          Другие проекты
        </Htag>
        <Recommendations projects={projects} />
      </Container>
    </div>
  );
}
