export interface IContainerProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  children: React.ReactNode;
  className?: string;
  flex?: boolean;
  relative?: boolean;
  align?: 'center';
}
