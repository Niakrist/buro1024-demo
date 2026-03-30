import { UILink, Icon, Button } from '@/ui';

import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';

export const Header = ({
  children,
  color,
  absolute = false,
  className,
  blackTheme = false,
  padding = 'standart',
  ...props
}: IHeaderProps) => {
  return (
    <header
      className={cn(
        styles.header,
        {
          [styles.absolute]: absolute,
          [styles.paddingSmall]: padding === 'small',
          [styles.paddingStandart]: padding === 'standart',
        },
        className,
      )}
      {...props}
    >
      <UILink color={color} href="/" className={styles.link}>
        <Icon name="iconLogo" />
      </UILink>

      <nav className={styles.nav}>
        {children}
        <Button
          bg={blackTheme ? 'white' : 'black'}
          color={blackTheme ? 'black' : 'white'}
          size="small"
          uppercase
        >
          Recreate
        </Button>
      </nav>
    </header>
  );
};
