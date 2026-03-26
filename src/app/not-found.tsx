import { Button, Container, Htag, NavMenu, Text } from '@/ui';
import styles from './page.module.css';
import { Header } from '@/components';

export default function NotFound() {
  return (
    <>
      <Header color="white" className={styles.bgBlack} blackTheme>
        <NavMenu color="white" />
      </Header>
      <main className={styles.bgBlack}>
        <Container>
          <div className={styles.content}>
            <Htag color="black" size="big" tag="h1" hidden>
              Страница не найдена - ошибка 404
            </Htag>
            <Text
              size="veryBig"
              color="white"
              fw="fw500"
              className={styles.mb32}
            >
              Такой страницы не существует.
            </Text>
            <Text
              size="veryBig"
              color="white"
              fw="fw500"
              className={styles.mb40}
            >
              Пространство свободно — идеальное место
              для вашего будущего проекта.
            </Text>
            <Button bg="white" color="black" size="small" href="/">
              На главную
            </Button>
          </div>
        </Container>
      </main>
    </>
  );
}
