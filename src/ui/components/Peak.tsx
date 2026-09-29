import styles from "./Peak.module.scss";

/** Divisor "montanha" — assinatura visual entre seção escura e clara */
export function Peak() {
  return (
    <svg className={styles.peak} viewBox="0 0 96 44" aria-hidden="true">
      <path d="M0 44 30 8l14 16 14-16 38 36z" fill="currentColor" />
    </svg>
  );
}
