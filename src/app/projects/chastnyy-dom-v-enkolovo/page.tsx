import { Container, Htag, ImgContainer, NavMenu } from '@/ui';
import { Content, Header, Recommendations, Slider } from '@/components';
import { projects } from '@/data';
import {
  adapterContent,
  adapterGallery,
  adapterSliderForProject,
} from '@/utils';
import styles from '../page.module.css';
import cn from 'classnames';

export default function ChastnyyDomVEnkolovoPage() {
  const slides = adapterSliderForProject(projects[7]);
  const content = adapterContent(projects[7]);
  const gallery = adapterGallery(projects[7]);

  return (
    <>
      <Header absolute color="white">
        <NavMenu color="white" type="header" />
      </Header>
      <Slider slides={slides} />
      <Content
        title={content.title}
        description={content.description}
        tags={content.tags}
      />
      <Container>
        <ImgContainer item1={gallery[0]} item2={gallery[1]} />
        <ImgContainer
          item1={gallery[2]}
          item2={gallery[3]}
          item3={gallery[4]}
        />
        <ImgContainer item1={gallery[5]} item2={gallery[6]} />
        <ImgContainer item1={gallery[7]} item2={gallery[8]} />
        <ImgContainer item1={gallery[9]} />
        <ImgContainer item1={gallery[12]} />
        <ImgContainer item1={gallery[10]} item2={gallery[11]} />
      </Container>
      <Container>
        <Htag
          color="black"
          size="big"
          tag="h2"
          className={cn(styles.mb40, styles.mt160)}
        >
          Другие проекты
        </Htag>
        <Recommendations projects={projects} />
      </Container>
    </>
  );
}
