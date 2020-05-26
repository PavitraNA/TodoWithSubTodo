export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TODO_LIST':
            return {
                ...state,
                todo: state.todo
                    .filter(t => t.id !== action.payload)
                    
            } 
            case 'ADD_SUB_TODO_LIST':
                return {
                    ...state,
                    subTodo: [ ...state.subTodo, action.payload ],
                    subId: null,
                    subTodoState: false
                }
            case 'ADD_SUB_TODOLIST':
                return {
                    ...state,
                    subId: action.payload,
                    subTodoState: true
                }
            case 'ADD_TODO_LIST':
            return {
                ...state,
                todo: [ ...state.todo, action.payload ]
            }
            case 'DELETE_DONE_TODOLIST':
                let stacListDone = state.doneTodoList
                    .map(t => t.filter(e=>e.id !== action.payload))
                return {
                    ...state,
                    doneTodoList: stacListDone
                        
                }
        case 'DONE_TODO':
            let stacList = state.doneTodoList
            stacList.push(state.todo
                .filter(t => t.id === action.payload))
            return {
                ...state,
                todo: state.todo
                .filter(t => t.id !== action.payload),
                doneTodoList: stacList
            }
        default:
            return state
    }
}