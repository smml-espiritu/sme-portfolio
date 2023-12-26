import { ReactNode } from "react";

interface TypographyH2Props {
  className?: string;
  children: ReactNode;
}

export const H1: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <h2
      className={`text-white text-lg md:text-3xl md:font-semibold ${className}`}
    >
      {children}
    </h2>
  );
};
