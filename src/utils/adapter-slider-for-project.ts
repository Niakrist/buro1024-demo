import { IProject, ISlide } from '@/types';

export const adapterSliderForProject = (project: IProject) => {
  return project.sliderImg.reduce<ISlide[]>((data, item) => {
    const slide = { img: item };
    data.push(slide);
    return data;
  }, []);
};
