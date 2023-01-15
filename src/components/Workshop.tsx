import Button from './UI/Button';
import styles from './Workshop.module.css';

function Workshop() {
  return (
    <div className={styles.workshop}>
      <form className={styles.workshopForm}>
        <input className={styles.workshopInput}></input>
        <label className={styles.workshopColorLabel}>
          <input type="color"></input>
        </label>
        <Button>Create</Button>
      </form>
      <form className={styles.workshopForm}>
        <input className={styles.workshopInput}></input>
        <label className={styles.workshopColorLabel}>
          <input type="color"></input>
        </label>
        <Button>Update</Button>
      </form>
      <div className={styles.buttonsActionsWrapper}>
        <Button>Race</Button>
        <Button>Reset</Button>
        <Button>Generate cars</Button>
      </div>
    </div>
  );
}

export default Workshop;
