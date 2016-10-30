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


/* Local components */

var fruits = {
  template:`<div>
                <h1>fruits</h1>
                <div v-if="fruitslist">
                  <ul>
                    <li v-for="fruit in fruitslist">{{fruit}}</li>
                  </ul>
                </div>
                <div v-else> No Fruits </div>
            </div>`,
  props:['fruitslist']
}

var Counter = {
  name:'counter',
  template :`
  <div v-bind:style="counterStyle">
  <button v-on:click="increment">{{title}}</button>
  <span>{{count}}</span>
  </div>`,
  data:function(){
    return {
      count:1,
      counterStyle:{
        border:'1px solid #f56',
        padding:'2px',
        width:'150px',
        borderRadius:'3px'
      }
    }
  },
  props:{
    title:{
      type:String,
      default:"Counter "
    }
  },
  methods:{
    increment:function(){
      this.count++;
    }
  }
}



/* The Main app */
var app = new Vue({
  el:'#app',
  data:{
    pageTitle:'Components',
    todoitems:['Goto store','Buy Milk'],
    fruitslist:['Apple','Orange']
  },
  components:{
    fruits:fruits,
    counter:Counter
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
