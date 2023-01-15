import { Link } from 'react-router-dom';
import Button from './UI/Button';
import styles from './Header.module.css';

function Header() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link to="/">
            <Button>To garage</Button>
          </Link>
        </li>
        <li>
          <Link to="/winners">
            <Button>To winners</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
