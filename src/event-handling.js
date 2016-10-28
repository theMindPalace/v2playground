
var app = new Vue({
  el:'#app',
  data:{
    name:null,
    counter:0
  },
  methods:{
    setName:function(){
      var name = prompt('Enter your name');
      if(name){
        this.name = name;
      }
    },
    greet:function(msg,event){
      if(this.name){
        alert('Hi '+this.name+ ', '+msg);
      }
      else{
        alert(msg);
      }
      if(event) event.preventDefault();
    },
    formSubmit:function(){
      alert('Form submitted successfullly');
    },
    hitEnter:function(){
      alert('Yuo just hitted on enter key, Awesome!!!');
    }
  }
});
