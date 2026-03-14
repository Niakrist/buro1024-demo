import { Container, GalleryContainer, Htag, ImageUI } from '@/ui';
import styles from './page.module.css';
import { Header, Slider } from '@/components';
import { slides } from '@/constants';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Slider />
      <Container className={styles.container}>
        <Htag className={styles.title} color="black" tag="h2" size="medium">
          Уникальные пространства для уникальных людей
        </Htag>
        <p className={styles.text}>
          От интерьера до архитектуры и среды — мы создаём проекты разного
          масштаба и сложности, соединяя эстетику, функциональность и характер
        </p>
      </Container>
      <GalleryContainer item1={slides[1]} item2={slides[2]} />
      <GalleryContainer item1={slides[3]} />
      <GalleryContainer item1={slides[4]} item2={slides[5]} />
    </div>
  );
}
