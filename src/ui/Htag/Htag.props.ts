export interface IHtagProps {
  tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  color: 'white' | 'black';
  size: 'small' | 'medium' | 'big';
  className?: string;
  hidden?: boolean;
}
