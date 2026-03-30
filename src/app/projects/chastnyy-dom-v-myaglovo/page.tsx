import { Container, Htag, NavMenu } from '@/ui';
import { Content, Galery, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function ChastnyyDomVMyaglovoPage() {
  const slides = adapterSliderForProject(projects[5]);
  const content = adapterContent(projects[5]);
  const gallery = adapterGallery(projects[5]);

  return (
    <>
      <Header absolute color="white">
        <NavMenu color="white" type="header" />
      </Header>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Galery gallery={gallery} />
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
