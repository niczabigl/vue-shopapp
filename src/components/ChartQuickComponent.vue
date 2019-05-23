<template>
    <div class="chartquick">
      <router-link class="w3-button" to="/chart">
        <div>
            <img id="chart" src="../assets/charticon.png">
            <span class="itemsCount w3-badge w3-tiny">{{itemsCount}}</span>
        </div>
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
    },
    itemsPrices: function () {
        return this.$store.getters.getTotalAmountCharList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.itemsCount {
    position: relative;
    bottom: 10px;
    right: 10px
}
#chart {

}

</style>