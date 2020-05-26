import React, { useContext } from 'react'
import Todo from './Todo'
import DoneTodo from './DoneTodo'
import { GlobalContext } from '../context/GlobalState'

import styles from './TodoList.module.css'

export const TodoList = () => {
    const { todo, doneTodoList, subTodo } = useContext(GlobalContext)

    return (
        <>
            <h3>Todo List</h3>
            <ul id="list" className={styles.list}>
                {todo
                    .sort((a,b) => b.id - a.id)
                    .map(t => <Todo key={t.id} todoID = {t.id} transaction={t} subTodo={subTodo}/> )}
                    {doneTodoList
                    .map(t => t.map(e =>
                        <DoneTodo key={e.id} transaction={e} done={true} />
                    ) )}
            </ul>
        </>
    )
}

export default TodoList