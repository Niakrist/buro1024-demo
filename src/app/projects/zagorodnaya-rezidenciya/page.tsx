import { Container, GalleryContainer, Htag, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Header, Slider } from '@/components';
import { projects } from '@/data';
import { adapterSliderForProject } from '@/utils';

export default function ZagorodnayaRezidenciyaPage() {
  const slides = adapterSliderForProject(projects[0]);

  return (
    <div className={styles.page}>
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
      <GalleryContainer vh="vh100" item1={projects[6]} item2={projects[1]} />
      <GalleryContainer vh="vh100" item1={projects[4]} />
      <GalleryContainer vh="vh100" item1={projects[3]} item2={projects[5]} />
    </div>
  );
}
