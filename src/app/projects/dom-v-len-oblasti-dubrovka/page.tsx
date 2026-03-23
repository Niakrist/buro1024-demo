import { Container, DropDown, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function DomVLenOblastiDubrovkaPage() {
  const slides = adapterSliderForProject(projects[4]);
  const content = adapterContent(projects[4]);
  const gallery = adapterGallery(projects[4]);

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
      <Container className={styles.mb63}>
        <ImgContainer item1={gallery[0]} item2={gallery[1]} />
        <ImgContainer item1={gallery[2]} item2={gallery[3]} />
        <ImgContainer item1={gallery[4]} item2={gallery[6]} />
        <ImgContainer item1={gallery[6]} />
        <ImgContainer item1={gallery[7]} item2={gallery[8]} />
        <ImgContainer item1={gallery[9]} />
      </Container>
    </div>
  );
}
