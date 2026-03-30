'use client';
import { UILink, Icon, Button, MenuBurger } from '@/ui';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useMobile } from '@/hooks';

export const Header = ({
  children,
  color,
  absolute = false,
  className,
  blackTheme = false,
  padding = 'standart',
  ...props
}: IHeaderProps) => {
  const { isMobile } = useMobile();
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow((prev) => !prev);
  };

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isShow]);

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
        <Icon name="iconLogo" className={styles.iconLogo} />
      </UILink>

      {isMobile && <MenuBurger onClick={handleOpen} isShow={isShow} />}
      <nav className={cn(styles.nav, { [styles.mobNav]: isShow })}>
        {children}

        {isMobile ? (
          <Button
            bg="white"
            color="black"
            size="full"
            fontWeight="fv500"
            uppercase
          >
            Recreate
          </Button>
        ) : (
          <Button
            bg={blackTheme ? 'white' : 'black'}
            color={blackTheme ? 'black' : 'white'}
            size="small"
            uppercase
          >
            Recreate
          </Button>
        )}
      </nav>
    </header>
  );
};
