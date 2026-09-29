import classNames from "classnames";
import type { ReactNode } from "react";
import styles from "./Chip.module.scss";

interface ChipProps {
  variant?: "default" | "lamp" | "dark";
  className?: string;
  children: ReactNode;
}

export function Chip({ variant = "default", className, children }: ChipProps) {
  return <span className={classNames(styles.chip, styles[variant], className)}>{children}</span>;
}
