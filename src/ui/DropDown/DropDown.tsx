'use client';
import { useState } from 'react';
import styles from './DropDown.module.css';
import { Icon } from '../Icon/Icon';
import cn from 'classnames';
import { IDropDownProps } from './DropDown.props';

export const DropDown = ({ name, className, ...props }: IDropDownProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleOpen = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className={cn(styles.wrapper, className, { ...props })}>
      <button onClick={handleOpen} className={styles.button}>
        <p className={styles.text}>{name}</p>{' '}
        <Icon
          name="iconArrowDown"
          className={cn(styles.iconArrowDown, { [styles.isActive]: isShow })}
        />
      </button>
      {!!isShow && (
        <ul>
          <li>План</li>
          <li>Проект</li>
        </ul>
      )}
    </div>
  );
};
