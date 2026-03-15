import { slides } from '@/constants';
import { Container, GalleryContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Header } from '@/components';

export default function ProjectsPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" />
      </Header>
      <Container relative>
        <GalleryContainer className={styles.mb} vh="vh100" item1={slides[0]} />
        <GalleryContainer
          vh="vh100"
          item1={slides[6]}
          item2={slides[1]}
          className={styles.wrapper}
        />
        <GalleryContainer vh="vh100" item1={slides[4]} />
        <GalleryContainer
          vh="vh100"
          item1={slides[3]}
          item2={slides[5]}
          className={styles.wrapper}
        />
        <GalleryContainer className={styles.mb} vh="vh100" item1={slides[6]} />
        <GalleryContainer
          vh="vh100"
          item1={slides[2]}
          item2={slides[9]}
          item3={slides[10]}
          className={styles.wrapper}
        />
        <GalleryContainer
          vh="vh100"
          item1={slides[7]}
          item2={slides[5]}
          className={styles.wrapper}
        />
      </Container>
    </>
  );
}
