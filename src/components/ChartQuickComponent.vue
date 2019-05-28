<template>
    <span class="chartquick">
      <router-link to="/chart">
        <span class="w3-container">
            <img id="chart" src="../assets/wooden-shopping-cart-icon.png">
            <span class="itemsCount w3-yellow w3-badge">{{itemsCount}}</span>
        </span>
    </router-link> 
    </span>
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
    bottom: 25px;
    right: 20px
}
#chart {

}

</style>