import React from "react";
import styles from "./Box.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const Box = ({ children }: IProps): React.ReactElement => {
  return <div className={styles.Box}>{children}</div>;
};
