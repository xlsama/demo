<script setup>
import { ref } from "vue";

const todos = ref([
  { id: 1, content: '吃屎' },
  { id: 2, content: '熬夜' }
])
const value = ref('')

function submit() {
  if (!value.value.trim()) return
  todos.value.push({ id: todos.length + 1, content: value.value })
  value.value = ''
}

function deleteItem(index) {
  todos.value.splice(index, 1)
}

</script>

<template>
  <div class="container">
    <div class="top">
      <input type="text" @input="e => { value = e.target.value }" v-model="value" />
      <button @click="submit">提交</button>
    </div>
    <ol class="todos">
      <li v-for="(todo,index) in todos" class="todo-item" key="todo.id">
        <div class="content">{{ todo.content }}</div>
        <button @click="deleteItem(index)">删除</button>
      </li>
    </ol>
  </div>
</template>

<style lang='less' scoped>
.container {
  margin: 50px auto;
  width: 250px;
  .top {
    display: flex;
    input {
      height: 30px;
      width: 180px;
      font-size: 16px;
      text-indent: 8px;
    }
    button {
      flex: 1;
    }
  }
  .todos {
    margin-top: 20px;
    .todo-item {
      border: 1px solid #ccc;
      border-bottom: none;
      display: flex;
      &:last-child {
        border-bottom: 1px solid #ccc;
      }
      &:hover {
        cursor: pointer;
        background-color: #eee;
        transition: all 0.3s;
      }
      .content {
        padding: 5px 0;
        flex: 1;
      }
      button {
        width: 50px;
      }
    }
  }
}
</style>
