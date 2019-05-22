<template>
    <div v-if="show" id="snackbar" v-bind:class="{show: show}" class="notification">
        <div v-bind:class="{'w3-blue': type.isInfo, 'w3-red': type.isFail, 'w3-yellow': type.isWarning, 'w3-green': type.isSuccess}" class="w3-card w3-panel">
            <h3>{{data.title}}</h3>
            <p>{{data.msg}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationComponent',
    props: {
        showNotification: Boolean,
        data: {
            style: '',
            title: '',
            msg: ''
        }
    },
    data: function () {
        return {
            fadeOut: 3000,
            showSnackBar: false,
            type: {
                isInfo: false,
                isFail: false,
                isWarning: false,
                isSuccess: false,
            },
            show: false
        }
    },
    watch: {
        show: function () {
            this.selectClass()
            if (!this.show) return
            setTimeout(() => { 
                this.$emit('toggleShowNotification')
            }, 2900);
        },
        showNotification: function (newValue) {
            this.show = newValue
        }
    },
    methods: {
        checkDisplay: function () {
            return this.show ? true : false
        },
        selectClass: function () {
            this.clearTypes()
            switch (this.data.style) {
                case 'info':
                    this.type.isInfo = true
                    break
                case 'warning':
                    this.type.isWarning = true
                    break
                case 'fail':
                    this.type.isFail = true
                    break
                case 'success':
                    this.type.isSuccess = true
                    break
                default:
                    this.type.isInfo = true
            }
        },
        clearTypes: function () {
            this.type.isInfo = false
            this.type.isWarning = false
            this.type.isSuccess = false
            this.type.isFail = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. 
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

</style>