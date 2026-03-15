import { slides } from '@/constants';
import { Container, GalleryContainer, Htag, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Header, Slider } from '@/components';

export default function ZagorodnayaRezidenciyaPage() {
  return (
    <div className={styles.page}>
      <Header absolute color="white">
        <NavMenu color="white" />
      </Header>
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
      <GalleryContainer vh="vh100" item1={slides[6]} item2={slides[1]} />
      <GalleryContainer vh="vh100" item1={slides[4]} />
      <GalleryContainer vh="vh100" item1={slides[3]} item2={slides[5]} />
    </div>
  );
}
