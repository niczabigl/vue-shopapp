<template>
  <div class="home w3-container">
    <h1>Welcome to Animals Crossing Website</h1>
    <div class="w3-quarter w3-padding" v-for="animal in animals" :key="animal.id">
      <AnimalComponent @showModalEvent="showModal" @showNotificationEvent="showNotification" v-bind:animal="animal" :key="animal.selected"></AnimalComponent>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
import MainSideComponent from '@/components/MainSideComponent.vue'
import AnimalComponent from '@/components/AnimalComponent.vue'
import {makeGetRequest} from '../Utils'

export default {
  name: 'home',
  props: {
  
  },
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      animals: []
    }
  },
  created: function() {
    this.loadData(20).then(response => { 
      console.log('loaddata response',response)
      this.animals = response
    })
  },
  components: {
    AnimalComponent
  },
  methods: {
    loadData(number) {
      return new Promise ((resolve) =>{
        if (this.$store.getters.getAllPreloadAnimals.length > 0) return resolve(this.$store.getters.getAllPreloadAnimals)
        let data = []
        let responses = []
        // for(let i = 0 ; i < number ; i++){
        //   let a = this.fetchOne()
        //   a.selected = false
        //   if(!data.includes(a)) data.push(a)
        // }
        // this.$store.dispatch('setPreloadAnimals', data)
        // return resolve(data) 
        for(let i = 0 ; i < number ; i++){
           responses.push(makeGetRequest())
        }
        Promise.all(responses)
          .then(response => {
            for(let i = 0 ; i < number ; i++){
              let a = this.fetchOne()
              if (response[i].status === 200 && response[i].data.status === "success") a.image = response[i].data.message
              if(!data.includes(a)) data.push(a)
            }
            resolve(data)
        })
      })
    },
    fetchOne() {
      return this.$store.getters.findAnimal(Math.floor(Math.random() * 20) + 1)
    },
    showNotification(data) {
      this.$emit('showNotificationEvent', data)
    },
    showModal(data) {
      this.$emit('showModalEvent', data)
    }
  }
}
</script>
