import Body from '@/components/body/Body'
import Header from '@/components/header/Header'
import React from 'react'
import styles from './page.module.css'

const page = () => {

  return (
    <div className={styles.mainContent}>
      <div className={styles.headerContent}>
        <h3>TodoInput</h3>
        <Header/>
      </div>
      <div className={styles.bodyContent}>
        <Body/>
      </div>
    </div>
  )
}

export default page