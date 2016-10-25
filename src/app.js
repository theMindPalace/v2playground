
var app = new Vue({
  el:"#app",
  data:{
    message:"Hello",
    name:"Sarath",
    rawHtml:'<p style="color:red">Html String binding using v-html</p>',
    feelBetter:true,
    todos:['Goto store','Buy milk','Play games']
  },
  computed:{
    greetings:function(){
      return this.message +' '+ this.name;
    }
  },
  /*Lifecycle hooks*/
  created:function(){
    console.log("Vue::created");
  }

})
