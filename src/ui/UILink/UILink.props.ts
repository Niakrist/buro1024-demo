export interface IUILinkProps {
  children: React.ReactNode;
  href: string;
  color: 'white' | 'black';
  underline?: boolean;
  className?: string;
  size?: 'small' | 'standart';
}
