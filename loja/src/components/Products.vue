<template>
    <div>
        <a-button @click="loadData">Reload</a-button>
        Ordenar: 
        <a-select style="width: 120px" v-model="sort">
            <a-select-option value="id">id</a-select-option>
            <a-select-option value="nome">nome</a-select-option>
        <a-select-option value="preco">preço</a-select-option>
        </a-select>
        <div class="produto" v-for="item in sortedItems" :key="item.id">
            {{ item }}
            <a-button @click="addProduct(item)">Add to cart</a-button>
        </div>
    </div>
</template>
<script>
    import _ from "lodash"
    import { LOAD_PRODUCTS, ADD_CART_PRODUCT } from "@/store/actions"
    export default {
        data() {
            return {
                sort: 'id'
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            loadData() {
                this.$store.dispatch(LOAD_PRODUCTS)
                .catch((msg) => {

                })
            },
            addProduct(product) {
                this.$store.dispatch(ADD_CART_PRODUCT, product)
                .catch((msg) => {

                })
            }
        },
        computed: {
            transformedItems() {
               return _.map(this.$store.state.products.items, i => {
                    return {
                        id: i.id,
                        resume: `${i.nome}, ${i.preco}`
                    }
                })
            },
            sortedItems() {
                return _.take(_.orderBy(this.transformedItems, [this.sort], ['asc']), 2);
            }
        }
    }
</script>

<style scoped>
.produto {
    border: 1px solid #eee;
    padding: 20px;
}
</style>