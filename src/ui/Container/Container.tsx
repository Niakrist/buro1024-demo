import React from 'react';

import styles from './Container.module.css';
import { IContainerProps } from './Container.props';

import cn from 'classnames';

export const Container = ({ children, className }: IContainerProps) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
