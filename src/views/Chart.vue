<template>
    <div class="chart w3-container">
        <h1>This is your Chart</h1>
        <div v-if="itemsChart.length < 1">
            <h3>Your Chart is empty, please buy something on the shop</h3>
            <button class="w3-button w3-green"><router-link to="/">Go to shop</router-link></button>
        </div>
        <div v-else>
            <h3>Cart list</h3>
            <div @click="itemDetail(item)" class="w3-container w3-padding" v-for="item in itemsChart" :key="item.id">
                <div class="w3-col w3-right s9 w3-card">
                    <div class="w3-col s3">
                        <img :src="item.image">
                    </div>
                    <div class="w3-col s7 w3-teal">
                        <h4>{{item.common_name}}</h4>
                        <p>{{item.race}}</p>
                    </div>
                    <div class="w3-col s2 w3-green">
                        <div class="w3-display-container">
                            <div>{{item.price}}</div>
                            <button class="w3-button w3-red w3-display-topright" @click="removeFromCart($event, item.id)">&times;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w3-container w3-left w3-padding">
                <br class="clear">
                <hr>
                <table class="w3-table-all w3-small" v-if="itemsChart.length > 0">
                <thead>
                    <tr>
                        <th>Items:</th>
                        <th>Amount:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{itemsChart.length}}</td>
                        <td>{{totalAmount}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'chart',
    props: {
      
    },
    data: function () {
        return {
            itemsChart: this.$store.getters.getCharListItems,
        }
    },
    created: function() {
        this.itemsChart = this.$store.getters.getCharListItems
    },
    components: {
      
    },
    methods: {
        itemDetail: function (i) {
            let modalData = {
                title: i.common_name,
                main: i.description,
                buttonOk: '',
                buttonNo: 'Cerrar',
                item: i
            }
            this.$emit('showModalEvent', modalData)
        },
        removeFromCart: function (event, id) {
            event.stopPropagation()
            this.$store.dispatch('removeFromChart', id).then((response) => {
                this.$emit('showNotificationEvent', {style: 'success', title: 'removeFromChart', msg: 'Item was removed from chart'})
            })
            .catch(e => {
                this.$emit('showNotificationEvent', {style: 'fail', title: 'removeFromChart', msg: 'error occured after remove item from chart'})
            });
        }
    },
    computed: {
        totalAmount: function () { 
            let totalAmount = 0
            this.itemsChart.forEach(function (item) {
                item.price = item.price.slice(1,item.price.length)
                console.log('item.price', item.price)
                totalAmount += parseFloat(item.price)
                item.price = item.price + '€'
            })
            return totalAmount + '€'
        }
    }
}
</script>

<style>
.clear {
    clear:both;
}
</style>