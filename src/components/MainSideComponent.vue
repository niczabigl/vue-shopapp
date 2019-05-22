<template>
  <div class="mainside">
    <button id="toggleSideBarOut" class="w3-button w3-teal w3-xlarge" @click="toggleSideBar"><span>≡</span></button>
    <div id="mainSidebar" v-if="showMainSide" class="w3-sidebar w3-light-grey w3-bar-block" >
      <div class="logocontainer">
        <img id="logo" src="../assets/logo.png">
        <button id="toggleSideBarIn" class="w3-button w3-teal w3-xlarge" @click="toggleSideBar"><span>≡</span></button>
      </div>
      
      <nav class="w3-bar-block">
        <h3 class="w3-bar-item">Menu</h3>
        <router-link class="w3-bar-item w3-button" to="/"><span @click="hideSideBar">Home</span></router-link>
        <router-link class="w3-bar-item w3-button" to="/about"><span @click="hideSideBar">About</span></router-link>
      </nav>

      <div class="w3-full-height">
        <div class="w3-display-bottomleft">
          <div class="w3-bar-block">
            <ChartQuickComponent></ChartQuickComponent> 
            <router-link class="w3-bar-item w3-button" to="/loggout"><span @click="hideSideBar">Loggout</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartQuickComponent from '@/components/ChartQuickComponent.vue'
export default {
  name: 'MainSideComponent',
  props: {
    showMainSide: Boolean
  },
  data: function () {
    return {
    }
  },
  methods: {
    toggleSideBar () {
      this.$emit('toggleSideBarEvent', !this.showMainSide)
    },
    hideSideBar () {
      this.$emit('hideSideBarEvent')
    }
  },
  components: {
    ChartQuickComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#toggleSideBarOut {
  position: absolute;
  left: 0;
}
#toggleSideBarIn {
  position: absolute;
  right: 0;
}
#mainSidebar {
  min-width: 15%;
  max-height: 100%;
  overflow-x: hidden; 
  overflow-y: hidden;
}
.logocontainer {
  width: 100%;
}
#logo {
  width: 50%;
  float: left;
  margin-top: 25px;
  margin-right: 20%;
  margin-left: 10%;
  margin-bottom: 5%;
}
h3 {
  margin: 10px 0 0;
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
</style>
