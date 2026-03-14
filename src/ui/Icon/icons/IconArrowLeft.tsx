import { IIconProps } from '../Icon.props';

export const IconArrowLeft = ({ className, ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 4L9.56957 10.5859C8.81014 11.3636 8.81014 12.6364 9.56957 13.4141L16 20"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
