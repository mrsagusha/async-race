import { ButtonProps } from '../../interfaces/interfaces';
import styles from './Button.module.css';

function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
