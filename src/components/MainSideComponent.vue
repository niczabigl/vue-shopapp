<template>
  <div class="mainside">
    <button id="toggleSideBarOut" class="w3-button w3-circle screw w3-xlarge" @click="toggleSideBar"><span>≡</span></button>
    <div id="mainSidebar" v-if="showMainSide" class="w3-sidebar w3-bar-block" >
      <div class="logocontainer w3-bar-block">
        <img id="logo" src="../assets/logo.png">
        <button id="toggleSideBarIn" class="w3-button w3-circle screw w3-xlarge" @click="toggleSideBar"><span>≡</span></button>
      </div>
      
      <nav class="w3-bar-block">
        <div class="menu-card w3-sand">
          <h3 class="w3-bar-item w3-center">Menu</h3>
          <router-link class="w3-bar-item w3-button"  @click="hideSideBar" to="/">Home</router-link>
          <router-link class="w3-bar-item w3-button" @click="hideSideBar" to="/about">About</router-link>
        </div>
      </nav>

      <div class="w3-full-height">
        <div class="w3-display-bottomleft ">
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
.w3-bar-block .menu-card, .menu-card > *, .w3-display-bottomleft > * {
  width: 95%;
  border-radius: 0px 0px 10px 10px;
  margin: auto
}
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
  background-image: url('../assets/wood-background-v.jpg');
  box-shadow: 10px 0px 5px 0px rgba(0,0,0,0.75);
}
.screw {
  background-image: url('../assets/menuButton.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  -webkit-transition: -webkit-transform .8s ease-in-out;
          transition:         transform .8s ease-in-out;
}
.screw:hover {
  background-image: url('../assets/menuButton.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
   -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
.logocontainer {
  width: 100%;
}
.menu-card {
  box-shadow: -1rem 1rem 1rem #000;
}
#logo {
  width: 50%;
  margin-top: 25px;
  margin-right: 20%;
  margin-left: 10%;
  margin-bottom: 5%;
}
h3 {
  margin: 10px 0 0;
  font-size: 30px;
  background: -webkit-linear-gradient(brown, black);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  font-size: 20px;
  background: -webkit-linear-gradient(yellow, brown);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
