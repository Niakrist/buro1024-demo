import { IIconsProps } from './Icon.props';
import { IconLogo } from './icons/IconLogo';

export const Icon = ({ name, className }: IIconsProps) => {
  const icons = {
    iconLogo: <IconLogo className={className} />,
  };

  return icons[name];
};
