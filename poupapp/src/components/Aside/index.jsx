import styles from "./Aside.module.css";
import logo from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <img src={logo} alt="logo do Poupapp" />
      <footer className={styles.footer}>Desenvolvido Por Vinicius Bezerra, Curso Alura: React + Tailwind</footer>
    </aside>
  );
};
