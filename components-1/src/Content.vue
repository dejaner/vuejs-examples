<template>
    <div class="row">
        <my-server-list></my-server-list>
        <my-server-details></my-server-details>
    </div>
</template>

<script>
    import ServerList from './server/ServerList.vue'
    import ServerDetails from './server/ServerDetails.vue'

    export default {
        components: {
            'my-server-list': ServerList,
            'my-server-details': ServerDetails
        }
    }
</script>