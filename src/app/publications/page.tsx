import { Container, Htag, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Header, Publication } from '@/components';
import { PUBLICATIONS_DATA } from '@/data';

export default function PublicationsPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" />
      </Header>
      <Container className={styles.pt20}>
        <Htag hidden color="black" size="big" tag="h1">
          Публикации
        </Htag>
        <Publication publication={PUBLICATIONS_DATA[0]} type="big" />
      </Container>
    </>
  );
}
