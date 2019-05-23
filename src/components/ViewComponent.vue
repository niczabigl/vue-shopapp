<template>
    <div class="view">
      <router-view @toggleToolTipModalEvent="toggleToolTipModal" @showToolTipModalEvent="showToolTipModal" @showNotificationEvent="showNotification" @showModalEvent="showModal"/>
    </div>
</template>

<script>
export default {
  name: 'ViewComponent',
  props: {
    
  },
  methods: {
        showModal: function (data) {
            this.$emit('showModalEvent', data)
        },
        showNotification: function (data) {
            this.$emit('showNotificationEvent', data)
        },
        showToolTipModal: function (data) {
            this.$emit('showToolTipModalEvent', data)
        },
        toggleToolTipModal: function (data) {
            this.$emit('toggleToolTipModalEvent')
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>