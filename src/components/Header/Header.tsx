import { MENU } from '@/constants';
import { UILink, Icon, Button, Container } from '@/ui';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <UILink color="white" href="/">
        <Icon name="iconLogo" />
      </UILink>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {MENU.map((item) => (
            <UILink href={item.url} key={item.url} color="white">
              {item.name}
            </UILink>
          ))}
        </ul>

        <Button bg="black" color="white" size="small">
          Recreate
        </Button>
      </nav>
    </header>
  );
};
