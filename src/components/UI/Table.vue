<template>
    <table class="tableUI">
        <tr class="table_header">
            <th style="width: 5%;">Код</th>
            <th style="width: 12%;">Дата создания</th>
            <th style="width: 12%;">Менеджер</th>
            <th style="width: 12%;">Статус</th>
            <th style="width: 30%;">Информация лида</th>
            <th style="width: 30%;">Комментарий</th>
        </tr>
        <tr class="table_content" v-for="product in vuexGetDemand()" :key="product.id">
            <td>
                <router-link :to="{ name: 'ProductCardView', params: { id: product.id } }">
                    {{ product.id }}
                </router-link>
            </td>
            <td>{{ product.created_date }}</td>
            <td>{{ product.manager }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.info_lid.name }} {{ product.info_lid.phone }}</td>
            <td>{{ product.comment }}</td>
        </tr>
    </table>
    <div class="notification">
        <li class="row_number">
            Результатов: {{ viewResultElement() }}
        </li>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import coloredTableFields from "@/services/coloredTableFields"
import resultElement from "@/services/resultElement"


export default defineComponent({
    methods: {
        ...mapGetters("storeProduct", ['vuexGetDemand']),
        viewResultElement(){
            return resultElement(this.vuexGetDemand())
        }
    },
    mounted() {
        coloredTableFields("table_content")
    }

})
</script>

<style lang="scss" scoped>
table,
th,
td {
    border: 1px solid #E5E0E5;
    border-collapse: collapse;
    text-align: center;
}

.tableUI {
    margin-top: 20px;
    width: 100%;
    margin-bottom: 30px;

    th {
        font-weight: 500;
        padding: 10px 0;
    }

    tr {
        &.spicy {
            background-color: #F6F1F7;
        }
    }

    td {
        padding: 10px 0;
    }
}

.notification {
    display: flex;

    li {
        margin: 0 30px 0 0;
        list-style: none;
        font-size: 18px;
    }
}
</style>