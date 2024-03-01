import styles from './Exhibitions.module.css'; 

const Exhibitions = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['text']}>
        Онлайн-выставки
      </div>
          <div className={styles['row']}>
            <div className={styles['dali-left']}></div>
            <div className={styles['dali-right']}> <span>САЛЬВАДОР<br />ДАЛИ</span></div>
          </div>
          <div className={styles['row']}>
            <div className={styles['kalo-left']}>ФРИДА КАЛО</div>
            <div className={styles['kalo-right']}></div>
          </div>
          <div className={styles['row']}>
            <div className={styles['magrit-left']}></div>
            <div className={styles['magrit-right']}>РЕНЕ МАГРИТТ</div>
          </div>
      </div>
      <div className={styles['all']}>
        <img src="/arrow.png" alt="Переход на все выставки" />
        <div className={styles['text-bottom']}><span>Посмотреть все выставки</span></div>
      </div>
      
    </div>
  )
}

export default Exhibitions;
