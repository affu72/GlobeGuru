import React from 'react'
import styles from './Login.module.css'

export default function Login() {
  return (
      <form className={styles.loginForm}> 
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="text" placeholder='abc@example.com' />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input type="password"/>
        </div>
      </form>
  )
}
