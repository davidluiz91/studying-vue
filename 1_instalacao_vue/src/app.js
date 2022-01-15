const MyNameApp= {
    data(){
      return{
          name:"David",
          idade: 30
      }  
    }
}

Vue.createApp(MyNameApp).mount("#app");