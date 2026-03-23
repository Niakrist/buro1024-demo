import { Container, DropDown, ImgContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function ZagorodnayaRezidenciyaPage() {
  const slides = adapterSliderForProject(projects[1]);
  const content = adapterContent(projects[1]);
  const gallery = adapterGallery(projects[1]);

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
        <ImgContainer item1={gallery[2]} />
        <ImgContainer item1={gallery[3]} item2={gallery[4]} />
        <ImgContainer item1={gallery[5]} />
        <ImgContainer
          item1={gallery[6]}
          item2={gallery[7]}
          item3={gallery[8]}
        />
      </Container>
    </div>
  );
}
