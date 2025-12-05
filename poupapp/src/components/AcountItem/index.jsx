import { IconBank } from '../icons'
import styles from './acountitem.module.css'

export const Acountitem = ({ item }) => {
    const formatter = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })

    
    return (
      <div className={styles.transaction}>
        <div className={styles.details_bank}>
                        <IconBank />
                        <p>{item.bank}</p>
                    </div>
                    <div className={styles.details_movement}>
                        <p>Saldo</p>
                        <p>{formatter.format(item.balance)}</p>
                    </div>
      </div>  
    )
}