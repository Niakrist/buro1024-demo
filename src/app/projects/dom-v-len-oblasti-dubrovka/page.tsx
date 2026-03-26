import { Container, Htag, ImgContainer } from '@/ui';
import { Content, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function DomVLenOblastiDubrovkaPage() {
  const slides = adapterSliderForProject(projects[4]);
  const content = adapterContent(projects[4]);
  const gallery = adapterGallery(projects[4]);

  return (
    <>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container>
        <ImgContainer item1={gallery[0]} item2={gallery[1]} />
        <ImgContainer item1={gallery[2]} item2={gallery[3]} />
        <ImgContainer item1={gallery[4]} item2={gallery[6]} />
        <ImgContainer item1={gallery[6]} />
        <ImgContainer item1={gallery[7]} item2={gallery[8]} />
        <ImgContainer item1={gallery[9]} />
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
