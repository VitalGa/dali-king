import styles from './Card.module.css'
import Button from '../button/Button'
import { useState } from 'react';

const Card = ({name, date, price}) => {

  const [text, setText] = useState('Хочу на выставку!')

  const clicked = () => {
    setText('Купить билет')
      }

  return (
    <div className={styles['content']}>
            <div className={styles['top']}>
              <div className={styles['name']}>{name}</div>
              <div className={styles['date']}>{date}</div>
            </div>
            <div className={styles['bottom']}>
              <div className={styles['price']}>{price}</div>
              <Button clicked = {clicked} className={styles['transparent-button']}>{text}</Button>
            </div>
    </div>
  )
}

export default Card
