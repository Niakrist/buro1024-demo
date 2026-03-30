import { IProject } from '@/types';

export interface IGalleryContainerProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  item1: IProject;
  item2?: IProject;
  item3?: IProject;
  className?: string;
  mb?: 'small' | 'medium' | 'big';
  vh?: 'vh100';
}
