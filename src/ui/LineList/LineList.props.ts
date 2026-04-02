import { ISlide } from '@/types';

export interface ILineListProps {
  items: ISlide[];
  currentIndex: number;
  duration?: number;
  onSlideComplete?: (index: number) => void;
  completedSlides?: Set<number>;
}
