import styles from './Login.module.css'
import PageNav from '../components/PageNav'
import PageWrapper from '../components/PageWrapper'
import { useState } from 'react'

export default function Login() {

  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState('');
  const [loggedI,setLoggedIn] =  useState(false);


  function handleFormSubmission(e){
    const formData = new FormData(e.target);
    setLoggedIn(true);
  }


  return (
    <PageWrapper>
      <PageNav />
      <div className={styles.formWrapper}>
      <form className={styles.loginForm} onSubmit={handleFormSubmission}> 
        <div className={styles.row}>
          <label htmlFor="email">Email address *</label>
          <input type="email" name='email' placeholder='abc@example.com' onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Password *</label>
          <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        {/* <div className={styles.cta}> */}
          <button type='submit' className="btn">Login</button>
        {/* </div> */}
      </form>
      </div>
    </PageWrapper>
  )
}
