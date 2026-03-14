import { Button, UILink } from '@/ui';
import styles from './page.module.css';
import { Header, Slider } from '@/components';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Slider />
    </div>
  );
}
