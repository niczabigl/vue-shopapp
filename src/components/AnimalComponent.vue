<template>
    <div class="animal">
      <div @click="itemDetail(animal)" v-bind:class="{'w3-opacity': animal.selected, 'w3-grayscale-max': animal.selected}" class="w3-card">
        <img class="mainImage" :src="animal.image" :alt="animal.scientist_name">
        <h4>{{animal.common_name}}</h4>
        <table id="features" class="w3-table-all w3-tiny">
          <tbody>
            <tr>
              <td><label>race: </label>{{animal.race}}</td>
              <td><label>color: </label>{{animal.color}}</td>
            </tr>
            <tr>
              <td><label>scientific name: </label>{{animal.scientific_name}}</td>
              <td><label>size: </label>{{animal.size}}</td>
            </tr>
            <tr>
              <td><label>behaviour: </label>{{animal.behaviour}}</td>
              <td><label>gender: </label>{{animal.gender}}</td>
            </tr>
          </tbody>
        </table>
        <p class="price">{{animal.price}}</p>
        <p><button v-bind:disabled="animal.selected" class="w3-button" @click="addToChart($event)">Add to Chart</button></p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AnimalComponent',
  props: {
    animal: Object,
  },
  data: function () {
    return {
    }
  },
  created: function () {
    // console.log('animal component created', this)
  },
  methods: {
    addToChart: function (e) {
      e.stopPropagation()
      this.$store.dispatch('addToChart', this.animal).then((response) => {
        this.$emit('showNotificationEvent', {style: 'success', title: 'INFO', msg: this.animal.common_name + ' added to chart'})
        this.$forceUpdate()
      })
      .catch(e => {
        this.$emit('showNotificationEvent', {style: 'fail', title: 'ERROR', msg: e + '.'})
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
  margin: 0px 0px 0px 0px;
  padding: 10px;
  background-image: linear-gradient(to top left, brown, black);
  color: white
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
.animal button{
  width: 100%;
  background-image: linear-gradient(to top left, green, black);
  color: white;
  padding: 12px;
  margin: 0px;
  border-radius : 0px 0px 10px 10px;
}
.w3-table-all {
  border:0px;
}
.mainImage{
  height: 200px;
  width: 100%;
  max-height: 200px;
  
}

.card button:hover {
  opacity: 0.7;
}

.animal .w3-card {
  border-radius: 10px;
  background-color: white;
  box-shadow: -1rem 1rem 1rem #000
}

</style>