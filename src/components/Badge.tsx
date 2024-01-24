import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  isSelected?: boolean;
  children: ReactNode;
}

const Badge = ({ children, isSelected }: Props) => {
  return (
    <div
      className={classNames({
        "cursor-pointer px-3 py-2 rounded-md bg-[#fff] text-base font-semibold":
          true,
        "border border-[#8051FF]": isSelected,
      })}
    >
      {children}
    </div>
  );
};

export default Badge;
