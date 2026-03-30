import { IProject } from '@/types';
import { IGallery } from '@/types/project.interface';

export const adapterGallery = (project: IProject) => {
  return project.gallery.reduce<IGallery[]>((arr, item) => {
    arr.push({ size: item.size, img: item.img });
    return arr;
  }, []);
};
