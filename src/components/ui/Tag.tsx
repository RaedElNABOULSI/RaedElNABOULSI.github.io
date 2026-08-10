import styles from "./Tag.module.css";

export default function Tag({ children }: { children: string }) {
  return <span className={styles.tag}>{children}</span>;
}
