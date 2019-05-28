<template>
    <div v-if="show" v-bind:style="{top: data.top+'px', left: data.left+'px', display: showClass}" class="tooltipmodal w3-quarter w3-card">
      <div class="w3-container">
        <h3 class="w3-green">{{data.title}}</h3>
        <h4>Features</h4>
        <table id="features" class="w3-table w3-tiny">
            <tbody>
                <tr>
                    <td class="w3-col s4">
                        <label>id: </label>{{data.item.id}}
                    </td>
                    <td class="w3-col s4">
                        <label>race: </label>{{data.item.race}}
                    </td>
                    <td class="w3-col s4">
                        <label>color: </label>{{data.item.color}}
                    </td>
                </tr>
                <tr>
                    <td class="w3-col s4">
                        <label>scientific name: </label>{{data.item.scientific_name}}
                    </td>
                    <td class="w3-col s4">
                        <label>gender: </label>{{data.item.gender}}
                    </td>
                    <td class="w3-col s4">
                        <label>behaviour: </label>{{data.item.behaviour}}
                    </td>
                </tr>
                <tr>
                    <td class="w3-col s4">
                        <label>size: </label>{{data.item.size}}
                    </td>
                    <td class="w3-col s4">
                        <label>price: </label>{{data.item.price}}
                    </td>
                    <td class="w3-col s4">
                        <label></label>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="main-data">{{data.main}}</div>
        <hr>
        <div v-if="data.footer !== ''">{{data.footer}}</div>
      </div>  
    </div>
</template>

<script>
export default {
  name: 'ToolTipModalComponent',
  props: {
    showToolTipModal: Boolean,
    data: {
      top: '',
      left: '',
      id: '',
      title: '',
      footer: '',
      main: '',
      buttonOk: '',
      buttonNo: ''
    }
  },
  watch: {
    show: function () {
        this.showClass = this.checkDisplay()
    },
    showToolTipModal: function (newValue) {
        this.show = newValue
    }
  },
  data: function () {
      return {
          show: false,
          showClass: 'none'
      }
  },
  methods: {
      toggle: function (id) {
          this.show = !this.show
          if (!this.show) this.$emit('toggleShowToolTipModal')
      },
      checkDisplay: function () {
          return this.show ? 'block' : 'none'
      },
      refresh: function () {
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tooltipmodal {
  max-height: 350px;
  max-width: 350px;
  min-height: 350px;
  min-width: 350px;
  position: fixed;
  background-color:whitesmoke;
}
.tooltipmodal * {
  overflow: hidden;
  overflow-y: hidden;
}
.tooltipmodal img {
  
}
.main-data {
  text-align: justify;
  font-size: 10px;
  text-overflow: ellipsis;
}
#features label {
  font-weight: bold;
}

</style>