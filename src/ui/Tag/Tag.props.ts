import React from 'react';

export interface ITagProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
> {
  children: React.ReactNode;
}
