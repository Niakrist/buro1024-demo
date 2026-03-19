import React from 'react';

export interface IImgContaineProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  item1: IProject;
  item2?: IProject;
  item3?: IProject;
}

import styles from './ImgContainer.module.css';
import { IProject } from '@/types';

export const ImgContainer = ({ item1, item2, item3 }: IImgContaineProps) => {
  if (item1 && item2 && item3) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item1.img} alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item2?.img} alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item3?.img} alt="" />
        </div>
      </div>
    );
  }
  if (item1 && item2) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item1.img} alt="" />
        </div>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item2?.img} alt="" />
        </div>
      </div>
    );
  }
  if (item1) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={item1.img} alt="" />
        </div>
      </div>
    );
  }
};
