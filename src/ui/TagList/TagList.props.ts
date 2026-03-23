import React from 'react';
export interface ITagListProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> {
  tags: string[];
  color: 'white' | 'black';
  className?: string;
}
