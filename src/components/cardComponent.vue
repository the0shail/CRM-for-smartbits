<template>
    <div class="card">
        <!-- {{ requestDataWithVuex() }} -->
        <div class="card_status">
            <h3>Заявка {{ $route.params.id }}</h3>
            <h5>Доставка</h5>
        </div>
        <div class="card_setting">
            <button>Закрыть</button>
            <button>История</button>
        </div>
        <div class="tabs">
            <input type="radio" name="tab-btn" id="tab-btn-1" value="">
            <label for="tab-btn-1">Заявка</label>
            <input type="radio" name="tab-btn" id="tab-btn-2" value="" checked>
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

import CardOrder from '@/components/UI/CardOrder.vue'
import CardApplication from '@/components/UI/CardApplication.vue'


export default defineComponent({
    name: "cardComponent",
    components: {
        CardOrder, CardApplication
    },
    methods: {

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

        button {
            background-color: transparent;
            border-radius: 3px;
            font-weight: 500;
            border: 2px solid grey;
            padding: 10px 20px;

            &:focus {
                background-color: rgb(223, 223, 223);
            }
        }
    }

    .card_tabs {
        display: flex;
        list-style: none;
        margin-bottom: 30px;
        border-bottom: 1px solid #E5E0E5;

        li {
            padding: 20px;
            border: 1px solid #E5E0E5;
            background-color: #f6f6f6;
            border-bottom: none;
            border-top-right-radius: 3px;
            border-top-left-radius: 3px;


            &:first-child {
                border-right: none;
            }

            &.active {
                position: relative;
                background-color: #fff;

                // border-bottom: 3px solid #fff;
                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: #ffffff;
                    bottom: -2px;
                    left: 0;
                }
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
        /* скрыть контент по умолчанию */
        display: none;
        // border: 1px solid #e0e0e0;
        // font-size: 16px;
    }

    /* отобразить контент, связанный с вабранной радиокнопкой (input type="radio") */
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