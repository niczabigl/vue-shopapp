<template>
    <div class="chartquick">
      <router-link class="w3-button" to="/chart">
        <img id="chart" src="../assets/charticon.png">
        <span @click="hideSideBar">Chart </span>
        <span class="itemsCount">({{itemsCount}})</span>
    </router-link> 
    </div>
</template>

<script>
export default {
  name: 'ChartQuickComponent',
  props: {
    
  },
  data: function () {
    return {
    }
  },
  methods: {
      hideSideBar () {
        this.$emit('hideSideBarEvent')
    }
  },
  computed: {
    itemsCount: function () {
        return this.$store.getters.getCharListCount
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemsCount {

}
#chart {

}

</style>