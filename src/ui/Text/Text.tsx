import React from 'react';

export interface ITextProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  children: React.ReactNode;
  color: 'white' | 'black';
  size: 'small' | 'medium' | 'big' | 'veryBig';
  fw?: 'fw400' | 'fw500' | 'fw700';
  className?: string;
}

import cn from 'classnames';
import styles from './Text.module.css';

export const Text = ({
  children,
  color,
  size,
  fw = 'fw400',
  className,
  ...props
}: ITextProps) => {
  return (
    <p
      className={cn(
        styles.text,
        {
          [styles.whiteText]: color === 'white',
          [styles.blackText]: color === 'black',
          [styles.smallText]: size === 'small',
          [styles.mediumText]: size === 'medium',
          [styles.bigText]: size === 'big',
          [styles.veryBig]: size === 'veryBig',
          [styles.fw400]: fw === 'fw400',
          [styles.fw500]: fw === 'fw500',
          [styles.fw700]: fw === 'fw700',
        },
        className,
        { ...props },
      )}
    >
      {children}
    </p>
  );
};
