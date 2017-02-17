<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server :server='s' v-for="s in servers"></server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';
    
    export default {
        data: function() {
            return {
                servers: [
                    { id: 1, status: 'Normal' },
                    { id: 2, status: 'Normal' },
                    { id: 3, status: 'Normal' }
                ]
            }
        },
        components: {
            Server
        },
        
    }
</script>

<style>

</style>
