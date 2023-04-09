<template>
    <div class="application">
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
        <div class="client_row">
            <div class="client_partner">
                <label for="partner">Имя / Название компании</label>
                <input type="text" id="partner" :value="dataWithVuex().name_company">
            </div>
            <div class="client_counterparty">
                <label for="contact">Контактные данные</label>
                <input id="contact" :value="dataWithVuex().info_lid.phone" />
            </div>
        </div>
        <div class="client_comment">
            <label for="comment">Комментарий</label>
            <textarea name="commentClient" :value="dataWithVuex().comment" id="comment" rows="3"></textarea>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    name: "CardApplication",
    methods: {
        ...mapGetters('storeProduct', ['vuexGetDemandAsId']),
        dataWithVuex() {
            return this.vuexGetDemandAsId()(this.$route.params.id)
        }
    }

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

            input {
                background-color: #F4EDF3;
            }

            @media screen and (max-width: 576px) {
                width: 49%;
            }

            &:first-child {
                margin-right: 30px;

                @media screen and (max-width: 576px) {
                    margin-right: 2%;
                }
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

    .client_comment {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
}
</style>