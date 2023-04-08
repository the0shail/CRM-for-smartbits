<template>
    <Navigation />
    <table class="tableUI">
        <tr class="table_header">
            <th style="width: 5%;">Код</th>
            <th style="width: 12%;">Дата создания</th>
            <th style="width: 8%;">Сумма, $</th>
            <th style="width: 12%;">Статус оплаты</th>
            <th style="width: 16%;">Статус исполнителя</th>
            <th style="width: 10%;">Менеджер</th>
            <th style="width: 15%;">Клиент</th>
            <th style="width: 22%;">Комментарий</th>
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
    <div class="notification">
        <li class="row_number">
            Результатов: {{ viewResultElement() }}
        </li>
    </div>
</template>

<script lang="ts">
import TableUI from '@/components/UI/Table.vue';
import Navigation from '@/components/UI/Navigation.vue';
import coloredTableFields from '@/services/coloredTableFields';
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
