import styles from './Exhibitions.module.css'; 
import Card from '../../components/card/Card'

const Exhibitions = () => {

  const data = [
    { 
      name: 'Король сюрреализма',
      author: 'САЛЬВАДОР ДАЛИ',
      author2: ['САЛЬВАДОР', 'ДАЛИ'],
      startDate: '10.08.23',
      endDate: '10.08.23',
      price: 400,
      duration: 100,
      styleClass: 'card1',  
    },
    { 
      name: 'VIVA LA VIDA',
      author: 'ФРИДА КАЛО И ДИЕГО РИВЕРА',
      author2: ['ФРИДА КАЛО', ],
      startDate: '11.08.23',
      endDate: '15.08.23',
      price: 400,
      duration: 100,
      styleClass: 'card2',
    },
    {
      name: 'За гранью реальности',
      author: 'РЕНЕ МАГРИТТ',
      author2: ['РЕНЕ МАГРИТТ', ],
      startDate: '15.08.23',
      endDate: '17.08.23',
      price: 700,
      duration: 150, 
      styleClass: 'card3',
    }
  ]

  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['text']}>
        Онлайн-выставки
      </div>
      {
          data.map((item, index) => (
            index % 2 === 0 ? (
              <div key={index} className={styles['row']}>
                <div className={styles['dali-left']}>

                  <Card
                    name={item.name}
                    author={item.author}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    price={item.price}
                    duration={item.duration}
                  />

                </div>
                <div className={styles['dali-right']}>
                <span>{item.author2[0]}<br />{item.author2[1]}</span>
                </div>
              </div>
            ) : (
              <div key={index} className={styles['row']}>
                <div className={styles['dali-right']}>
                  <span>{item.author2[0]}<br />{item.author2[1]}</span>
                </div>
                <div className={styles['dali-left']}>

                  <Card
                    name={item.name}
                    author={item.author}            
                    startDate={item.startDate}
                    endDate={item.endDate}
                    price={item.price}
                    duration={item.duration}
                  />

                </div>
              </div>
            )
          ))
      }

      </div>
          <div className={styles['all']}>
            <img src="/arrow.png" alt="Переход на все выставки" />
            <div className={styles['text-bottom']}><span>Посмотреть все выставки</span></div>
          </div>
      </div>
  )
}

export default Exhibitions;
