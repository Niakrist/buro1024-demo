import { Container, Htag, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function ApartamentyPage() {
  const slides = adapterSliderForProject(projects[6]);
  const content = adapterContent(projects[6]);
  const gallery = adapterGallery(projects[6]);

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
        <ImgContainer item1={gallery[0]} item2={gallery[1]} />
        <ImgContainer
          item1={gallery[2]}
          item2={gallery[3]}
          item3={gallery[4]}
        />
        <ImgContainer item1={gallery[5]} item2={gallery[6]} />
        <ImgContainer item1={gallery[7]} />
        <ImgContainer item1={gallery[8]} item2={gallery[9]} />
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
