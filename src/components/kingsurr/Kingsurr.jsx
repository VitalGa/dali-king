import styles from './Kingsurr.module.css';
import Button from '../button/Button';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Kingsurr() {

  let buttonText = 'Очень хочу на выставку!'
  const [textButton, setTextButton] = useState(buttonText)

  function byTicket() {
    setTextButton('Купить билет')
  }

  return (<>
  <div className={styles['head']}>
      <div className={styles['announc']}> 
        <div className={styles['main']}>Главная выставка этого года!</div>
        <div className={styles['king']}>Король сюрреализма</div>
        <div className={styles['dali-date']}>
            <span>САЛЬВАДОР ДАЛИ</span>
            <span>10.08.23 — 10.08.24 </span>
        </div> 
        <NavLink to="/payment" >
          <Button byTicket={byTicket}>{textButton}</Button>
        </NavLink>
          
            <div className={styles['marquee']}>
                <Marquee className={styles['text']}>
                  Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;Король сюрреализма&nbsp;&nbsp;&nbsp;
                </Marquee> 
            </div> 
      </div>
    </div>    
    </>
  )
}

export default Kingsurr;