<template>
  <div @click="hideSideBar" class="main w3-container">
    <div >
      <ViewComponent @showNotificationEvent="showNotification" @showModalEvent="showModal">
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
</style>
