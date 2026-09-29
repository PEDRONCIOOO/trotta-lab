import classNames from "classnames";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "secondary";
type Size = "s" | "m" | "l";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "l",
  href,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = classNames(styles.button, styles[variant], styles[size], className);
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}
