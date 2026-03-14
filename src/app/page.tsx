import { Button } from '@/ui';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Button bg="black" color="white" size="big">
        Recreate
      </Button>
      <Button bg="white" color="black" size="small">
        Recreate
      </Button>
      <Button bg="white" color="black" size="full" fontWeight="fv500">
        Recreate
      </Button>
    </div>
  );
}
