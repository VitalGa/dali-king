import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import cn from 'classnames'

function Header() {
  return (
    <div className={styles['header']}>
        <div className={styles['logo']}>
          <img src="/bytesize_clock.svg" alt="Логотип часы" />
          <div className={styles['text-museum']}>Музей <br /> Сюрреализма</div>
        </div>
        <div className={styles['menu']}>
          <NavLink to="/" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Главная</NavLink>
          <NavLink to="/exhibitions" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Выставки</NavLink>
          <NavLink to="/articles" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>Блог</NavLink>
          <NavLink to="/about" className={({isActive}) => cn(styles['link'], {
            [styles.active]: isActive
          })}>О музее</NavLink>
        </div>
        <div className={styles['search-block']}>
          <span className={styles['text']}>En</span>
          <img src="/search.svg" alt="Иконка поиска" />
        </div>
    </div>
  )
}

export default Header;