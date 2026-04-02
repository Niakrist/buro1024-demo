'use client';
import styles from './Publication.module.css';
import { Button, Htag, Text } from '@/ui';
import cn from 'classnames';
import { useMobile } from '@/hooks';
import { IPublicationProps } from './Publication.props';

export const Publication = ({
  publication,
  type,
  className,
  buttonName,
}: IPublicationProps) => {
  const isMobile = useMobile();

  switch (type) {
    case 'big':
      return (
        <div className={cn(styles.wrapper, styles.mb120)}>
          <img
            className={cn(styles.img, styles.bigImg)}
            src={publication.img}
            alt={publication.title}
          />
          <div className={styles.content}>
            <Htag
              color={isMobile ? 'black' : 'white'}
              tag="h2"
              size="medium"
              className={styles.mb16}
            >
              {publication.title}
            </Htag>
            <Text
              size="medium"
              color={isMobile ? 'black' : 'white'}
              className={styles.textBig}
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
        </div>
      );
    case 'medium':
      return (
        <div className={cn(styles.wrapper, className)}>
          <img
            className={cn(styles.img, styles.mb32, styles.mediumImg)}
            src={publication.img}
            alt={publication.title}
          />
          <Htag color="black" tag="h2" size="medium" className={styles.mb16}>
            {publication.title}
          </Htag>
          <Text size="medium" color="black" className={styles.textMedium}>
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
          <Text size="medium" color="black" className={styles.textSmall}>
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
