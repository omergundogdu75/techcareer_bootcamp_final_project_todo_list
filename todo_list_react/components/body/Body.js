import React from 'react'
import TodoList from '../list/TodoList'
import styles from './body.module.css'

const Body = () => {
  return (
    <div className={styles.main}>
      <h3>TodoList</h3>
        <TodoList />
    </div>
  )
}

export default Body