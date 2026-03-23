import cn from 'classnames';
import { IIconsProps } from './Icon.props';
import { IconArchitects } from './icons/IconArchitects';
import { IconArrowDown } from './icons/IconArrowDown';
import { IconArrowLeft } from './icons/IconArrowLeft';
import { IconArrowRight } from './icons/IconArrowRight';
import { IconLogo } from './icons/IconLogo';
import { IconRespace } from './icons/IconRespace';
import styles from './Icon.module.css';

export const Icon = ({ name, className, ...props }: IIconsProps) => {
  const icons = {
    iconLogo: <IconLogo className={cn(styles.icon, className)} {...props} />,
    iconArrowLeft: (
      <IconArrowLeft className={cn(styles.icon, className)} {...props} />
    ),
    iconArrowRight: (
      <IconArrowRight className={cn(styles.icon, className)} {...props} />
    ),
    iconArrowDown: (
      <IconArrowDown className={cn(styles.icon, className)} {...props} />
    ),
    iconRespace: (
      <IconRespace className={cn(styles.icon, className)} {...props} />
    ),
    iconArchitects: (
      <IconArchitects className={cn(styles.icon, className)} {...props} />
    ),
  };

  return icons[name];
};
