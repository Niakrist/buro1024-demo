export interface IButtonProps extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  color: 'black' | 'white';
  bg: 'black' | 'white';
  size: 'small' | 'big' | 'full';
  children: React.ReactNode;
  fontWeight?: 'fv400' | 'fv500';
  className?: string;
}
