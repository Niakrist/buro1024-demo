import type { IProject, ISlide } from '@/types';

export const adapterSlider = (projects: IProject[]) => {
  return projects.reduce<ISlide[]>((data, project) => {
    const slide = {
      img: project.img,
      title: project.title,
      tags: project.tags,
    };
    data.push(slide);
    return data;
  }, []);
};
