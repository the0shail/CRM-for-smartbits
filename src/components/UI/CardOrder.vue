<template>
    <div class="order">
        <div class="info_order">
            <div class="info_created">
                <label for="created_date">Дата создания</label>
                <input type="text" id="created_date" value="11.03.2023" disabled>
            </div>
            <div class="info_manager">
                <label for="manager">Менеджер</label>
                <input type="text" id="manager" value="Иванов И.И." disabled>
            </div>
        </div>
        <div class="client">
            <h3>Клиент</h3>
            <div class="client_row">
                <div class="client_partner">
                    <label for="partner">Партнер</label>
                    <input type="text" id="partner" value="SmartBits">
                </div>
                <div class="client_counterparty">
                    <label for="counterparty">Контрагент</label>
                    <input list="company" id="counterparty" name="counterparty" value="ООО 'SMARTBITS PRO'" />
                    <datalist id="company">
                        <option>ООО 'SMARTBITS PRO'</option>
                        <option>ООО 'SMARTBITS PRO'</option>
                        <option>ООО 'SMARTBITS PRO'</option>
                    </datalist>
                </div>
            </div>
            <div class="client_contact">
                <label for="contact">Контактное лицо</label>
                <input list="browsers" id="contact" name="contact" value="Петров Петр Петрович" />
                <datalist id="browsers">
                    <option>Петров Петр Петрович</option>
                    <option>Владислав Владимир Владимирович</option>
                    <option>Антонов Антон Антонович</option>
                </datalist>
            </div>
            <div class="client_comment">
                <label for="comment">Комментарий</label>
                <textarea name="commentClient" id="comment" rows="3"></textarea>
            </div>
        </div>
        <div class="product">
            <h3>Товары / Услуги</h3>
            <div class="product_table">
                <table class="table_for_product">
                    <tr class="table_header">
                        <th style="width: 5%;">№</th>
                        <th class="left" style="width: 65%;">Наименование</th>
                        <th style="width: 15%;">Количество</th>
                        <th style="width: 15%;">Цена, $</th>
                    </tr>
                    <tr class="table_content">
                        <td>1</td>
                        <td class="left">asdasdasd</td>
                        <td>123</td>
                        <td>123125</td>
                    </tr>
                </table>
            </div>
            <div class="product_price">
                <label for="product_price">Сумма, $</label>
                <input type="text" id="product_price" value="30 345" disabled>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import coloredTableFields from "@/services/coloredTableFields"

export default defineComponent({
    name: 'CardOrder',
    mounted() {
        coloredTableFields("table_content")
    }
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

            &:first-child {
                margin-right: 30px;
            }

            input {
                background-color: #F4EDF3;
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
        table,
        th,
        td {
            border: 1px solid #E5E0E5;
            border-collapse: collapse;
            text-align: center;

            &.left {
                padding: 10px 10px !important;
                text-align: start;
            }
        }

        .table_for_product {
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
        .product_price {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            width: 20%;

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