import React from 'react';
import { IProject } from '@/types';

export interface IImgContaineProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  item1: IProject;
  item2?: IProject;
  item3?: IProject;
}
