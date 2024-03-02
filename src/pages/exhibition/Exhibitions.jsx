import styles from './Exhibitions.module.css'; 
import Card from '../../components/card/Card'

const Exhibitions = () => {

  const data = [
    { 
      name: 'Король сюрреализма',
      date: 'САЛЬВАДОР ДАЛИ  10.08.24—10.08.25',
      price: 'от 400 руб. / 120 мин',
  
    },
    { 
      name: 'VIVA LA VIDA',
      date: 'ФРИДА КАЛО И ДИЕГО РИВЕРА 10.08.25—10.08.25',
      price: 'от 500 руб. / 120 мин',

    },
    {
      name: 'За гранью реальности',
      date: 'РЕНЕ МАГРИТТ 10.08.24—10.08.25',
      price: 'от 700 руб. / 120 мин',

    }
  ]

  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['text']}>
        Онлайн-выставки
      </div>
          <div className={styles['row']}>
            <div className={styles['dali-left']}>

              <Card
                name={data[0].name}
                date={data[0].date}
                price={data[0].price}
              />          
              
            </div>
              <div className={styles['dali-right']}> <span>САЛЬВАДОР<br />ДАЛИ</span></div>
            </div>
          <div className={styles['row']}>
            <div className={styles['kalo-left']}>ФРИДА КАЛО</div>
            <div className={styles['kalo-right']}>

            <Card
                name={data[1].name}
                date={data[1].date}
                price={data[1].price}
              /> 
              
            </div>
          </div>
          <div className={styles['row']}>
            <div className={styles['magrit-left']}>

            <Card
                name={data[2].name}
                date={data[2].date}
                price={data[2].price}
              />

            </div>
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
