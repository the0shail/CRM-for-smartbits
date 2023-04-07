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
                    <label for="partner">Менеджер</label>
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
                <label for="contact">Менеджер</label>
                <input list="browsers" id="contact" name="contact" value="Петров Петр Петрович"/>
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
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({


})
</script>

<style lang="scss" scoped>
.order {
    margin-top: 30px;

    .info_order {
        display: flex;

        .info_created,
        .info_manager {
            display: flex;
            flex-direction: column;
            font-weight: 500;
            margin-bottom: 30px;

            &:first-child {
                margin-right: 30px;
            }

            input {
                padding: 5px;
                background-color: #F4EDF3;
                border: 3px solid #F0EBF0;
                border-radius: 3px;
                font-size: 18px;
                margin-top: 10px;
            }
        }
    }

    .client {
        h3 {
            font-size: 28px;
            margin: 15px 0;
            font-weight: 600;
        }

        label{
            font-weight: 500;
        }
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

            input, textarea {
                padding: 10px 8px;
                background-color: #fff;
                border: 3px solid #F0EBF0;
                border-radius: 3px;
                font-size: 18px;
                margin-top: 10px;
            }
        }


    }


}
</style>