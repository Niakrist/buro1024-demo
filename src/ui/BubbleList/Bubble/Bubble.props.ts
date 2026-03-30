import React from 'react';

export interface IBubbleProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  index: number;
  currentIndex: number;
  onBubbleClick: (index: number) => void;
}
