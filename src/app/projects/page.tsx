import { Container, GalleryContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { PROJECTS_DATA } from '@/data';
import { Header } from '@/components';

export default function ProjectsPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" type="header" />
      </Header>
      <Container relative className={styles.container}>
        <GalleryContainer
          item1={PROJECTS_DATA[0]}
          className={styles.pt43}
          mb="medium"
          type="mobileProjects"
        />
        <GalleryContainer
          item1={PROJECTS_DATA[1]}
          item2={PROJECTS_DATA[2]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer item1={PROJECTS_DATA[5]} mb="medium" />
        <GalleryContainer
          item1={PROJECTS_DATA[4]}
          item2={PROJECTS_DATA[6]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer
          className={styles.mb}
          item1={PROJECTS_DATA[7]}
          mb="medium"
        />
        <GalleryContainer
          item1={PROJECTS_DATA[3]}
          item2={PROJECTS_DATA[11]}
          item3={PROJECTS_DATA[12]}
          className={styles.wrapper}
          mb="medium"
        />
        <GalleryContainer
          item1={PROJECTS_DATA[8]}
          item2={PROJECTS_DATA[6]}
          className={styles.wrapper}
          mb="medium"
        />
      </Container>
    </>
  );
}
