import styles from './style.module.scss';
import {useLocation, useNavigate} from "react-router-dom";

function Header() {

  const {pathname} = useLocation();
  const navigate = useNavigate();

  return <div className={styles.wrapper}>
    <ul className={styles.list}>
      {
        [
          {path: '/', label: 'Home'},
          {path: '/about', label: 'About'}
        ].map((item => (
          <li className={`${styles.item} ${pathname === item?.path ? `${styles.active}` : ''}`} onClick={() => {
            navigate(item?.path);
          }}>
            {item?.label}
          </li>
        )))
      }
      <li>
        <button className={styles.button} type={'button'}>
          <a href={'/CV.pdf'} target={'_blank'}>
            Download CV
          </a>
        </button>
      </li>
    </ul>
  </div>
}

export default Header;
