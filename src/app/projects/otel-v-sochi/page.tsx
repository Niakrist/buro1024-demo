import { Container, DropDown, Htag, NavMenu } from '@/ui';
import { Content, Galery, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function OtelVSochiPage() {
  const slides = adapterSliderForProject(projects[9]);
  const content = adapterContent(projects[9]);
  const gallery = adapterGallery(projects[9]);
  const galleryS = adapterGallery(projects[10]);

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
      <Container>
        <Htag className={styles.mb20} color="black" size="big" tag="h2">
          Дом L
        </Htag>
      </Container>
      <Galery gallery={gallery} />
      <Container>
        <DropDown name="Технические планы проекта" className={styles.mt20} />
      </Container>
      <Container>
        <Htag
          className={cn(styles.mb20, styles.mt80)}
          color="black"
          size="big"
          tag="h2"
        >
          Дом S
        </Htag>
      </Container>
      <Galery gallery={galleryS} />
      <Container>
        <DropDown name="Технические планы проекта" className={styles.mt20} />
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
