import { UILink, Icon, Button } from '@/ui';

import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';

export const Header = ({ children, color, absolute = false }: IHeaderProps) => {
  return (
    <header className={cn(styles.header, { [styles.absolute]: absolute })}>
      <UILink color={color} href="/">
        <Icon name="iconLogo" />
      </UILink>

      <nav className={styles.nav}>
        {children}
        <Button bg="black" color="white" size="small">
          Recreate
        </Button>
      </nav>
    </header>
  );
};
