import styles from './PaymentTop.module.css'

const PaymentTop = () => {
  return (

  <div className={styles['wrapper']}>

        <div className={styles['date']}> 
          <div className={styles['bread-crumbs']}>
            <span>Главная</span>
            <span>—</span>
            <span>Выставки</span>
            <span>—</span>
            <span>Король сюрреализма</span>
            <span>—</span>
            <span className={styles['active-span']}>Оплата билета</span>
          </div>
          <div className={styles['pay-ticket']}>Оплата билета</div>          
        </div>

    
        <div className={styles['pay-tick']}> 
            <img src="/2-head.png" alt="" />
            <div className={styles['right-part']}>
              <div className={styles['right-top']}>
                <div className={styles['exhibition']}>Король сюрреализма </div>
                <div className={styles['author']}>Сальвадор Дали</div>
              </div>
              <div className={styles['right-bottom']}>
                <div className={styles['date']}>Дата: 10 августа 2022 г., Сб.
                  <img src="/icon-карандаш.png" alt="Иконка исправления" />
                </div>
                <div className={styles['time']}>Время: 12:00
                  <img src="/icon-карандаш.png" alt="Иконка исправления" /> 
                </div>
                <div className={styles['quantity']}>Количество:
                  <div className={styles['minus-plus']}>
                    <img src="/minus.svg" alt="" />
                    <span>2</span>
                    <img src="/plus.svg" alt="" />
                  </div>
                </div>
                <div className={styles['pay']}>К оплате: <span>1000 руб.</span></div>
              </div>
            </div>
        </div> 


    </div>
  
  )
}

export default PaymentTop
