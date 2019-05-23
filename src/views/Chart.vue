<template>
    <div class="chart w3-container">
        <h1>This is your Chart</h1>
        <div v-if="itemsChart.length < 1">
            <h3>Your Chart is empty, please buy something on the shop</h3>
            <button class="w3-button w3-green"><router-link to="/">Go to shop</router-link></button>
        </div>
        <div v-else>
            <h3>Cart list</h3>
            <div class="w3-row chart">
                <div @click="itemDetail(item)" class="w3-container w3-padding" v-for="item in itemsChart" :key="item.id">
                    <div class="w3-right w3-card w3-col w3-threequarter">
                        <div class="w3-quarter">
                            <img class="chartImage" :src="item.image">
                        </div>
                        <div @mouseleave="stophandler" @mousemove="handler($event, item)" class="info w3-half">
                            <p><span>{{item.common_name}}</span> - <span>{{item.race}}</span></p>
                            <ul class="features">
                                <li><img class="icon" src="../assets/behaviourIcon.png">{{item.behaviour}}</li>
                                <li><img class="icon" src="../assets/genderIcon.png">{{item.gender}}</li>
                                <li><img class="icon" src="../assets/sizeIcon.png">{{item.size}}</li>
                            </ul>
                        </div>
                        <div class="w3-quarter">
                            <div class="w3-display-container priceContainer">
                                <div class="price w3-green w3-display-middle">{{item.price}}</div>
                                <div class="w3-button w3-red w3-display-topright" @click="removeFromCart($event, item.id)">&times;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w3-container w3-right w3-padding">
                <br class="clear">
                <hr>
                <table class="w3-table-all w3-big" v-if="itemsChart.length > 0">
                <thead>
                    <tr>
                        <th>Items</th>
                        <th>Amount</th>
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
        <!-- <div>
            <div @mouseleave="stophandler" @mousemove="handler($event)" class="w3-display-middle" id="test"></div>
            <p class="w3-display-bottom w3-margin" id="result"> {{result}} </p>
        </div> -->
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
            result: Object,
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
                this.$emit('showNotificationEvent', {style: 'success', title: 'INFO', msg: 'Item was removed from chart'})
            })
            .catch(e => {
                this.$emit('showNotificationEvent', {style: 'fail', title: 'ERROR', msg: 'error occured after remove item from chart'})
            });
        },
        handler: function (event, i) {
            console.log('item', i)
            this.$emit('showToolTipModalEvent', {
                top: event.clientY, 
                left: event.clientX + 25,
                title: i.common_name,
                main: i.description,
                item: i
            })
        },
        stophandler: function () {
            this.$emit('toggleToolTipModalEvent')
        }
    },
    computed: {
        totalAmount: function () { 
            return this.$store.getters.getTotalAmountCharList
        }
    }
}
</script>

<style>
#test {
    height: 150px;
    width: 150px;
    background-color: aquamarine
}
.clear {
    clear:both;
}
.chartImage{
    height: 125px;
    width:100%;
}
.chart .price{
    height: 100%;
    width: 100%;
    padding: 50px;
    font-size: 25px
}
.chart .info{
    font-style: bold;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
}
.priceContainer{
    height: 125px;
}
.features {
    margin: 0px;
}
.features li{
    list-style: none;
    display: inline-block;
}
</style>