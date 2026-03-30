import { MENU } from '@/constants';
import { UILink } from '../UILink/UILink';
import styles from './NavMenu.module.css';
import { INavMenuProps } from './NavMenu.props';

export const NavMenu = ({ color }: INavMenuProps) => {
  return (
    <ul className={styles.list}>
      {MENU.map((item) => (
        <UILink href={item.url} key={item.url} color={color} size="navLink">
          {item.name}
        </UILink>
      ))}
    </ul>
  );
};
