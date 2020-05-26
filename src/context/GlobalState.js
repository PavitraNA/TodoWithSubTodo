import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    subTodo: [],
    todo: [
        { id: 1, text: "1" },
        { id: 2, text: "2"},
        { id: 3, text: "3" },
        { id: 4, text: "4" },
    ],
    doneTodoList: [
    ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteDoneTodo(id) {
        dispatch({
            type: 'DELETE_DONE_TODOLIST',
            payload: id
        })
    }
    function addSubTodoList(transaction) {
        dispatch({
            type: 'ADD_SUB_TODO_LIST',
            payload: transaction
        })
    }
    function addSubTodo(id){
        dispatch({
            type: 'ADD_SUB_TODOLIST',
            payload: id
        })
    }
    function deleteTodo(id) {
        dispatch({
            type: 'DELETE_TODO_LIST',
            payload: id
        })
    }

    function doneTodo(id) {
        dispatch({
            type: 'DONE_TODO',
            payload: id
        })
    }
    function addTodo(transaction) {
        dispatch({
            type: 'ADD_TODO_LIST',
            payload: transaction
        })
    }

    

    return (
        <GlobalContext.Provider value={{ 
            todo: state.todo,
            doneTodoList: state.doneTodoList,
            subTodoId: state.subId,
            subTodoState: state.subTodoState,
            subTodo: state.subTodo,
            deleteTodo, doneTodo,deleteDoneTodo,addTodo
            ,addSubTodo, addSubTodoList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}