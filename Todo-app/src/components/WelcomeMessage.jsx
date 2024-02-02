import React, { useContext } from 'react'
import styles from './WelcomeMessage.module.css'
import { TodoItemContext } from '../store/todoItems-store'
function WelcomeMessage() {
  const {todoItems} = useContext(TodoItemContext);
  return (
    todoItems.length===0 && <h4 className={styles.welcome}> Enjoy your day!!</h4>
  )
}

export default WelcomeMessage
