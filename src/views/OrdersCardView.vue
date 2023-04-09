<template>
    <Navigation />
    <div class="table_order">
        <table class="tableUI">
            <tr class="table_header">
                <th>Код</th>
                <th>Дата создания</th>
                <th>Сумма, $</th>
                <th>Статус оплаты</th>
                <th>Статус исполнителя</th>
                <th>Менеджер</th>
                <th>Клиент</th>
                <th>Комментарий</th>
            </tr>
            <tr class="table_content" v-for="order in vuexGetOrders()" :key="order.id">
                <td>
                    <router-link :to="{ name: 'ProductCardView', params: { id: order.id } }">
                        {{ order.id }}
                    </router-link>
                </td>
                <td>{{ order.created_date }}</td>
                <td>{{ order.price }}$</td>
                <td>{{ order.status_payment }}</td>
                <td>{{ order.status_product }}</td>
                <td>{{ order.manager }}</td>
                <td>{{ order.client }}</td>
                <td>{{ order.comment }}</td>
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
import TableUI from '@/components/UI/Table.vue';
import Navigation from '@/components/UI/Navigation.vue';
import resultElement from '@/services/resultElement';

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';



export default defineComponent({
    name: 'HomeView',
    components: {
        TableUI, Navigation
    },
    methods: {
        ...mapGetters('storeProduct', ['vuexGetOrders']),
        viewResultElement() {
            return resultElement(this.vuexGetOrders())
        }
    },
})
</script>

<style lang="scss" scoped>
div.table_order {
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
