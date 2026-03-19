import { IProject } from '@/types';

export const adapterContent = (project: IProject) => {
  return {
    title: project.title,
    description: project.description,
    tags: project.tags,
  };
};
