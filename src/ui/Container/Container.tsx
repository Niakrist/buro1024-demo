import React from 'react';

import styles from './Container.module.css';
import { IContainerProps } from './Container.props';

export const Container = ({ children }: IContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};
