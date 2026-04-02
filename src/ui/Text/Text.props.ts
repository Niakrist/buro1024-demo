import React from 'react';

export interface ITextProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> {
  children: React.ReactNode;
  color: 'white' | 'black';
  size: 'small' | 'medium' | 'big' | 'veryBig';
  fw?: 'fw400' | 'fw500' | 'fw700';
  className?: string;
}
