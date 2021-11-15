import React from "react";
import classnames from "classnames";
import styles from "./Grid.module.scss";

interface IProps {
  container?: boolean;
  item?: boolean;
  children: React.ReactNode;
}

export const Grid = ({ children, container = false, item = false }: IProps): React.ReactElement => {
  const className = classnames({
    [styles.Grid__container]: container,
    [styles.Grid__item]: item,
  });

  return <div className={className}>{children}</div>;
};
