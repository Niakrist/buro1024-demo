import { Button, Container, Htag, NavMenu, Text } from '@/ui';
import styles from './page.module.css';
import { Header } from '@/components';

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
        <img className={styles.img} src="about.jpg" alt={'О нас'} />
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
            <Button bg="black" color="white" size="small">
              Позвонить
            </Button>
            <Button bg="black" color="white" size="small">
              Написать на почту
            </Button>
            <Button bg="black" color="white" size="small">
              Написать в телеграм
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
