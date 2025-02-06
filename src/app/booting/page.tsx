import BootingLog from "@/components/booting-log";

import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
			<BootingLog />
    </main>
  );
}
