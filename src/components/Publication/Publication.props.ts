import { IPublication } from '@/types/publication.interface';

export interface IPublicationProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  publication: IPublication;
  type: 'small' | 'medium' | 'big';
  className?: string;
  buttonName: string;
}
