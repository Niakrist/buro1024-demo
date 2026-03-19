import { GalleryContainer, NavMenu } from '@/ui';
import styles from './page.module.css';
import { Content, Header, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';

export default function ChastnyyDomVRoshchinoPage() {
  const slides = adapterSliderForProject(projects[0]);
  const content = adapterContent(projects[0]);
  const gallery = adapterGallery(projects[0]);

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
      <GalleryContainer vh="vh100" mb="small" item1={gallery[0]} />
      <GalleryContainer vh="vh100" mb="small" item1={gallery[1]} />
      <GalleryContainer
        vh="vh100"
        mb="small"
        item1={gallery[2]}
        className={styles.mb63}
      />
    </div>
  );
}
