import React, { ReactNode } from 'react'
import styles from './PageWrapper.module.css';

export default function PageWrapper({children}:{children:ReactNode}) {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  )
}
