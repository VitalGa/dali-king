import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

const Footer = () => {
  return (

    <div className={styles['wrapper']}>
      <img src="/footer-heads.png" className={styles['imgFooter']} alt="Картина про две головы" />
      <div className={styles['contacts']}>
        <img src="/bytesize_clock.svg" alt="Логотип часы" />
        <span className={styles['phone']}>+7 (495) 123-45-67</span>
        <span className={styles['email']}>info@museumsur.com</span>
      </div>
      <div className={styles['links']}>
          <NavLink to="/" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Главная</NavLink>
          <NavLink to="/exhibitions" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Выставки</NavLink>
          <NavLink to="/articles" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Статьи</NavLink>
          <NavLink to="/about" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>О музее</NavLink>
      </div>
      <div className={styles['rules']}>
        <span>Правила онлайн — посещения</span>  
        <span>Сотрудничество</span>
        <span>Вакансии</span>         
      </div>
      <div className={styles['network']}>
        <span>YouTube</span>
        <span>Facebook</span>
        <span>Telegram</span>
        <span>Вконтакте</span>
      </div>      
    </div>    
  )
}

export default Footer
