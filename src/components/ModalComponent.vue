<template>
    <div class="modal">
        <div v-if="show" class="w3-modal" v-bind:style="{display: showClass}">
            <div class="w3-modal-content">
                <div class="w3-container">
                    <span @click="toggle(1)" class="w3-button w3-display-topright">&times;</span>
                    <h3 class="w3-green">{{data.title}}</h3>
                    <h4>Features</h4>
                    <table id="features" class="w3-table-all w3-small">
                        <tbody>
                            <tr>
                                <td>
                                    <label>id:</label>{{data.item.id}}
                                </td>
                                <td>
                                    <label>race:</label>{{data.item.race}}
                                </td>
                                <td>
                                    <label>color:</label>{{data.item.color}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>scientific_name:</label>{{data.item.scientific_name}}
                                </td>
                                <td>
                                    <label>gender:</label>{{data.item.gender}}
                                </td>
                                <td>
                                    <label>behaviour:</label>{{data.item.behaviour}}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>size:</label>{{data.item.size}}
                                </td>
                                <td>
                                    <label>price:</label>{{data.item.price}}
                                </td>
                                <td>
                                    <label></label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="main-data">{{data.main}}</p>
                    <hr>
                    <div v-if="data.footer !== ''">{{data.footer}}
                        <button class="w3-button w3-right" v-if="data.buttonNo !== ''" @click="toggle(1)">{{data.buttonNo}}</button>
                        <button class="w3-button w3-green w3-right" v-if="data.buttonOk  !== ''">{{data.buttonOk}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: {
        showModal: Boolean,
        data: {
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
        showModal: function (newValue) {
            this.show = newValue
        },
        data: function () {
            this.generateFeaturesTable()
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
            if (!this.show) this.$emit('toggleShowModal')
        },
        checkDisplay: function () {
            return this.show ? 'block' : 'none'
        },
        generateFeaturesTable: function () {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.w3-modal-content, .w3-container {
    padding: 0px;
}
h3{
    margin: 0px;
    padding: 10px
}
.main-data {
    padding: 10px;
    margin: 10px;
    text-align: justify;
}

</style>