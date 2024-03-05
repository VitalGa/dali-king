import styles from './Card.module.css'
import Button from '../button/Button'
import { useState } from 'react';

const Card = ({name, date, price}) => {

  const [buttonText, setbuttonText] = useState('Хочу на выставку!')

  const byTicketCard = () => {
    setbuttonText('Купить билет')
      }

  return (
    <div className={styles['content']}>
            <div className={styles['top']}>
              <div className={styles['name']}>{name}</div>
              <div className={styles['date']}>{date}</div>
            </div>
            <div className={styles['bottom']}>
              <div className={styles['price']}>{price}</div>
              <Button byTicketCard = {byTicketCard} className={styles['transparent-button']}>{buttonText}</Button>
            </div>
    </div>
  )
}

export default Card
