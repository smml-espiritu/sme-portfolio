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
      className={` text-white font-bold sm:font-extrabold text-3xl sm:text-4xl tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
};

export const H2: React.FC<TypographyH2Props> = ({
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

export const H3: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <h2
      className={`text-white text-2xl md:text-5xl md:font-semibold ${className}`}
    >
      {children}
    </h2>
  );
};

export const SubH: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <h2 className={` text-white text-sm font-medium ${className}`}>
      {children}
    </h2>
  );
};
