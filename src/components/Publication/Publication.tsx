import { IPublication } from '@/types/publication.interface';
import React from 'react';
import styles from './Publication.module.css';
import { Button, Htag, Text } from '@/ui';

export interface IPublicationProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  publication: IPublication;
  type: 'small' | 'medium' | 'big';
}
export const Publication = ({ publication, type }: IPublicationProps) => {
  switch (type) {
    case 'big':
      return (
        <div className={styles[type]}>
          <img src={publication.img} alt={publication.title} />
          <div className={styles.content}>
            <Htag color="white" tag="h2" size="medium" className={styles.mb16}>
              {publication.title}
            </Htag>
            <Text size="medium" color="white" className={styles.mb32}>
              {publication.description}
            </Text>
            <Button size="small" bg="black" color="white">
              Читать полностью
            </Button>
          </div>
        </div>
      );
  }

  return <div>Publication</div>;
};
