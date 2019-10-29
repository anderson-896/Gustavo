<template>
    <div>
        <div class="cart-item" v-for="item in $store.state.cart.items" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
.cart-item {
    border: 1px solid #eee;
    padding: 20px;
}
</style>