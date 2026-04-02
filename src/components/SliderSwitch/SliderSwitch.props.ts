import { ISlide } from '@/types';

export interface ISliderSwitchProsp {
  slides: ISlide[];
  type?: 'mobileMain' | 'mobileProjects';
}
