import styles from './Card.module.css'
import Button from '../button/Button'
import { useState } from 'react';

const Card = ({name, author, startDate, endDate, price, duration}) => {

  const [buttonText, setbuttonText] = useState('Выбрать выставку')

  const byTicketCard = () => {
    setbuttonText('Выбрать выставку')
      }

  return (
    <div className={styles['content']}>

      <div className={styles['top']}>
          <div className={styles['name']}>{name}</div>
          <div className={styles['author']}>{author}</div>
          <div className={styles['date']}>
            <span>{startDate}</span>—<span>{endDate}</span>
          </div>
      </div>

      <div className={styles['bottom']}>
        <div className={styles['price']}>от {price} руб. / {duration} мин.</div>
        <Button byTicketCard = {byTicketCard} className={styles['transparent-button']}>{buttonText}</Button>
      </div>  
    
    </div>
  )
}

export default Card
