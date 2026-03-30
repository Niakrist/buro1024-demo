import { Container, GalleryContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { projects } from '@/data';
import { Header } from '@/components';

export default function ProjectsPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" type="header" />
      </Header>
      <Container relative className={styles.container}>
        <GalleryContainer
          item1={projects[0]}
          className={styles.pt43}
          mb="medium"
        />
        <GalleryContainer
          item1={projects[1]}
          item2={projects[2]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer item1={projects[5]} mb="medium" />
        <GalleryContainer
          item1={projects[4]}
          item2={projects[6]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer
          className={styles.mb}
          item1={projects[7]}
          mb="medium"
        />
        <GalleryContainer
          item1={projects[3]}
          item2={projects[11]}
          item3={projects[12]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer
          item1={projects[8]}
          item2={projects[6]}
          className={styles.wrapper}
          mb="medium"
        />
      </Container>
    </>
  );
}
