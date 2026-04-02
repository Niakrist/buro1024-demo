'use client';
import { UILink, Icon, MenuBurger } from '@/ui';
import styles from './Header.module.css';
import { IHeaderProps } from './Header.props';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useMobile } from '@/hooks';
import { PHONE_TEL } from '@/constants';

export const Header = ({
  children,
  color,
  absolute = false,
  className,
  blackTheme = false,
  isNotFound = false,
  padding = 'standart',
  ...props
}: IHeaderProps) => {
  const isMobile = useMobile();
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
          [styles.showNav]: isShow,
        },
        className,
      )}
      {...props}
    >
      <UILink color={isShow ? 'white' : color} href="/" className={styles.link}>
        <Icon name="iconLogo" className={styles.iconLogo} />
      </UILink>

      {isMobile && (
        <MenuBurger
          onClick={handleOpen}
          isShow={isShow}
          isNotFound={isNotFound}
        />
      )}
      <nav className={cn(styles.nav, { [styles.mobNav]: isShow })}>
        {children}

        {isMobile ? (
          <a
            href={`https://t.me/${PHONE_TEL}`}
            className={styles.mobileLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Recreate
          </a>
        ) : (
          <a
            href={`https://t.me/${PHONE_TEL}`}
            className={cn(
              styles.desctopLink,
              blackTheme ? styles.black : styles.white,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Recreate
          </a>
        )}
      </nav>
    </header>
  );
};
