export interface IIconsProps extends React.SVGProps<SVGSVGElement> {
  name:
    | 'iconLogo'
    | 'iconArrowLeft'
    | 'iconArrowRight'
    | 'iconArrowDown'
    | 'iconRespace'
    | 'iconArchitects';
  className?: string;
}

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
