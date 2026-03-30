import { Container, DropDown, Htag, ImgContainer, NavMenu } from '@/ui';
import { Content, Header, Recommendations, Slider } from '@/components';
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
        <NavMenu color="white" />
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
        <ImgContainer item1={gallery[0]} />
        <ImgContainer item1={gallery[1]} item2={gallery[2]} />
        <ImgContainer item1={gallery[3]} />
        <ImgContainer
          item1={gallery[4]}
          item2={gallery[5]}
          item3={gallery[6]}
        />
      </Container>
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
        <ImgContainer item1={galleryS[0]} />
        <ImgContainer item1={galleryS[1]} />
        <ImgContainer item1={galleryS[2]} item2={galleryS[3]} />
        <ImgContainer item1={galleryS[4]} />
        <ImgContainer item1={galleryS[5]} item2={galleryS[6]} />
        <ImgContainer
          item1={galleryS[7]}
          item2={galleryS[8]}
          item3={galleryS[9]}
        />
        <ImgContainer item1={galleryS[10]} />
      </Container>
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
