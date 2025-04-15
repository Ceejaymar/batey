import { type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  className: string;
  onClick: () => void;
}>;

function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
