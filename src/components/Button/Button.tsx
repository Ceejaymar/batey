import { type FC, type PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  className: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
