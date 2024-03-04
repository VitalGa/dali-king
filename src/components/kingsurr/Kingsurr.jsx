import styles from './Kingsurr.module.css';
import Button from '../button/Button';
import Marquee from "react-fast-marquee";


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
        <Button >Купить билет</Button>  
            <div className={styles['marquee']}>
                <Marquee className={styles['text']}>
                  Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;
                </Marquee> 
            </div> 
      </div>
    </div>
  )
}

export default Kingsurr;