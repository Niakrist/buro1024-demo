import { Container, Htag, NavMenu } from '@/ui';
import {
  Content,
  Galery,
  Header,
  Recommendations,
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

export default function ZagorodnayaRezidenciyaPage() {
  const slides = adapterSliderForProject(PROJECTS_DATA[1]);
  const content = adapterContent(PROJECTS_DATA[1]);
  const gallery = adapterGallery(PROJECTS_DATA[1]);

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
      <Galery gallery={gallery} />
      <Container className={styles.mobile}>
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
