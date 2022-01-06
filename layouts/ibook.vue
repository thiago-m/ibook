<template>
    <div class="iBook-layout">
        <Header />
        <Container> <Nuxt /> </Container>
        <Footer />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
    })
</script>

<style lang="scss" scoped>
.iBook-layout {
    margin-top: 4.313rem;
    display: grid;
    grid-gap: 6.75rem;
    .container {
        padding-bottom: 6.75rem;
    }
}
</style>