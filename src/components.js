/* Simple Global component */

Vue.component('hello',{
  template:'<h1>Hello World</h1>',
  beforeCreate:function(){
    console.info('hello::beforeCreate')
  },
  created:function(){
    console.info('hello::create');
  },
  beforeMount:function(){
    console.info('hello::beforeMound');
  },
  mounted:function(){
    console.info('hello::mounted');
  }
});

/* component with props */

Vue.component('todo-list',{
  props:['todos'],
  template:`<div>
                <h5>Simple Todo List</h5>
              <ul>
                  <li v-for="todo in todos">{{todo}}</li>
              </ul>
            </div>`,
            beforeCreate:function(){
              console.info('todolist::beforecreated')
            },
            created:function(){
              console.info('todolist::created');
            },
            beforeMount:function(){
              console.info('todolist::beforeMound');
            },
            mounted:function(){
              console.info('todolist::mounted');
            }
});



/* The Main app */
var app = new Vue({
  el:'#app',
  data:{
    pageTitle:'Components',
    todoitems:['Goto store','Buy Milk']
  },
  beforeCreate:function(){
    console.info('Just before  create');
  },
  created:function(){
    console.info('App created');
  },
  beforeMount:function(){
    console.info('Before mount')
  },
  mounted:function(){
    console.info('App mounted');
  }
});
