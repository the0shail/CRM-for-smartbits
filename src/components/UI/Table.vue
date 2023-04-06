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
        <tr class="table_content">
            <td>
                <router-link to="/">100</router-link>
            </td>
            <td>11.03.2023</td>
            <td>не назначен</td>
            <td>Новый</td>
            <td>Алексей +99812345678</td>
            <td></td>
        </tr>
        <tr class="table_content">
            <td><router-link to="/">101</router-link></td>
            <td>11.03.2023</td>
            <td>не назначен</td>
            <td>Новый</td>
            <td>Алексей +99812345678</td>
            <td></td>
        </tr>
        <tr class="table_content">
            <td><router-link to="/">102</router-link></td>
            <td>11.03.2023</td>
            <td>не назначен</td>
            <td>Новый</td>
            <td>Алексей +99812345678</td>
            <td></td>
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

export default defineComponent({
    methods: {
        coloredFields(): void {
            const fields: NodeListOf<Element> = document.querySelectorAll('.table_content');

            fields.forEach((tr, index) => {
                if (index % 2 == 0) tr.classList.add("spicy");
            });
        },
    },
    mounted() {
        this.coloredFields()
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
    li{
        margin: 0 30px 0 0;
        list-style: none;
        font-size: 18px;
    }
}</style>