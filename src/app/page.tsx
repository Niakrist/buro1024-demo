import { Container, GalleryContainer, Htag, NavMenu } from '@/ui';
import { Footer, Header, Slider } from '@/components';
import { projects } from '@/data';
import { adapterSlider } from '@/utils';
import styles from './page.module.css';

export default function Home() {
  const slides = adapterSlider(projects);
  return (
    <>
      <Header absolute color="white">
        <NavMenu color="white" />
      </Header>
      <Slider slides={slides} />
      <Container className={styles.container}>
        <Htag className={styles.title} color="black" tag="h2" size="medium">
          Уникальные пространства для уникальных людей
        </Htag>
        <p className={styles.text}>
          От интерьера до архитектуры и среды — мы создаём проекты разного
          масштаба и сложности, соединяя эстетику, функциональность и характер
        </p>
      </Container>
      <GalleryContainer vh="vh100" item1={projects[1]} item2={projects[2]} />
      <GalleryContainer vh="vh100" item1={projects[5]} />
      <GalleryContainer vh="vh100" item1={projects[4]} item2={projects[6]} />
      <Footer />
    </>
  );
}
