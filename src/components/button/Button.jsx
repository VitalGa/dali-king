import styles from './Button.module.css';


function Button({children, className, clicked}) {

  return (
    <button onClick={clicked} className={`${styles['button']} ${className}`}>{children}</button>
  )
}

export default Button;