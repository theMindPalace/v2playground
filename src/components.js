/* Simple Global component */

Vue.component('hello',{
  template:'<h1>Hello World</h1>'
});

/* component with props */

Vue.component('todo-list',{
  props:['todos'],
  template:`<div><h5>Simple Todo List</h5><ul> <li v-for="todo in todos">{{todo}}</li> </ul></div>`
});



/* The Main app */
var app = new Vue({
  el:'#app',
  data:{
    pageTitle:'Components',
    todoitems:['Goto store','Buy Milk']
  }
});
