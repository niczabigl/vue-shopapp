<template>
  <div class="home w3-container">
    <h1>Welcome to Animals Crossing Website</h1>
    <div class="w3-third w3-padding" v-for="animal in animals" :key="animal.id">
      <AnimalComponent @showNotificationEvent="showNotification" v-bind:animal="animal"></AnimalComponent>
    </div>    
  </div>
</template>

<script>
// @ is an alias to /src
import MainSideComponent from '@/components/MainSideComponent.vue'
import AnimalComponent from '@/components/AnimalComponent.vue'

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
    this.animals = this.loadData(20)
  },
  components: {
    AnimalComponent
  },
  methods: {
    loadData(number) {
      let data = []
      for(let i = 0 ; i < number ; i++){
        let a = this.fetchOne()
        if(!data.includes(a)) data.push(a)
      }
      return data
    },
    fetchOne() {
      return this.$store.getters.findAnimal(Math.floor(Math.random() * 20) + 1)
    },
    showNotification(data) {
      this.$emit('showNotificationEvent', data)
    }
  }
}
</script>
