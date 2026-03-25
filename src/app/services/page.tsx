import { Container, Htag, NavMenu, UILink } from '@/ui';
import styles from './page.module.css';
import { Header } from '@/components';
import { SERVICES_DATA } from '@/data';

export default function ServicesPage() {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" />
      </Header>
      <Container>
        <Htag className={styles.title} color="black" size="big" tag="h1">
          Услуги
        </Htag>
        <ul className={styles.list}>
          {SERVICES_DATA.map((service) => (
            <li key={service.url}>
              <img
                className={styles.img}
                src={service.img}
                alt={service.title}
              />
              <Htag className={styles.mb16} color="black" size="small" tag="h2">
                {service.title}
              </Htag>
              <p className={styles.text}>{service.description}</p>
              <UILink
                color="black"
                size="standart"
                underline
                href={service.url}
              >
                {service.link}
              </UILink>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
