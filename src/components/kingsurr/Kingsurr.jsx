import styles from './Kingsurr.module.css';
import Button from '../button/Button';

function Kingsurr() {
  return (
    <div className={styles['head']}>
      <div className={styles['announc']}> 
        <div className={styles['main']}>Главная выставка этого года!</div>
        <div className={styles['king']}>Король сюрреализма</div>
        <div className={styles['dali-date']}>
            <span>САЛЬВАДОР ДАЛИ</span>
            <span>10.08.23 — 10.08.24 </span>
        </div> 
        <Button>Купить билет</Button>
      </div>      
    </div>
  )
}

export default Kingsurr;