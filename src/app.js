
var app = new Vue({
  el:"#app",
  data:{
    message:"Hello",
    name:"Sarath",
    email:'',
    rawHtml:'<p style="color:red">Html String binding using v-html</p>',
    feelBetter:true,
    todos:['Goto store','Buy milk','Play games']
  },
  computed:{
    greetings:function(){
      return this.message +' '+ this.name;
    }
  },
  /*Custom methods */
  methods:{
    clickContactButton:function(e){
      if(!this.email){
        alert('Please enter email');
        return false;
      }

      if(!this.validateEmail(this.email)){
        alert('Invalid email');
        return false;
      }

      alert('Hi '+this.name+ ' , we received your email '+this.email);
    },
    clickClearButton:function(){
      this.name = '';
      this.email = '';
    },
    validateEmail:function(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  /*Lifecycle hooks*/
  created:function(){
    console.log("Vue::created");
  }

})
