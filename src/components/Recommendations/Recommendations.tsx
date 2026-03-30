import styles from './Recommendations.module.css';
import { IProject } from '@/types';
import Link from 'next/link';
import { ImageUI } from '@/ui';

interface IRecommendationsProps {
  projects: IProject[];
}

export const Recommendations = ({ projects }: IRecommendationsProps) => {
  const fiveProjects = projects.slice(0, 5);
  return (
    <ul className={styles.wrapper}>
      {fiveProjects.map((project) => (
        <li className={styles.item} key={project.url}>
          <Link href={`${project.url}`}>
            <ImageUI
              img={project.img}
              tags={project.tags}
              title={project.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};
