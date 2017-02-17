<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-content></my-content>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import Content from './Content.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'my-header': Header,
            'my-content': Content,
            'my-footer': Footer
        }
    }
</script>

<style>

</style>
