import { ISlide } from '@/types';

export interface ISliderMobileProps {
  slides: ISlide[];
  duration?: number;
  onAllSlidesViewed?: () => void;
  onRestart?: () => void;
  children?: (slide: ISlide, index: number) => React.ReactNode;
  type?: 'mobileMain' | 'mobileProjects';
}
