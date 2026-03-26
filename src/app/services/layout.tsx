import { Footer, Header } from '@/components';
import { NavMenu } from '@/ui';

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header color="black">
        <NavMenu color="black" />
      </Header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
