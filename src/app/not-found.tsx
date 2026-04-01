import { Button, Htag, NavMenu, Text } from '@/ui';
import styles from './NotFound.module.css';
import { Header } from '@/components';

export default function NotFound() {
  return (
    <>
      <Header
        color="white"
        className={styles.blackHeader}
        blackTheme
        isNotFound
      >
        <NavMenu type="header" color="white" />
      </Header>
      <main className={styles.blackMain}>
        <div className={styles.content}>
          <Htag color="black" size="big" tag="h1" hidden>
            Страница не найдена - ошибка 404
          </Htag>
          <Text
            size="veryBig"
            color="white"
            fw="fw500"
            className={styles.text404}
          >
            Такой страницы не существует.
          </Text>
          <Text size="veryBig" color="white" fw="fw500" className={styles.mb40}>
            Пространство свободно — идеальное место для вашего будущего проекта.
          </Text>
        </div>
        <Button
          bg="white"
          color="black"
          size="small"
          href="/"
          className={styles.button}
        >
          На главную
        </Button>
      </main>
    </>
  );
}
