import { IPublication } from '@/types/publication.interface';
import React from 'react';
import styles from './Publication.module.css';
import { Button, Htag, Text } from '@/ui';
import cn from 'classnames';

export interface IPublicationProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  publication: IPublication;
  type: 'small' | 'medium' | 'big';
  className?: string;
  buttonName: string;
}
export const Publication = ({
  publication,
  type,
  className,
  buttonName,
}: IPublicationProps) => {
  switch (type) {
    case 'big':
      return (
        <div className={cn(styles.wrapper, styles.mb120)}>
          <img
            className={styles.img}
            src={publication.img}
            alt={publication.title}
          />
          <div className={styles.content}>
            <Htag color="white" tag="h2" size="medium" className={styles.mb16}>
              {publication.title}
            </Htag>
            <Text size="medium" color="white" className={styles.mb32}>
              {publication.description}
            </Text>
            <Button
              size="small"
              bg="black"
              color="white"
              href={`publications/${publication.url}`}
            >
              {buttonName}
            </Button>
          </div>
        </div>
      );
    case 'medium':
      return (
        <div className={cn(styles.wrapper, className)}>
          <img
            className={cn(styles.img, styles.mb32)}
            src={publication.img}
            alt={publication.title}
          />
          <Htag color="black" tag="h2" size="medium" className={styles.mb16}>
            {publication.title}
          </Htag>
          <Text size="medium" color="black" className={styles.mb32}>
            {publication.description}
          </Text>
          <Button
            size="small"
            bg="black"
            color="white"
            href={`publications/${publication.url}`}
          >
            {buttonName}
          </Button>
        </div>
      );
    case 'small': {
      return (
        <div className={cn(styles.wrapper, className)}>
          <img
            className={cn(styles.imgSmall, styles.mb32)}
            src={publication.img}
            alt={publication.title}
          />
          <Htag
            color="black"
            tag="h2"
            size="medium"
            className={cn(styles.mb16, styles.titleSmall)}
          >
            {publication.title}
          </Htag>
          <Text
            size="medium"
            color="black"
            className={cn(styles.mb32, styles.testSmall)}
          >
            {publication.description}
          </Text>
          <Button
            size="small"
            bg="black"
            color="white"
            href={`publications/${publication.url}`}
          >
            {buttonName}
          </Button>
        </div>
      );
    }
  }

  return <div>Publication</div>;
};
