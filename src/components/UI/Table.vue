<template>
    <table class="tableUI">
        <tr class="table_header">
            <th class="table_" style="width: 5%;">Код</th>
            <th class="table_" style="width: 12%;">Дата создания</th>
            <th class="table_" style="width: 12%;">Менеджер</th>
            <th class="table_" style="width: 12%;">Статус</th>
            <th class="table_" style="width: 30%;">Информация лида</th>
            <th class="table_" style="width: 30%;">Комментарий</th>
        </tr>
        <tr class="table_content" v-for="product in vuexGetProducts()" :key="product.id">
            <td>
                <router-link :to="{ name: 'ProductCardView', params: { id: product.id } }">
                    {{ product.id }}
                </router-link>
            </td>
            <td>{{ product.created_date }}</td>
            <td>{{ product.manager }}</td>
            <td>{{ product.status }}</td>
            <td>{{ product.info_lid }}</td>
            <td>{{ product.comment }}</td>
        </tr>
    </table>
    <div class="notification">
        <li class="row_number">
            Результатов: 5
        </li>
        <li class="row_number">
            Результатов: 5
        </li>
        <li class="row_number">
            Результатов: 5
        </li>
        <li class="row_number">
            Результатов: 5
        </li>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';


export default defineComponent({
    methods: {
        ...mapGetters("storeProduct", ['vuexGetProducts']),

        coloredFields(): void {
            const fields: NodeListOf<Element> = document.querySelectorAll('.table_content');

            fields.forEach((tr, index) => {
                if (index % 2 == 0) tr.classList.add("spicy");
            });
        },
    },
    mounted() {
        this.coloredFields()
        console.log(this.vuexGetProducts());

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