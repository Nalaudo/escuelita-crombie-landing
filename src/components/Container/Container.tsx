import { ReactNode } from "react";

const Container = ({
  id,
  children,
  className,
  childClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  childClassName?: string;
}) => {
  return (
    <div id={id} className={`w-full ${className ? className : ""}`}>
      <div className={`container ${childClassName ? childClassName : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;
