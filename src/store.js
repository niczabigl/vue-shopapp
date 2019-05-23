import Vue from 'vue'
import Vuex from 'vuex'

import usersddbb from './jsons/users.json'
import animalsddbb from './jsons/animals.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usersddbb: usersddbb,
    animalsddbb: animalsddbb,
    idGenerator: 0,
    session: {},
    user: {
      logged: false,
      profile: {
        id: '',
        name: '',
        surname: '',
        email: '',
        gender: '',
        birthdate: '',
        avatar: ''
      },
      buyhistory: []
    },
    shoppingcart: {
      userid: '',
      date: '',
      items: []
    }
  },
  mutations: {
    setUser (state, user) {
      state.user.profile = user
      state.user.profile.id = state.idGenerator++
      state.user.logged = true
    },
    addToChart (state, item) {
      state.shoppingcart.date = new Date()
      state.shoppingcart.items.push(item)
    },
    removeFromChart (state, id) {
      for (var i = 0; i < state.shoppingcart.items.length; i++) {
        if (state.shoppingcart.items[i].id === id) {
          state.shoppingcart.items.splice(i, 1)
        }
      }
      if (state.shoppingcart.items.length < 1) state.shoppingcart.date = ''
    }
  },
  actions: {
    login (context, user) {
      context.commit('login', user)
    },
    fetchItems ({ commit }) {
      return new Promise((resolve, reject) => {
        // make a call
        // shop.getProducts(products => {
        //   commit('setProducts', products)
        //   resolve()
        // })
      })
    },
    addToChart ({ commit }, item) {
      return new Promise((resolve, reject) => {
        if (item === null) return reject(new Error('No item selected'))
        commit('addToChart', item)
        resolve(true) // Let the calling function know that http is done. You may send some data back
      })
    },
    removeFromChart ({ commit }, id) {
      return new Promise((resolve, reject) => {
        if (id === null) return reject(new Error('No id selected'))
        this.state.shoppingcart.items.forEach(function (item) {
          if (item.id === id) {
            commit('removeFromChart', id)
            resolve(true) // Let the calling function know that http is done. You may send some data back
          }
        })
        reject(new Error(`item ${id} is not in charlist`))
      })
    },
    doLogin (context, user) {
      return new Promise((resolve, reject) => {
        if ((user.name || user.surname || user.birthdate || user.email || user.gender) === null) return false
        const ageDifMs = Date.now() - user.birthdate.getTime()
        const ageDate = new Date(ageDifMs) // miliseconds from epoch
        if (Math.abs(ageDate.getUTCFullYear() - 1970) >= 18) {
          if (Object.keys(user) === Object.keys(this.state.user.profile)) {
            context.commit('setUser', user)
            resolve(true)
          }
        }
      })
    }
  },
  getters: {
    findAnimal: (state) => (id) => {
      return state.animalsddbb.find(animal => animal.id === id)
    },
    getAllAnimals: state => {
      return state.animalsddbb
    },
    getCharListCount: state => {
      return state.shoppingcart.items.length
    },
    getCharListItems: state => {
      return state.shoppingcart.items
    },
    getTotalAmountCharList: (state, getters) => {
      let list = getters.getCharListItems
      let totalAmount = 0
      list.forEach(function (item) {
        item.price = item.price.replace('€', '')
        totalAmount += parseFloat(item.price)
        item.price = item.price + '€'
      })
      return totalAmount + '€'
    }
  }
})
