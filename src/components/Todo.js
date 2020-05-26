import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Todo.module.css'

const Todo = ({transaction,subTodo,todoID}) => {
    const { deleteTodo } = useContext(GlobalContext)
    const { doneTodo } = useContext(GlobalContext)
    const {addSubTodo} = useContext(GlobalContext)

    const txt = (transaction.text) ? transaction.text : '<Empty>'

    return (
        <>
        <li >
            <span><b>{txt}</b></span>
            <button className={styles.doneBtn} onClick={() => doneTodo(transaction.id)}>done</button>
            <button className={styles.doneBtn} onClick={() => addSubTodo(transaction.id)}>AddSub</button>
            <button className={styles.deleteBtn} onClick={() => deleteTodo(transaction.id)}>x</button>    
        </li>
    { subTodo.map(e =>
                        e.todoId === todoID &&
                        <li style={{paddingLeft:'50px'}}> <span><b>{e.text}</b></span></li>
                    )}
        </>
    )
}

export default Todo