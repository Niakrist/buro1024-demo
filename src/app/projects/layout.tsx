import { Footer } from '@/components';
import styles from './page.module.css';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
