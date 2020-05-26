import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Input from './Input'

import styles from './AddNewTodo.module.css'

const AddNewTodo = () => {
    const [text, setText] = useState('')
    const [focusInput, setFocus] = useState(null)

    const { addTodo, todo, subTodoState, subTodoId,
        addSubTodoList,subTodo} = useContext(GlobalContext)

    const onSubTodoSubmit = e => {
        e.preventDefault() 
        const t = {
            id: subTodo.length+1, 
            todoId: subTodoId,
            text
        }
 
        addSubTodoList(t)
        setText('')
        focusInput.focus()
     }
    const onSubmit = e => {
       e.preventDefault() 
       const t = {
           id: todo.length+1, 
           text
       }

       addTodo(t)
       setText('')
       focusInput.focus()
    }

    return (
        <>
            <h3>Todos List</h3>
                <div className ="form-control">
                    <input type="text"
                        ref={ref => setFocus(ref)}
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter todo details" 
                    />
                </div>
                <div className={styles.btnRow}>
                    {subTodoState ? 
                    <button className={styles.btn} onClick={onSubTodoSubmit}>Add Sub Todo</button> :
                <button className={styles.btn} onClick={onSubmit}>Add Todo</button>}
                </div>
        </>
    )
}

export default AddNewTodo