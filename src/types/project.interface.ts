export interface IProject {
  name: string;
  img: string;
  projectImg: string;
  sliderImg: string[];
  title: string;
  description: string[];
  tags: string[];
  gallery: IGallery[];
  url: string;
}

export interface IGallery {
  size: string;
  img: string;
}
