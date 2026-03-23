import { Container, Htag, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function GostevoyDomVEnkolovoPage() {
  const slides = adapterSliderForProject(projects[8]);
  const content = adapterContent(projects[8]);
  const gallery = adapterGallery(projects[8]);

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
        <ImgContainer item1={gallery[1]} item2={gallery[2]} />
        <ImgContainer item1={gallery[3]} />
        <ImgContainer
          item1={gallery[4]}
          item2={gallery[5]}
          item3={gallery[6]}
        />
        <ImgContainer item1={gallery[7]} item2={gallery[8]} />
        <ImgContainer
          item1={gallery[9]}
          item2={gallery[10]}
          item3={gallery[11]}
        />
        <ImgContainer
          item1={gallery[12]}
          item2={gallery[13]}
          item3={gallery[14]}
        />
        <ImgContainer item1={gallery[15]} item2={gallery[16]} />
        <ImgContainer item1={gallery[17]} item2={gallery[18]} />
        <ImgContainer item1={gallery[19]} />
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
