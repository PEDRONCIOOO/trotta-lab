import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import styles from "./SectionHead.module.scss";

interface SectionHeadProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
}

export function SectionHead({ eyebrow, title, description, action }: SectionHeadProps) {
  return (
    <Reveal className={styles.head}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </Reveal>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={[styles.eyebrow, className].filter(Boolean).join(" ")}>{children}</span>;
}
