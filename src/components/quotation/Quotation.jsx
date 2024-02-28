import styles from './Quotation.module.css'

const Quotation = () => {
  return (  
      <div className={styles['wrapper']}> 
        <img src="/clock-quotation.png" className={styles['img']}alt="Картина Дали" />       
        <div className={styles['hrContainer']}>
          <hr className={styles['hr']} />
        </div>
          <span className={styles['text']}>Разница между сюрреалистами и мной <br />заключается в том,<br />что сюрреализм — это я.</span>
          <div className={styles['hrContainer']}>
            <hr className={styles['hr']} />
          </div>
          <span className={styles['text-dali']}>Сальвадор Дали</span>
      </div>
  );
}

export default Quotation

