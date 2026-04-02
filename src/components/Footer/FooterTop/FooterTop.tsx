import { Container, Icon, NavMenu } from '@/ui';
import styles from './FooterTop.module.css';
import { EMAIL, PHONE, PHONE_TEL, TELEGRAM, WHATSAPP } from '@/constants';

export const FooterTop = () => {
  return (
    <Container flex className={styles.container}>
      <div className={styles.left}>
        <Icon name="iconLogo" className={styles.iconLogo} />
        <div className={styles.iconGroup}>
          <Icon name="iconRespace" />
          <Icon name="iconArchitects" />
        </div>
        <p className={styles.text}>
          Уникальные пространства для уникальных людей
        </p>
      </div>
      <div className={styles.right}>
        <NavMenu color="black" type="footer" />
        <div className={styles.contact}>
          <a href={`tel:${PHONE_TEL}`} className={styles.link}>
            {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className={styles.link}>
            {EMAIL}
          </a>
          <a
            href={`https://t.me/${PHONE_TEL}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {TELEGRAM.name}
          </a>
          <a
            href={`https://wa.me/${PHONE_TEL}`}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {WHATSAPP.name}
          </a>
        </div>
      </div>
    </Container>
  );
};
