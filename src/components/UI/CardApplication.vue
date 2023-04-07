<template>
    <div class="application">
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
        <div class="client_row">
            <div class="client_partner">
                <label for="partner">Имя / Название компании</label>
                <input type="text" id="partner" value="ООО 'SMARTBITS PRO'">
            </div>
            <div class="client_counterparty">
                <label for="contact">Контактные данные</label>
                <input id="contact" value="+998-12345678" />
            </div>
        </div>
        <div class="client_comment">
            <label for="comment">Комментарий</label>
            <textarea name="commentClient" id="comment" rows="3"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CardApplication",
    

})
</script>

<style lang="scss" scoped>
.application {
    margin-top: 30px;

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
            margin-bottom: 30px;

            &:first-child {
                margin-right: 30px;
            }

            input {
                background-color: #F4EDF3;
            }
        }
    }

    .client_row {
        display: flex;
        justify-content: space-between;

        .client_partner,
        .client_counterparty {
            display: flex;
            flex-direction: column;
            width: 49%;

        }
    }

    .client_comment {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
}
</style>