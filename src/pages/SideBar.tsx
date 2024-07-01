
import AppNav from '../components/AppNav'
import Logo from '../components/Logo'
import styles from './SideBar.module.css'

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>
      <div>
        <p>list of cities</p>
      </div>   

      <footer>
        <p>
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </footer> 
    </div>
  )
}
