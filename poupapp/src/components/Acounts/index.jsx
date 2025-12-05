import { Acountitem } from "../AcountItem";
import { Button } from "../Button";
import styles from './acounts.module.css'
import {  IconWallet } from '../icons'


export const Acounts = () => {
  const contas = [
    { bank: "Anybank", balance: 1200 },
    { bank: "Bytebank", balance: 800 },
    { bank: "Switch Bank", balance: 1800 },
  ];

  return (
    <>
      <ul className={styles.list}>
        {contas.map((AcountItem, index) => {
          return (
            <li key={index} className={styles.item}>
              <Acountitem item={AcountItem} />
            </li>
          );
        })}
      </ul>
      <div className={styles.actions}></div>

      <Button>
      <IconWallet />
        Adicionar Conta
      </Button>
    </>
  );
};
