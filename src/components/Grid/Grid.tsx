import React from "react";
import classnames from "classnames";
import styles from "./Grid.module.scss";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
interface IProps {
  container?: boolean;
  item?: boolean;
  children: React.ReactNode;
  cols?: Cols;
  spacing?: Spacing;
}

export const Grid = ({
  children,
  container = false,
  item = false,
  cols,
  spacing,
}: IProps): React.ReactElement => {
  const className = classnames({
    [styles.Grid__container]: container,
    [styles.Grid__item]: item,
    [styles[`Grid__cols_${cols}`]]: cols,
    [styles[`Grid__spacing_${spacing}`]]: spacing,
  });

  return <div className={className}>{children}</div>;
};
