import Button from '../../components/button/Button';
import styles from './Exhibitions.module.css'; 

const Exhibitions = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['container']}>
        <div className={styles['text']}>
        Онлайн-выставки
      </div>
          <div className={styles['row']}>
            <div className={styles['dali-left']}>
              <div className={styles['content']}>
                <div className={styles['top']}>
                  <div className={styles['name']}>Король <br /> сюрреализма</div>
                  <div className={styles['date']}>САЛЬВАДОР ДАЛИ <br /> 10.08.24—10.08.25</div>
                </div>
                <div className={styles['bottom']}>
                  <div className={styles['price']}>от 400 руб. / 120 мин</div>
                  <Button >Выбрать выставку</Button>
                </div>
              </div>
              
            </div>
            <div className={styles['dali-right']}> <span>САЛЬВАДОР<br />ДАЛИ</span></div>
          </div>
          <div className={styles['row']}>
            <div className={styles['kalo-left']}>ФРИДА КАЛО</div>
            <div className={styles['kalo-right']}>
            <div className={styles['content']}>
                <div className={styles['top']}>
                  <div className={styles['name']}>VIVA LA VIDA</div>
                  <div className={styles['date']}>ФРИДА КАЛО  И <br /> ДИЕГО РИВЕРА  <br /> 10.08.25—10.08.25</div>
                </div>
                <div className={styles['bottom']}>
                  <div className={styles['price']}>от 400 руб. / 120 мин</div>
                  <Button >Выбрать выставку</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['row']}>
            <div className={styles['magrit-left']}>
            <div className={styles['content']}>
                <div className={styles['top']}>
                  <div className={styles['name']}>За гранью <br />реальности</div>
                  <div className={styles['date']}>РЕНЕ МАГРИТТ <br /> 10.08.24—10.08.25</div>
                </div>
                <div className={styles['bottom']}>
                  <div className={styles['price']}>от 400 руб. / 120 мин</div>
                  <Button >Выбрать выставку</Button>
                </div>
              </div>
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
