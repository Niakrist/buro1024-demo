import { IIconsProps } from './Icon.props';
import { IconArrowDown } from './icons/IconArrowDown';
import { IconArrowLeft } from './icons/IconArrowLeft';
import { IconArrowRight } from './icons/IconArrowRight';
import { IconLogo } from './icons/IconLogo';

export const Icon = ({ name, className, ...props }: IIconsProps) => {
  const icons = {
    iconLogo: <IconLogo className={className} {...props} />,
    iconArrowLeft: <IconArrowLeft className={className} {...props} />,
    iconArrowRight: <IconArrowRight className={className} {...props} />,
    iconArrowDown: <IconArrowDown className={className} {...props} />,
  };

  return icons[name];
};
