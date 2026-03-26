import React from 'react';

export interface IHeaderProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLHeadElement
> {
  children: React.ReactNode;
  absolute?: boolean;
  color: 'white' | 'black';
  className?: string;
  blackTheme?: boolean;
}
