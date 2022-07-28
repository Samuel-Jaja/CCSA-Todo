const state = {
    todos: [
    ],
    isEditMode: false,
    activeTodo: {}
}

const getters = {
    todos: function (state) {
        return state.todos
    },
}

const mutations = {
    setActiveTodo(state, payload) {
        state.activeTodo = payload
    },
    changeIsEditStateFalse (state) {
        state.isEditMode = false
    },
    changeIsEditStateTrue (state) {
        state.isEditMode = true
    },
    deleteTodo(state, id) {
        const indexOfItem = state.todos.find(todo => todo.id === id)
        state.todos.splice(indexOfItem, 1)
    },
    addTodo(state, payload) {
        state.todos.push(payload)
    },
    editTodo(state, payload) {
        const indexToBeEdited = state.todos.findIndex(todo => todo.id === payload.id)
        state.todos.splice(indexToBeEdited, 1, payload)
    }
}

export default {
    state,
    getters,
    mutations,
}