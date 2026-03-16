export const adapterSliderForProject = (project: IProject) => {
  return project.gallery.reduce<ISlide[]>((data, item) => {
    const slide = { img: item };
    data.push(slide);
    return data;
  }, []);
};
