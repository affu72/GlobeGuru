import { Link, NavLink } from "react-router-dom";
import styles from './PageNav.module.css';
import Logo from "./Logo";

function PageNav() {
  return (
    <div className={styles.header}>
    <Logo/>
    <nav className={styles.nav}>
      <ul>
      <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        {/* <li>
          <NavLink to="/mui">Material-UI</NavLink>
        </li> */}
        <li  className={styles.cta}>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default PageNav;
