import React from 'react';

import styles from './MenuBurger.module.css';
import cn from 'classnames';

interface IMenuBurgerProps {
  isShow: boolean;
  onClick: () => void;
}

export const MenuBurger = ({ isShow, onClick }: IMenuBurgerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.menuBurger, { [styles.isActive]: isShow })}
    >
      <span className={cn(styles.span, { [styles.isActive]: isShow })} />
    </button>
  );
};
