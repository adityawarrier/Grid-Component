import React from "react";
import styles from "./GridRuler.module.scss";
import classnames from "classnames";

type Spacing = "sm" | "md" | "lg";
interface IProps {
  spacing: Spacing;
}

export const GridRuler = ({ spacing }: IProps): React.ReactElement => {
  const classNames = classnames(styles.GridRuler, {
    [styles[`GridRuler__spacing_${spacing}`]]: spacing,
  });

  return (
    <div className={classNames}>
      {Array.from({ length: 12 }, (_, i) => i + 1).map((number) => (
        <div className={styles.GridRuler__item} key={number} />
      ))}
    </div>
  );
};
