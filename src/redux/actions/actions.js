let nextTodoId=0;

export const addTodo=text=>{
    return {
        type:'ADD_TODO',
        id:nextTodoId++,
        text
    }
}

export const setVisibilityFilter=filte=>{
    return{
        type:'SET_VISIBILITY_FILTER',
        filte
    }
}

export const toggleTodo=id=>{
    return{
        type:'TOGGLE_TODO',
        id
    }
}