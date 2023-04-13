<template>
    <div class="card">
        <!-- {{ requestDataWithVuex() }} -->
        <div class="card_status">
            <h3>Заявка {{ $route.params.id }}</h3>
            <h5>Доставка</h5>
        </div>
        <div class="card_setting">
            <router-link to="/" class="button-4" role="button">Закрыть</router-link>
            <router-link to="/" class="button-4" role="button">История</router-link>
        </div>
        <div class="tabs">
            <input type="radio" name="tab-btn" id="tab-btn-1">
            <label for="tab-btn-1">Заявка</label>
            <input type="radio" name="tab-btn" id="tab-btn-2" checked>
            <label for="tab-btn-2">Заказ</label>

            <div id="CardApplic">
                <CardApplication />
            </div>
            <div id="CardOrder">
                <CardOrder />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import CardOrder from '@/components/UI/CardOrder.vue'
import CardApplication from '@/components/UI/CardApplication.vue'


export default defineComponent({
    name: "cardComponent",
    components: {
        CardOrder, CardApplication
    },
})
</script>

<style lang="scss" scoped>
.card {
    .card_status {
        display: flex;
        align-items: center;

        h3 {
            font-size: 32px;
            font-weight: bold;
            margin: 30px 70px 20px 0;
        }

        h5 {
            font-size: 24px;
            margin: 0px;
        }
    }

    .card_setting {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        .button-4 {
            appearance: none;
            background-color: #FAFBFC;
            box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
            box-sizing: border-box;
            color: #24292E;
            cursor: pointer;
            display: inline-block;
            font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            font-size: 14px;
            line-height: 20px;
            list-style: none;
            position: relative;
            transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            vertical-align: middle;
            white-space: nowrap;
            word-wrap: break-word;
            border-radius: 3px;
            font-weight: 500;
            text-decoration: none;
            border: 2px solid grey;
            padding: 10px 20px;

            &:hover {
                background-color: #F3F4F6;
                text-decoration: none;
                transition-duration: 0.1s;
            }

            &:disabled {
                background-color: #FAFBFC;
                border-color: rgba(27, 31, 35, 0.15);
                color: #959DA5;
                cursor: default;
            }

            &:active {
                background-color: #EDEFF2;
                box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
                transition: none 0s;
            }

            &:focus {
                outline: 1px transparent;

            }

            &::before {
                display: none;

            }

            &:-webkit-details-marker {
                display: none;

            }
        }
    }

    .tabs {

        div {

            &#CardApplic,
            &#CardOrder {
                border-top: 1px solid #E5E0E5;
            }

        }


    }

    .tabs>input[type="radio"] {
        display: none;
    }

    .tabs>div {
        display: none;
    }

    #tab-btn-1:checked~#CardApplic,
    #tab-btn-2:checked~#CardOrder {
        display: block;
    }

    .tabs>label {
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        user-select: none;
        background-color: #f5f5f5;
        border: 1px solid #e0e0e0;
        padding: 10px 20px;
        font-size: 16px;
        line-height: 1.5;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
        cursor: pointer;
        position: relative;
        top: 1px;
    }

    .tabs>label:not(:first-of-type) {
        border-left: none;
    }

    .tabs>input[type="radio"]:checked+label {
        background-color: #fff;
        border-bottom: 1px solid #fff;
    }


}
</style>