import { Button, Container, Htag, ImageUI, UILink } from '@/ui';
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
      <div className={styles.flex}>
        <div className={styles.wrapper}>
          <ImageUI slide={slides[1]} index={0} />
        </div>
        <div className={styles.wrapper}>
          <ImageUI slide={slides[2]} index={0} />
        </div>
      </div>
      <div className={styles.wrapperOne}>
        <ImageUI slide={slides[4]} index={0} />
      </div>
      <div className={styles.flex}>
        <div className={styles.wrapper}>
          <ImageUI slide={slides[5]} index={0} />
        </div>
        <div className={styles.wrapper}>
          <ImageUI slide={slides[6]} index={0} />
        </div>
      </div>
    </div>
  );
}
