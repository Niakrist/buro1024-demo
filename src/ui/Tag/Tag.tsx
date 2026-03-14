import { ITagProps } from './Tag.props';

export const Tag = ({ children, ...props }: ITagProps) => {
  return <span {...props}>{children}</span>;
};
