import { IProject } from '@/types';

export const adapterGallery = (project: IProject) => {
  return project.gallery.reduce<{ img: string }[]>((arr, item) => {
    arr.push({ img: item });
    return arr;
  }, []);
};
