import React, { ReactNode } from "react";

interface TypographyH2Props {
  className?: string;
  children: ReactNode;
}

export const ToolsCard: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`border border-[#737171] p-2 rounded-[8px] ${className}`}>
      {children}
    </div>
  );
};

export const Card1: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`border border-[#737171] bg-black w-full max-w-[249px] h-[150px] md:h-[220px] rounded-[8px] ${className}`}
    >
      {children}
    </div>
  );
};

export const Card2: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`border border-[#737171] bg-black w-full max-w-[517px] lg:h-[458px] rounded-[8px] ${className}`}
    >
      {children}
    </div>
  );
};

export const RootWrapper: React.FC<TypographyH2Props> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`lg:max-w-[1075px] px-5 md:pl-0 min-h-screen pb-10 sm:pt-10 text-white ${className}`}
    >
      {children}
    </div>
  );
};
