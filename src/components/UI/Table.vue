<template>
    <div class="table">
        <table class="tableUI">
            <tr class="table_header">
                <th>Код</th>
                <th>Дата создания</th>
                <th>Менеджер</th>
                <th>Статус</th>
                <th>Информация лида</th>
                <th>Комментарий</th>
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
    </div>

    <div class="notification">
        <li class="row_number">
            Результатов: {{ viewResultElement() }}
        </li>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import resultElement from "@/services/resultElement"


export default defineComponent({

    methods: {
        ...mapGetters("storeProduct", ['vuexGetDemand']),
        viewResultElement() {
            return resultElement(this.vuexGetDemand())
        }
    },
})
</script>

<style lang="scss" scoped>
div.table {
    overflow-x: auto;

    table,
    th,
    td {
        border: 1px solid #E5E0E5;
        border-collapse: collapse;
        text-align: center;
        padding: 10px;
    }

    .tableUI {
        margin-top: 20px;
        width: 100%;
        margin-bottom: 30px;

        tr:nth-child(even) {
            background-color: #F6F1F7;
        }

        th {
            font-weight: 500;
        }
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