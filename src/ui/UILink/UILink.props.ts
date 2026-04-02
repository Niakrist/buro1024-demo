export interface IUILinkProps extends React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> {
  children: React.ReactNode;
  href: string;
  color: 'white' | 'black';
  underline?: boolean;
  className?: string;
  size?: 'small' | 'standart';
  type?: 'header' | 'footer';
}
