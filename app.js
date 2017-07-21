import Vue from 'vue'

var App = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todoList: [],
    },
    created: function(){
        window.onbeforeunload = () =>{
            let dataString = JSON.stringify(this.todoList)
            window.localStorage.setItem('myTodos',dataString)
        }

        let oldDataString = window.localStorage.getItem('myTodos')
        let oldData = JSON.parse(oldDataString)
        this.todoList = oldData || []
    },
    methods: {
        addTodo: function(){
            if (this.newTodo === ''){return alert('请输入任务名')}
            this.todoList.push({
                title: this.newTodo,
                createdAt: new Date(),
                done: false
            })
            this.newTodo = ''
            console.log(this.todoList)
        },
        removeTodo: function(todo){
            let index = this.todoList.indexOf(todo)
            this.todoList.splice(index,1)
        }
    }
})