<template>
    <div class="order">
        <div class="info_order">
            <div class="info_created">
                <label for="created_date">Дата создания</label>
                <input type="text" id="created_date" :value="dataWithVuex().created_date" disabled>
            </div>
            <div class="info_manager">
                <label for="manager">Менеджер</label>
                <input type="text" id="manager" :value="dataWithVuex().manager" disabled>
            </div>
        </div>
        <div class="client">
            <h3>Клиент</h3>
            <div class="client_row">
                <div class="client_partner">
                    <label for="partner">Партнер</label>
                    <input type="text" id="partner" :value="dataWithVuex().partner">
                </div>
                <div class="client_counterparty">
                    <label for="counterparty">Контрагент</label>
                    <input list="company" id="counterparty" name="counterparty" value="" />
                    <datalist id="company">
                        <option v-for="option in dataWithVuex().counterparty">{{ option }}</option>
                    </datalist>
                </div>
            </div>
            <div class="client_contact">
                <label for="contact">Контактное лицо</label>
                <input list="browsers" id="contact" :value="dataWithVuex().contact_user.user_name" name="contact" />
            </div>
            <div class="client_comment">
                <label for="comment">Комментарий</label>
                <textarea name="commentClient" :value="dataWithVuex().comment" id="comment" rows="3"></textarea>
            </div>
        </div>
        <div class="product">
            <h3>Товары / Услуги</h3>
            <div class="product_table">
                <table class="table_for_product">
                    <tr class="table_header">
                        <th>№</th>
                        <th class="left">Наименование</th>
                        <th>Количество</th>
                        <th class="price">Цена, $</th>
                    </tr>
                    <tr class="table_content" v-for="td in dataWithVuex().product_info">
                        <td>{{ td.id }}</td>
                        <td class="left">{{ td.name_product }}</td>
                        <td>{{ td.quantity }}</td>
                        <td>{{ td.price }}</td>
                    </tr>
                </table>
            </div>
            <div class="product_price">
                <label for="product_price">Сумма, $</label>
                <input type="text" id="product_price" :value="sumPriceTable()" disabled>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: 'CardOrder',
    methods: {
        ...mapGetters('storeProduct', ['vuexGetOrdersAsId']),
        dataWithVuex() {
            return this.vuexGetOrdersAsId()(this.$route.params.id)
        },
        sumPriceTable() {
            let prices = this.dataWithVuex().product_info
            let sum = prices.reduce((sum, data) => sum += Number(data.price), 0)
            return sum
        }
    },
})
</script>

<style lang="scss" scoped>
.order {
    margin-top: 30px;

    h3 {
        font-size: 28px;
        margin: 15px 0;
        font-weight: 600;
        margin-top: 50px;
    }

    label {
        font-weight: 500;
    }

    input,
    textarea {
        padding: 10px 8px;
        background-color: #fff;
        border: 3px solid #F0EBF0;
        border-radius: 5px;
        font-size: 18px;
        margin-top: 10px;
    }

    .info_order {
        display: flex;

        .info_created,
        .info_manager {
            display: flex;
            flex-direction: column;
            font-weight: 500;

            @media screen and (max-width: 576px) {
                width: 49%;
            }

            &:first-child {
                margin-right: 30px;

                @media screen and (max-width: 576px) {
                    margin-right: 2%;
                }
            }

            input {
                background-color: #F4EDF3;
                max-width: 300px;
            }
        }
    }

    .client {
        .client_row {
            display: flex;
            justify-content: space-between;

            .client_partner,
            .client_counterparty {
                display: flex;
                flex-direction: column;
                width: 49%;

                input {
                    padding: 10px 8px;
                    background-color: #fff;
                    border: 3px solid #F0EBF0;
                    border-radius: 3px;
                    font-size: 18px;
                    margin-top: 10px;
                }
            }

            @media screen and (max-width: 768px) {
                display: block;

                .client_partner,
                .client_counterparty {
                    width: 100%;

                    &:first-child {
                        margin-bottom: 10px;
                    }

                }
            }

        }

        .client_contact,
        .client_comment {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
        }

    }

    .product {
        margin-bottom: 30px;

        tr:nth-child(even) {
            background-color: #F6F1F7;
        }

        table,
        th,
        td {
            border: 1px solid #E5E0E5;
            border-collapse: collapse;
            text-align: center;
            padding: 10px;

            &.left {
                padding: 10px 10px !important;
                text-align: start;
            }
        }

        .product_table {
            overflow-x: auto;
        }

        .table_for_product {
            margin-top: 20px;
            width: 100%;
            margin-bottom: 30px;

            th {
                font-weight: 500;

                &.price {
                    width: 15%;
                }
            }
        }

        .product_price {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            width: 20%;

            @media screen and (max-width: 576px) {
                width: 50%;
            }
            &:first-child {
                margin-right: 30px;
            }

            input {
                background-color: #F4EDF3;
            }
        }
    }
}
</style>