import { Footer, Header } from '@/components';
import { NavMenu } from '@/ui';
import styles from './page.module.css';
export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" type="header" />
      </Header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
