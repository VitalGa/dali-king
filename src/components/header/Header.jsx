import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles['header']}>
        <div className={styles['logo']}>
          <img src="/bytesize_clock.svg" alt="Логотип часы" />
          <div className={styles['text-museum']}>Музей <br /> Сюрреализма</div>
        </div>
        <div className={styles['menu']}>
          <a href="">Главная</a>
          <a href="">Выставки</a>
          <a href="">Блог</a>
          <a href="">О музее</a>
        </div>
        <div className={styles['search-block']}>
          <span className={styles['text']}>En</span>
          <img src="/search.svg" alt="Иконка поиска" />
        </div>
    </div>
  )
}

export default Header;