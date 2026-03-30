import { Container, Htag, ImgContainer, NavMenu } from '@/ui';
import { Content, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function BlagoustroystvoDvoraVCentrePeterburgaPage() {
  const slides = adapterSliderForProject(projects[11]);
  const content = adapterContent(projects[11]);
  const gallery = adapterGallery(projects[11]);

  return (
    <>
      <Header absolute color="white">
        <NavMenu color="white" />
      </Header>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container>
        <ImgContainer item1={gallery[0]} />
        <ImgContainer item1={gallery[1]} item2={gallery[2]} />
        <ImgContainer item1={gallery[3]} />
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
    </>
  );
}
