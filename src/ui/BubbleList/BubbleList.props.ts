import React from 'react';
import { ISlide } from '@/types';

export interface IBubbleListProps extends React.DetailedHTMLProps<
  React.LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> {
  items: ISlide[];
  currentIndex: number;
  onBubbleClick: (index: number) => void;
}
