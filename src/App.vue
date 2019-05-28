<template>
  <div id="shop">
    <MainSideComponent 
      @toggleSideBarEvent="toggleSideBar" 
      @hideSideBarEvent="hideSideBar" 
      :showMainSide="showMainSide" >
    </MainSideComponent>
    <MainComponent 
      @toggleToolTipModalEvent="toggleToolTipModal" 
      @showToolTipModalEvent="setToolTipModal" 
      @showNotificationEvent="setNotification" 
      @showModalEvent="setModal" 
      @hideSideBarEvent="hideSideBar">
    </MainComponent>
    <div class="w3-display-topright">
      <ChartQuickComponent></ChartQuickComponent>
    </div>
    <ToolTipModalComponent 
      @toggleShowToolTipModal="toggleToolTipModal" 
      :showToolTipModal="showToolTipModal" 
      :data="toolTipData">
    </ToolTipModalComponent>
    <ModalComponent 
      @toggleShowModal="toggleModal" 
      :showModal="showModal" 
      :data="modalData">
    </ModalComponent>
    <ul class="w3-ul" v-for="(n) in notificationsQueue" :key="n.id">
      <li>
        <NotificationComponent 
          @toggleShowNotification="toggleNotification" 
          :data="n">
        </NotificationComponent>
        </li>
    </ul>
  </div>
</template>

<script>
import "@/css/w3.css"
import MainSideComponent from '@/components/MainSideComponent.vue'
import MainComponent from '@/components/MainComponent.vue'
import ChartQuickComponent from '@/components/ChartQuickComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'
import NotificationComponent from '@/components/NotificationComponent.vue'
import ToolTipModalComponent from '@/components/ToolTipModalComponent.vue'
import { setTimeout } from 'timers';
// @ is an alias to /src
export default {
  name: 'shop',
  components: {
    MainSideComponent,
    MainComponent,
    ChartQuickComponent,
    ModalComponent,
    NotificationComponent,
    ToolTipModalComponent
  },
  data: function () {
    return {
      notificationsQueue: [],
      modalData: Object,
      toolTipData: Object,
      showMainSide: false,
      showModal: false,
      showNotification: false,
      showToolTipModal: false
    }
  },
  methods: {
    hideSideBar() {
      this.showMainSide = false
    },
    toggleSideBar() {
      this.showMainSide = !this.showMainSide
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleNotification() {
      this.showNotification = !this.showNotification
    },
    toggleToolTipModal() {
      this.showToolTipModal = !this.showToolTipModal
    },
    setToolTipModal(data) {
      data.main = this.cutLargeText(data.main, 500)
      this.toolTipData = data
      this.showToolTipModal = true
    },
    setModal(data) {
      this.modalData = data
      this.showModal = true
    },
    setNotification(data) {
      this.$store.dispatch('generateId').then((response) => {
        console.log('setNotification data ', data)
        data.id = response
        data.msg = this.cutLargeText(data.msg, 20)
        this.notificationsQueue.push(data)
        setTimeout(() => { 
          this.notificationsQueue.shift()
        }, 2900);
      })
    },
    cutLargeText(text, length) {
      let auxText = text.substring(0,length) + '...'
      return auxText
    }
  }
}
</script>

<style>
#shop {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #2c3e50
}
#nav {
  padding: 30px;
}

ul {
  list-style: none;
}
ul li {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
