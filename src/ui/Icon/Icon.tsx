import { IIconsProps } from './Icon.props';
import { IconArrowLeft } from './icons/IconArrowLeft';
import { IconArrowRight } from './icons/IconArrowRight';
import { IconLogo } from './icons/IconLogo';

export const Icon = ({ name, className, ...props }: IIconsProps) => {
  const icons = {
    iconLogo: <IconLogo className={className} {...props} />,
    IconArrowLeft: <IconArrowLeft className={className} {...props} />,
    IconArrowRight: <IconArrowRight className={className} {...props} />,
  };

  return icons[name];
};
