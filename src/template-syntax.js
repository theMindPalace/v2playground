var app = new Vue({
  el:'#app',
  data:{
    name:'Sarath',
    enableButton:false,
    sometext:"batman mostly works alone and doesn't care highly about what people think of him",
    number:10,
    sex:'m'
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    showlength:function(value){

      value =  value.toString();

      return value +' ('+ value.length+')';

    }
  }
});
