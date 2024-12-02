import styles from "./app.module.css";
import { ScratchWorkspace } from "./components/workspace";
import { ScratchHeader } from "./components/header";

export function App() {
  return (
    <main className={styles["main"]}>
      <ScratchHeader />
      <ScratchWorkspace />
    </main>
  );
}
