import styles from './Button.module.css';

function Button({children, className, byTicket, byTicketCard}) {

  const handleClick = () => {
    if (byTicket) {
      byTicket();
    } 
    if (byTicketCard) {
      byTicketCard();
    }
  }

  return (
    <button onMouseOver={handleClick} className={`${styles['button']} ${className}`}>{children}</button>
  )
}

export default Button;