import React from 'react';
export interface IContentProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  title: string;
  description: string[];
  tags: string[];
}
