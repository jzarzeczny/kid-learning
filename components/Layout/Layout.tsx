import React, { FC } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Layout;
