import { IIconProps } from '../Icon.props';

export const IconArrowRight = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      className={className}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 20L15.4304 13.4141C16.1899 12.6364 16.1899 11.3636 15.4304 10.5859L9 4"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
