<template>
    <TableUI />
</template>

<script lang="ts">
import TableUI from '@/components/UI/Table.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'HomeView',
    components:{
        TableUI
    }
})
</script>
