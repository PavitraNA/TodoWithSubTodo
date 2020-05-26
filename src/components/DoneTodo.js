import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Todo.module.css'

const DoneTodo = ({transaction}) => {
    const { deleteDoneTodo } = useContext(GlobalContext)
    

    const txt = (transaction.text) ? transaction.text : '<Empty>'

    return (
        <li >
            <span><b><strike>{txt}</strike></b></span>
            <button className={styles.deleteBtn} onClick={() => deleteDoneTodo(transaction.id)}>x</button>
            
        </li>
    )
}

export default DoneTodo