<template>
    <div class="todo">
        <input id="text" type="checkbox" v-model="todo.isCompleted" />
        <div class="text">
            <p :class="todo.isCompleted ? 'strikethrough':''">{{todo.message}}</p>
        </div>
        <div v-show="!todo.isCompleted" class="edit">
            <button-vue @clicked="editClicked" :style="'Success'" :value="'Edit'" />
        </div>
        <div class="delete">
            <button-vue @clicked="deleteTodo(todo.id)" :style="'Danger'" :value="'Delete'" />
        </div>
    </div>
</template>

<script>
import ButtonVue from './Button.vue'
import { mapMutations, mapState } from 'vuex'

export default {
    components: {
        ButtonVue,
    },
    props: {
        todo: {
            type: Object,
            default: {
                message: 'Coding all day',
                isCompleted: true
            }
        }
    },
    methods: {
        ...mapMutations([
            'deleteTodo',
            'changeIsEditStateTrue',
            'setActiveTodo',
        ]),
        editClicked(){
            this.$emit('edit-clicked', this.todo.message)
            this.setActiveTodo(this.todo)
            this.changeIsEditStateTrue()
        }
    }
}
</script>

<style scoped>
    .todo {
        background: rgba(103, 103, 255, 0.397);
        border: 1px solid #6489f6;
        box-sizing: border-box;
        display: flex;
        margin-top: 10px;
        padding: 10px 15px;
        width: 100%;
    }
    .text {
        flex: 1 1 1em;
        margin-left: 10px;
    }
    .delete, .edit {
        margin: 13px 10px
    }

    .strikethrough {
        text-decoration: line-through;
    }
    input[type="checkbox"] {
        cursor: pointer;
    }
</style>