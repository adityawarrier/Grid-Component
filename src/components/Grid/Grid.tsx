import React from "react";
import classnames from "classnames";
import styles from "./Grid.module.scss";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent = "center" | "space-between" | "flex-start" | "flex-end";
type AlignItems = "center" | "flex-start" | "flex-end";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  
  container?: boolean;
  item?: boolean;
  
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  
  
  spacing?: Spacing;
  
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
}

export const Grid = (props: IProps): React.ReactElement => {
  const {
    children,
    container = false,
    item = false,
    
    justifyContent = "flex-start",
    alignItems = "center",
    
    spacing,
    
    xs,
    sm,
    md,
    lg,
    
    ...rest
  } = props;

  // combined classes
  const className = classnames({
    [styles.Grid__container]: container,
    [styles.Grid__item]: item,
    
    [styles[`Grid__justify-content_${justifyContent}`]]: justifyContent,
    [styles[`Grid__align-items_${alignItems}`]]: alignItems,
    
    [styles[`Grid__spacing_${spacing}`]]: spacing,
    
    [styles[`Grid__xs_${xs}`]]: xs,
    [styles[`Grid__sm_${sm}`]]: sm,
    [styles[`Grid__md_${md}`]]: md,
    [styles[`Grid__lg_${lg}`]]: lg,
  });

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};
