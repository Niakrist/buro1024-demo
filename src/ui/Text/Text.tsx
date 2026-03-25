import React from 'react';

export interface ITextProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  children: React.ReactNode;
  color: 'white' | 'black';
  size: 'small' | 'medium' | 'big';
  className?: string;
}

import cn from 'classnames';
import styles from './Text.module.css';

export const Text = ({
  children,
  color,
  size,
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
        },
        className,
        { ...props },
      )}
    >
      {children}
    </p>
  );
};
