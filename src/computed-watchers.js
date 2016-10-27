var app = new Vue({
  el:'#app',
  data:{
    first_name:'Bruce',
    last_name:'Wayne',
    hero:'Bat',
    hero_name:''

  },
  computed:{
    fullname:{
      get:function(){

        return this.first_name + ' ' + this.last_name;

      },
      set:function(newvalue){

        var names = newvalue.split(' ');
        this.first_name = names[0];

        if(names.length > 1){
          this.last_name = names[1];
        }

      }
    }
  },
  methods:{
    reverseName:function(){
      return this.fullname.split('').reverse().join('');
    }
  },
  watch:{
    hero:function(newvalue){

      this.hero_name = this.hero + ' man';

    }
  }
});
