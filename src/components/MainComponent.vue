<template>
  <div @click="hideSideBar" class="main w3-container">
    <div >
      <ViewComponent @toggleToolTipModalEvent="toggleToolTipModal" @showToolTipModalEvent="showToolTipModal" @showNotificationEvent="showNotification" @showModalEvent="showModal">
      </ViewComponent>
    </div>
  </div>
</template>

<script>
import ViewComponent from '@/components/ViewComponent.vue'
export default {
  name: 'MainComponent',
  components: {
    ViewComponent
  },
  methods: {
    hideSideBar: function () {
      this.$emit('hideSideBarEvent')
    },
    showModal: function (data) {
      this.$emit('showModalEvent',data)
    },
    showNotification: function (data) {
      this.$emit('showNotificationEvent',data)
    },
    showToolTipModal: function (data) {
      this.$emit('showToolTipModalEvent',data)
    },
    toggleToolTipModal: function () {
      this.$emit('toggleToolTipModalEvent')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.main {
  background-image: url('../assets/wood-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
