export interface ILineProps {
  index: number;
  currentIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  duration?: number;
  onAnimationComplete?: () => void;
}
