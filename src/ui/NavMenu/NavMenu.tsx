'use client';
import { MENU } from '@/constants';
import { UILink } from '../UILink/UILink';
import styles from './NavMenu.module.css';
import { INavMenuProps } from './NavMenu.props';
import cn from 'classnames';
import { useMobile } from '@/hooks';

export const NavMenu = ({ color, type }: INavMenuProps) => {
  const isMobile = useMobile();
  return (
    <ul
      className={cn(styles.list, {
        [styles.header]: type === 'header',
        [styles.footer]: type === 'footer',
      })}
    >
      {MENU.map((item) => (
        <UILink
          href={item.url}
          key={item.url}
          color={isMobile && type === 'header' ? 'white' : color}
          type={type}
        >
          {item.name}
        </UILink>
      ))}
    </ul>
  );
};
