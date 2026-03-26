import { Container, DropDown, Htag, ImgContainer } from '@/ui';
import { Content, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function ChastnyyDomVRoshchinoPage() {
  const slides = adapterSliderForProject(projects[0]);
  const content = adapterContent(projects[0]);
  const gallery = adapterGallery(projects[0]);

  return (
    <>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container>
        <ImgContainer item1={gallery[0]} />
        <ImgContainer item1={gallery[1]} />
        <ImgContainer item1={gallery[2]} />
      </Container>
      <Container>
        <DropDown name="Технические планы проекта" className={styles.mt80} />
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
