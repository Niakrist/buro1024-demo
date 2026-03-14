import React from 'react';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import Image from 'next/image';
import styles from './ImageUI.module.css';
import { ISlide } from '@/types';

interface iImageUIProps {
  slide: ISlide;
  index: number;
}

export const ImageUI = ({ slide, index }: iImageUIProps) => {
  return (
    <>
      <img
        src={slide.url}
        alt={slide.title}
        // height={500}
        // width={500}
        // priority={index === 0}
        className={styles.image}
      />
      <div className={styles.info}>
        {!!slide.title && (
          <Htag color="white" size="medium" tag="h2">
            {slide.title}
          </Htag>
        )}
        {!!slide.tags && (
          <ul className={styles.list}>
            {slide.tags.map((tag) => (
              <li className={styles.item} key={tag}>
                <Tag>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
