import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

export const Button = ({
  color,
  bg,
  size,
  className,
  children,
  fontWeight = 'fv400',
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.blackColor]: color === 'black',
          [styles.whiteColor]: color === 'white',
          [styles.blackBg]: bg === 'black',
          [styles.whiteBg]: bg === 'white',
          [styles.small]: size === 'small',
          [styles.big]: size === 'big',
          [styles.full]: size === 'full',
          [styles.fv400]: fontWeight === 'fv400',
          [styles.fv405]: fontWeight === 'fv500',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
