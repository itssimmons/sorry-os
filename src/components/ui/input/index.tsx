import styles from "./index.module.css";

export default function Input(props: { name: string; type: string }) {
  return <input className={styles.input} {...props} />;
}