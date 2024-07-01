import AppNav from "../components/AppNav"
import PageWrapper from "../components/PageWrapper"
import styles from './AppLayout.module.css'
import SideBar from "./SideBar"

function AppLayout() {
  return (
    <div className={styles.app}>
      <PageWrapper>
          <SideBar/>
      </PageWrapper>
      

    </div>
  )
}

export default AppLayout
