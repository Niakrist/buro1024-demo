import styles from './MenuBurger.module.css';
import cn from 'classnames';
import { IMenuBurgerProps } from './MenuBurger.props';

export const MenuBurger = ({
  isShow,
  onClick,
  isNotFound,
}: IMenuBurgerProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(styles.menuBurger, {
        [styles.isNotFoundBtn]: isNotFound,
        [styles.isActive]: isShow,
      })}
    >
      <span
        className={cn(styles.span, {
          [styles.isNotFoundSpan]: isNotFound,
          [styles.isActive]: isShow,
        })}
      />
    </button>
  );
};
