import styles from './Card.module.css'
import Button from '../button/Button'

const Card = ({name, date, price}) => {
  return (    
    <div className={styles['content']}>
            <div className={styles['top']}>
              <div className={styles['name']}>{name}</div>
              <div className={styles['date']}>{date}</div>
            </div>
            <div className={styles['bottom']}>
              <div className={styles['price']}>{price}</div>
              <Button >Выбрать выставку</Button>
            </div>
    </div>
  )
}

export default Card
