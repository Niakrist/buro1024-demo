import { Container, DropDown, Htag, NavMenu } from '@/ui';
import {
  Content,
  Galery,
  Header,
  Recommendations,
  Slider,
  SliderSwitch,
} from '@/components';
import { PROJECTS_DATA } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function OtelVSochiPage() {
  const slides = adapterSliderForProject(PROJECTS_DATA[9]);
  const content = adapterContent(PROJECTS_DATA[9]);
  const gallery = adapterGallery(PROJECTS_DATA[9]);
  const galleryS = adapterGallery(PROJECTS_DATA[10]);

  return (
    <>
      <Header absolute color="white" className={styles.headerMobile}>
        <NavMenu color="white" type="header" />
      </Header>
      <SliderSwitch slides={slides} />
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
        <Recommendations projects={PROJECTS_DATA} />
      </Container>
    </>
  );
}
