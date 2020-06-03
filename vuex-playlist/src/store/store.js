import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  //存储数据
  state:{
    products:[
      {name:"Panny", price:200},
      {name:"Rajsh", price:300},
      {name:"Sherdon", price:500},
      {name:"Howard", price:400}
    ]
  },
  //获取数据
  getters:{
    saleProducts(state){
      //用map便利数组中的所有信息
      let saleProducts = state.products.map(
        product => {
          return{
            name: "**"+ product.name +"**",
            price: product.price/2
          }
        }
      )
      return saleProducts
    }
  },
  //触发事件去改变数据
  //触发mutations中的函数需要用store.commit
  mutations: {
    reducePrice: (state,payload) => {
     // setTimeout(function () {
        state.products.forEach(product => {
          product.price -= payload
        })
    //  },3000)
    }
  }

  ,
  //提交mutation而不是直接变更状态,包含任意异步操作
  //actions中包含参数context和payload
  //payload用来传递参数
  //触发actions中的函数需要用store.dispatch
  actions:{
    reducePrice: (context, payload) => {
      setTimeout(function(){
        context.commit('reducePrice',payload)
      },2000)
    }
  }
})

