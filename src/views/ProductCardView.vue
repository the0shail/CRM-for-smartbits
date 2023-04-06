<template>
    <cardComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import cardComponent from '@/components/cardComponent.vue';
export default defineComponent({
    name: 'ProductCardView',
    components: {
        cardComponent,
    }
})
</script>

<style lang="scss" scoped></style>