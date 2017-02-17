<template>
    <li class="list-group-item"  @click="setCurrentServer(server)">
        Server #{{ server.id }} - {{ server.status }}
    </li>
</template>

<script>
    import { eventBus } from "../../main.js";

    export default {
        props: {
            server: {
                type: Object,
                required: true
            }
        },
        methods: {
            setCurrentServer(server) {
                eventBus.$emit('serverSelected', server);
            }
        }
    }
</script>