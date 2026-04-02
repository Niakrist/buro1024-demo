import Link from 'next/link';
import cn from 'classnames';
import styles from './UILink.module.css';
import { IUILinkProps } from './UILink.props';

export const UILink = ({
  href,
  color,
  underline = false,
  className,
  children,
  type,
  size = 'standart',
  ...props
}: IUILinkProps) => {
  return (
    <Link
      href={`/${href}`}
      className={cn(
        styles.link,
        {
          [styles.colorWhite]: color === 'white',
          [styles.colorBlack]: color === 'black',
          [styles.underline]: underline === true,
          [styles.small]: size === 'small',
          [styles.header]: type === 'header',
          [styles.footer]: type === 'footer',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
