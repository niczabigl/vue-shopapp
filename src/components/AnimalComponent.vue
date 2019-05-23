<template>
    <div @click="itemDetail(animal)" class="w3-card">
      <img class="mainImage" :src="animal.image" :alt="animal.scientist_name">
      <h4 class="w3-green">{{animal.common_name}}</h4>
      <p class="price">{{animal.price}}</p>
      <p>{{animal.race}}</p>
      <p><button @click="addToChart($event)">Add to Chart</button></p>
    </div>
</template>

<script>
export default {
  name: 'AnimalComponent',
  props: {
    animal: Object,
  },
  methods: {
    addToChart: function (e) {
      e.stopPropagation()
      this.$store.dispatch('addToChart', this.animal).then((response) => {
        this.$emit('showNotificationEvent', {type: 'success', title: 'INFO', msg: this.animal.common_name + ' added to chart'})
      })
      .catch(e => {
        this.$emit('showNotificationEvent', {type: 'fail', title: 'ERROR', msg: 'Unable to add ' + this.animal.common_name + ' to chart'})
      });
    },
    itemDetail: function(i) {
      let modalData = {
              title: i.common_name,
              main: i.description,
              buttonOk: '',
              buttonNo: 'Cerrar',
              item: i
          }
      this.$emit('showModalEvent', modalData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h4 {
  margin: 0px 0px 20px 0px;
  padding: 10px
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.price {
  color: grey;
  font-size: 22px;
}

button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #009688!important;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.mainImage{
  height: 200px;
  width: 100%;
  max-height: 200px;
  
}

.card button:hover {
  opacity: 0.7;
}

</style>