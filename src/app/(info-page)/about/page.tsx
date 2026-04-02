import { Button, Container, Htag, NavMenu, Text } from '@/ui';
import styles from './page.module.css';
import { Footer, Header } from '@/components';
import { EMAIL, PHONE_TEL } from '@/constants';

export default function AboutPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" type="header" />
      </Header>
      <Container className={styles.container}>
        <Htag color="black" size="big" tag="h1" hidden>
          Контакты
        </Htag>
        <img className={styles.img} src="about-mini.jpg" alt={'О нас'} />
        <div className={styles.content}>
          <Htag color="black" size="medium" tag="h2" className={styles.mb16}>
            О нас
          </Htag>
          <Text color="black" size="medium" className={styles.mb8}>
            Respace — архитектурное бюро, которое создает уникальные
            пространства.
          </Text>
          <Text color="black" size="medium" className={styles.mb8}>
            Мы работаем с архитектурой, интерьерами и средой, исходя не из
            стиля, а из личности. Нам важно понять, для кого создается
            пространство, как человек живет, чувствует и взаимодействует с ним
            каждый день.
          </Text>
          <Text color="black" size="medium">
            Мы не работаем по шаблонам и не продвигаем «единственно верный»
            стиль. Каждый проект Respace — это индивидуальное решение,
            сформированное задачей, контекстом и характером клиента.
          </Text>
        </div>

        <div className={styles.contacts}>
          <Htag color="black" size="medium" tag="h2" className={styles.mb16}>
            Контакты
          </Htag>
          <Text color="black" size="medium">
            Мы на связи с 10:00 до 20:00 по рабочим дням. Если у вас срочный
            вопрос то лучше позвонить или написать в телеграм.
          </Text>
          <div className={styles.buttons}>
            <Button
              bg="black"
              color="white"
              size="small"
              href={`tel:${PHONE_TEL}`}
            >
              Позвонить
            </Button>
            <Button
              bg="black"
              color="white"
              size="small"
              href={`mailto:${EMAIL}`}
            >
              Написать на почту
            </Button>
            <a
              className={styles.telegram}
              href={`https://t.me/${PHONE_TEL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Написать в телеграм
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
