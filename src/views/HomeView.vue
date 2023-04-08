<template>
    <Navigation />
    <TableUI />
</template>

<script lang="ts">
import TableUI from '@/components/UI/Table.vue';
import Navigation from '@/components/UI/Navigation.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'HomeView',
    components: {
        TableUI, Navigation
    }
})
</script>