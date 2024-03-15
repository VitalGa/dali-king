import Radio from '../radio/Radio';
import styles from './PaymentTop.module.css'
import { useState } from 'react';

const PaymentTop = () => {
  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
    console.log(selectedOption)


    
      const [cardNumber, setCardNumber] = useState('');
      const [expirationDate, setExpirationDate] = useState('');
      const [cvv, setCVV] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, such as validation or API calls
        console.log('Submitted:', cardNumber, expirationDate, cvv);
      };


  return (

  <div className={styles['wrapper']}>

        <div className={styles['date']}> 
          <div className={styles['bread-crumbs']}>
            <span>Главная</span>
            <span>—</span>
            <span>Выставки</span>
            <span>—</span>
            <span>Король сюрреализма</span>
            <span>—</span>
            <span className={styles['active-span']}>Оплата билета</span>
          </div>
          <div className={styles['pay-ticket']}>Оплата билета</div>          
        </div>
    
        <div className={styles['pay-tick']}> 
            <img src="/2-head.png" alt="" />
            <div className={styles['right-part']}>
              <div className={styles['right-top']}>
                <div className={styles['exhibition']}>Король сюрреализма </div>
                <div className={styles['author']}>Сальвадор Дали</div>
              </div>
              <div className={styles['right-bottom']}>
                <div className={styles['date']}>Дата: 10 августа 2022 г., Сб.
                  <img src="/icon-карандаш3.svg" alt="Иконка исправления" />
                </div>
                <div className={styles['time']}>Время: 12:00
                  <img src="/icon-карандаш3.svg" alt="Иконка исправления" /> 
                </div>
                <div className={styles['quantity']}>Количество:
                  <div className={styles['minus-plus']}>
                    <img src="/minus.svg" alt="" />
                    <span>2</span>
                    <img src="/plus.svg" alt="" />
                  </div>
                </div>
                <div className={styles['pay']}>К оплате: <span>1000 руб.</span></div>
              </div>
            </div>
        </div> 

        <form>
          <input type="text" placeholder='Фамилия' />
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='Отчество'/>          
        </form>

        <div className={styles['sent']}>Куда отправить ссылку-приглашение на онлайн-выставку?</div>




      <Radio/>
      <div className={styles['radio-top']}>
        <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        E-mail
        </label>
        <br />
      
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Telegram
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          SMS
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === 'option4'}
            onChange={handleOptionChange}
          />
          WhatsApp
        </label>
      </div>

      




      <div className={styles['sent']}>Выберите способ оплаты</div>

      <div className={styles['radio-bottom']}>
        <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Банковская карта
        </label>
        <br />
      
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          QIWI Кошелек
        </label>
        <br />

        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          ЮKassa
        </label>
      </div>




      <div className={styles['card-bank']}>

        <div className={styles['card-number']}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="XXXX XXXX XXXX XXXX"
          required
        />
        </div>

        <div className={styles['validity-cvv']}>
          <div className={styles['validity']}>
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
          </div>

          <div className={styles['cvv']}>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            placeholder="XXX"
            required
          />
          </div>

        </div>

        <button type="submit">Submit</button>
      </div>

    </div>
  
  )
}

export default PaymentTop
