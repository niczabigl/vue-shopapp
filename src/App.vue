<template>
  <div id="shop">
    <MainSideComponent @toggleSideBarEvent="toggleSideBar" @hideSideBarEvent="hideSideBar" :showMainSide="showMainSide" ></MainSideComponent>
    <MainComponent @toggleToolTipModalEvent="toggleToolTipModal" @showToolTipModalEvent="setToolTipModal" @showNotificationEvent="setNotification" @showModalEvent="setModal" @hideSideBarEvent="hideSideBar"></MainComponent>
    <div class="w3-display-topright">
      <ChartQuickComponent></ChartQuickComponent>
    </div>
    <ToolTipModalComponent @toggleShowToolTipModal="toggleToolTipModal" :showToolTipModal="showToolTipModal" :data="toolTipData"></ToolTipModalComponent>
    <ModalComponent @toggleShowModal="toggleModal" :showModal="showModal" :data="modalData"></ModalComponent>
    <NotificationComponent @toggleShowNotification="toggleNotification" :showNotification="showNotification" :data="notificationData"></NotificationComponent>
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
      modalData: Object,
      toolTipData: Object,
      notificationData: Object,
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
      this.toolTipData = data
      this.showToolTipModal = true
    },
    setModal(data) {
      this.modalData = data
      this.showModal = true
    },
    setNotification(data) {
      this.notificationData = data
      this.showNotification = true
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
  color: #2c3e50;
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
