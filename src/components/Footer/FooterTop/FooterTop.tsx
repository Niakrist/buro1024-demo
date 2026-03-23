import { Container, Icon, NavMenu, UILink } from '@/ui';
import styles from './FooterTop.module.css';
import { EMAIL, PHONE, TELEGRAM, WHATSAPP } from '@/constants';

export const FooterTop = () => {
  return (
    <Container flex className={styles.margin}>
      <div className={styles.left}>
        <Icon name="iconLogo" />
        <div className={styles.iconGroup}>
          <Icon name="iconRespace" />
          <Icon name="iconArchitects" />
        </div>
        <p className={styles.text}>
          Уникальные пространства для уникальных людей
        </p>
      </div>
      <div className={styles.right}>
        <NavMenu color="black" />
        <div className={styles.contact}>
          <UILink color="black" className={styles.link} href="">
            {PHONE}
          </UILink>
          <UILink color="black" className={styles.link} href="">
            {EMAIL}
          </UILink>
          <UILink color="black" className={styles.link} href="">
            {TELEGRAM.name}
          </UILink>
          <UILink color="black" className={styles.link} href="">
            {WHATSAPP.name}
          </UILink>
        </div>
      </div>
    </Container>
  );
};
