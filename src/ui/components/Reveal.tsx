"use client";

import classNames from "classnames";
import { type ElementType, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.scss";

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
}

/** Fade/slide-in ao entrar na viewport (equivalente às classes .sx-* da referência) */
export function Reveal({ as: Tag = "div", className, delay = 0, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={classNames(styles.reveal, visible && styles.in, className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
