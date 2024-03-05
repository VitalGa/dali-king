import React from 'react';
import styles from './Calendar.module.css';

const Calendar = () => {
  return (
    <>
      <header className={`${styles.clearfix}`}>
        <h1>Calendario <span>A Flexible Calendar Plugin</span></h1>
      </header>
      <section>
        <div className={`${styles.main}`}>
          <div className={`${styles['custom-calendar-wrap']}`}>
            <div id="custom-inner" className={`${styles['custom-inner']}`}>
              <div className={`${styles['custom-header']} ${styles.clearfix}`}>
                <nav>
                  <span id="custom-prev" className={`${styles['custom-prev']}`}></span>
                  <span id="custom-next" className={`${styles['custom-next']}`}></span>
                </nav>
                <h2 id="custom-month" className={`${styles['custom-month']}`}></h2>
                <h3 id="custom-year" className={`${styles['custom-year']}`}></h3>
              </div>
              <div id="calendar" className={`${styles['fc-calendar-container']}`}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;