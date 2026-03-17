import React from 'react';

import styles from './Container.module.css';
import { IContainerProps } from './Container.props';

import cn from 'classnames';

export const Container = ({
  className,
  flex = false,
  align,
  relative = false,
  children,
}: IContainerProps) => {
  return (
    <div
      className={cn(
        styles.container,
        {
          [styles.flex]: flex,
          [styles.relative]: relative,
          [styles.alignCenter]: align === 'center',
        },

        className,
      )}
    >
      {children}
    </div>
  );
};
