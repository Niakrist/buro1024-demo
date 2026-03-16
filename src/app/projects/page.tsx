// import { slides } from '@/constants';
import { Container, GalleryContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Header } from '@/components';
import { projects } from '@/data';

export default function ProjectsPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" />
      </Header>
      <Container relative>
        <GalleryContainer
          className={styles.mb}
          vh="vh100"
          item1={projects[0]}
        />
        <GalleryContainer
          vh="vh100"
          item1={projects[1]}
          item2={projects[2]}
          className={styles.wrapper}
        />
        <GalleryContainer vh="vh100" item1={projects[5]} />
        <GalleryContainer
          vh="vh100"
          item1={projects[4]}
          item2={projects[6]}
          className={styles.wrapper}
        />
        <GalleryContainer
          className={styles.mb}
          vh="vh100"
          item1={projects[7]}
        />
        <GalleryContainer
          vh="vh100"
          item1={projects[3]}
          item2={projects[11]}
          item3={projects[12]}
          className={styles.wrapper}
        />
        <GalleryContainer
          vh="vh100"
          item1={projects[8]}
          item2={projects[6]}
          className={styles.wrapper}
        />
      </Container>
    </>
  );
}
