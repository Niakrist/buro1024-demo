'use client';
import { useMobile } from '@/hooks';
import { SliderMobile } from '../SliderMobile/SliderMobile';
import { Slider } from '../Slider/Slider';
import { ISliderSwitchProsp } from './SliderSwitch.props';

export const SliderSwitch = ({ slides, type }: ISliderSwitchProsp) => {
  const isMobile = useMobile();

  return isMobile ? (
    <SliderMobile slides={slides} duration={7000} type={type} />
  ) : (
    <Slider slides={slides} />
  );
};
