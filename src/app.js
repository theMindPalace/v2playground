
var app = new Vue({
  el:"#app",
  data:{
    message:"Hello",
    name:"Sarath",
    rawHtml:'<p style="color:red">Html String binding using v-html</p>'
  },
  computed:{
    greetings:function(){
      return this.message +' '+ this.name;
    }
  }

})
