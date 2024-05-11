import React from 'react'
import styles from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link className={styles.logo} to={'/'}>GlobeGuru</Link>
    </div>
  )
}
