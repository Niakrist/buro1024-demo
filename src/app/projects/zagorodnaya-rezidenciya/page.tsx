import { Container, GalleryContainer, Htag, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import { adapterSliderForProject } from '@/utils';
import { IProject } from '@/types';

export default function ZagorodnayaRezidenciyaPage() {
  const slides = adapterSliderForProject(projects[0]);
  const adapterContent = (project: IProject) => {
    return {
      title: project.title,
      description: project.description,
      tags: project.tags,
    };
  };

  const content = adapterContent(projects[0]);

  const gallery = projects[0].gallery.reduce((arr, item) => {
    arr.push({ img: item });
    return arr;
  }, []);

  return (
    <div className={styles.page}>
      <Header absolute color="white">
        <NavMenu color="white" />
      </Header>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <GalleryContainer vh="vh100" item1={gallery[0]} />
      <GalleryContainer vh="vh100" item1={gallery[1]} />
      <GalleryContainer vh="vh100" item1={gallery[2]} />
    </div>
  );
}
