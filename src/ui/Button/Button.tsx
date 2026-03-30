import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';
import { IButtonProps } from './Button.props';
import Link from 'next/link';

export const Button = ({
  color,
  bg,
  size,
  className,
  children,
  fontWeight = 'fv400',
  uppercase = false,
  href,
  ...props
}: IButtonProps) => {
  const getStyle = cn(
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
      [styles.fv500]: fontWeight === 'fv500',
      [styles.uppercase]: uppercase,
    },
    className,
  );

  return href ? (
    <Link href={href} className={getStyle}>
      {children}
    </Link>
  ) : (
    <button className={getStyle} {...props}>
      {children}
    </button>
  );
};
