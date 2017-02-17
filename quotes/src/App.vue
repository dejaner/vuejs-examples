<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
        <app-new-quote @newQuote="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @deleteQuote="deleteQuote"></app-quote-grid>
        <div class="row">
            <div class="col-xs-12 text-center">
                <div class="alert alert-info">
                    Click on quote to delete it!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppQuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    import Header from './components/Header.vue';

    export default {
        data() {
            return {
                quotes: [
                        'A basic quote.'
                ],
                maxQuotes: 10
            }
        },
        components: {
            AppQuoteGrid,
            AppNewQuote: NewQuote,
            AppHeader: Header
        },
        methods: {
            deleteQuote(index) {
                this.quotes.splice(index, 1);
            },
            newQuote(quote) {
                if (this.quotes.length >= this.maxQuotes) {
                    return alert("Delete some quotes first!");
                }
                this.quotes.push(quote);
            }
        }
    }
</script>

<style>
</style>
