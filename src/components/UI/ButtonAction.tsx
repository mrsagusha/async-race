import { ButtonProps } from '../../interfaces/interfaces';
import styles from './ButtonAction.module.css';

function ButtonAction({ children, action, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={
        action === 'move'
          ? { color: 'green', borderColor: 'green' }
          : { color: 'red', borderColor: 'red' }
      }
      className={styles.buttonAction}
    >
      {children}
    </button>
  );
}

export default ButtonAction;
