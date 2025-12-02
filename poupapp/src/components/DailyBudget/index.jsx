import styles from "./dailybudget.module.css";

const formatter = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })

export const DailyBudget = ({ value }) => {
  return  (
    <p className={styles.dailybudget}>
        {formatter.format(value)}
    </p>
  )
}
