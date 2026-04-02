'use client';
import { useMobile } from '@/hooks';
import { SliderMobile } from '../SliderMobile/SliderMobile';
import { Slider } from '../Slider/Slider';
import { ISlide } from '@/types';

interface ISliderSwitchProsp {
  slides: ISlide[];
}

export const SliderSwitch = ({ slides }: ISliderSwitchProsp) => {
  const isMobile = useMobile();

  return isMobile ? (
    <SliderMobile slides={slides} duration={7000} />
  ) : (
    <Slider slides={slides} />
  );
};
