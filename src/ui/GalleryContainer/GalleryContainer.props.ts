import { ISlide } from '@/types';

export interface IGalleryContainerProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  item1: ISlide;
  item2?: ISlide;
  item3?: ISlide;
  className?: string;
}
