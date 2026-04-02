import { Container, UILink } from '@/ui';
import styles from './FooterBottom.module.css';
import { OFFICIAL, REQUISITES } from '@/constants';

export const FooterBottom = () => {
  return (
    <Container flex className={styles.container}>
      <div className={styles.left}>
        <ul className={styles.list}>
          <li className={styles.item}>{REQUISITES.IP}</li>
          <li className={styles.item}>{REQUISITES.INN}</li>
          <li className={styles.item}>{REQUISITES.ogrnip}</li>
        </ul>
        <ul className={styles.list}>
          {OFFICIAL.map(
            (item) =>
              !!item.isShow && (
                <li key={item.url}>
                  <UILink color="black" size="small" href={item.url}>
                    {item.name}
                  </UILink>
                </li>
              ),
          )}
        </ul>
      </div>

      <ul className={styles.listInfo}>
        <li>
          <UILink color="black" size="small" href="#">
            Дизайн сайта
          </UILink>
        </li>
        <li>
          <UILink color="black" size="small" href="#">
            Вёрстка
          </UILink>
        </li>
      </ul>
    </Container>
  );
};
