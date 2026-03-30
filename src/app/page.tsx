import { Container, GalleryContainer, Htag, NavMenu } from '@/ui';
import { Footer, Header, Slider } from '@/components';
import { PROJECTS_DATA } from '@/data';
import { adapterSlider } from '@/utils';
import styles from './page.module.css';

export default function Home() {
  const slides = adapterSlider(PROJECTS_DATA);
  return (
    <>
      <Header padding="small" absolute color="white">
        <NavMenu color="white" type="header" />
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
      <GalleryContainer
        vh="vh100"
        mb="big"
        item1={PROJECTS_DATA[1]}
        item2={PROJECTS_DATA[2]}
      />
      <GalleryContainer vh="vh100" mb="big" item1={PROJECTS_DATA[5]} />
      <GalleryContainer
        vh="vh100"
        mb="big"
        item1={PROJECTS_DATA[4]}
        item2={PROJECTS_DATA[6]}
      />
      <Footer />
    </>
  );
}
