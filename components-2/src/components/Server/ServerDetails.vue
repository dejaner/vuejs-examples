<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            <p>Server: {{ server.id }}</p>
            <p>Status: {{ server.status }}</p>
            <hr>
            <button @click="setStatus('Normal')">Normal</button>
            <button @click="setStatus('Offline')">Offline</button>
        </div>
        <p v-else>Please select server!</p>
        
    </div>

</template>

<script>
    import { eventBus } from "../../main.js";

    export default {
        data: function() {
            return {
                server: null
            };
        },
        created() {
            eventBus.$on('serverSelected', server => {
                this.server = server;
            }) 
        },
        methods: {
            setStatus(status) {
                this.server.status = status;
            }
        }
    }
</script>

<style>

</style>
