import React, { ReactNode } from "react";
import SideBar from "./side-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="flex gap-5">
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
