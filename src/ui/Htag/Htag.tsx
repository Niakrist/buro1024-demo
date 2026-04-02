import cn from 'classnames';

import styles from './Htag.module.css';
import { IHtagProps } from './Htag.props';

export const Htag = ({
  tag,
  children,
  color,
  size,
  className,
  hidden = false,
  ...props
}: IHtagProps) => {
  switch (tag) {
    case 'h1':
      return (
        <h1
          className={cn(
            styles.title,
            {
              [styles.whiteColor]: color === 'white',
              [styles.blaclColor]: color === 'black',
              [styles.small]: size === 'small',
              [styles.medium]: size === 'medium',
              [styles.big]: size === 'big',
              [styles.hidden]: hidden === true,
            },
            className,
          )}
          {...props}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn(
            styles.title,
            {
              [styles.whiteColor]: color === 'white',
              [styles.blaclColor]: color === 'black',
              [styles.small]: size === 'small',
              [styles.medium]: size === 'medium',
              [styles.big]: size === 'big',
              [styles.hidden]: hidden === true,
            },
            className,
          )}
          {...props}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(
            styles.title,
            {
              [styles.whiteColor]: color === 'white',
              [styles.blaclColor]: color === 'black',
              [styles.small]: size === 'small',
              [styles.medium]: size === 'medium',
              [styles.big]: size === 'big',
              [styles.hidden]: hidden === true,
            },
            className,
          )}
          {...props}
        >
          {children}
        </h3>
      );
  }

  return <div>Htag</div>;
};
