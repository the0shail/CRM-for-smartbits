<template>
    <nav class="box">
        <router-link to="/" class="nav-brand">
            <div class="cycle"></div>
            <h4 class="nav-text">
                CRM
            </h4>
        </router-link>
        <button class="button" @click="toggleMenuNav()" role="button"> menu</button>
        <ul class="nav-collapse">
            <li class="nav-link">
                <router-link to="" class="icon-system">
                    <font-awesome-icon icon="fa-solid fa-user-group" style="color: #000000;" />
                </router-link>
                <router-link to="" class="icon-system">
                    <font-awesome-icon icon="fa-solid fa-user-large" style="color: #000000;" />
                </router-link>

            </li>
            <li class="nav-link persone">
                Иванов Иван (менеджер)
            </li>
            <li class="nav-link">
                <router-link to="" class="icon-system">
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" style="color: #000000;" />
                </router-link>
            </li>
        </ul>

    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    methods: {
        toggleMenuNav() {
            const nav = document.querySelector('.nav-collapse')
            nav?.classList.toggle("active");
        }
    }

})
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    box-shadow: 1px 3px 5px rgb(189, 189, 189);
    height: auto;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }


    .nav-brand {
        display: flex;
        align-items: center;
        text-decoration: none;

        .nav-text {

            font-weight: 400;
            text-transform: uppercase;
            font-size: 20px;
            color: black;
        }

        .cycle {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: rgb(33, 36, 129);
            margin-right: 10px;
        }
    }

    button {
        display: none;
        text-transform: capitalize;
        border: #e9e9e9 2px solid;
        background-color: transparent;
        padding: 10px 20px;
        border-radius: 3px;
        color: #000;

        @media screen and (max-width: 768px) {
            display: block;
        }
    }

    .nav-collapse {
        display: flex;
        align-items: center;
        list-style: none;
        transition: 1000ms;

        &.active {
            display: flex;
        }

        @media screen and (max-width: 768px) {
            // position: absolute;
            background-color: #fff;
            padding: 20px;
            width: 100%;
            left: 0;
            bottom: -80px;
            border-top: 1px solid #e9e9e9;
            box-sizing: border-box;
            justify-content: space-between;
            margin: 0;
            padding: 10px 0px;
            display: none;
        }


        .nav-link {
            font-size: 22px;

            @media screen and (max-width: 768px) {
                display: flex;
            }

            .icon-system {
                position: relative;
                padding: 10px;

                @media screen and (max-width: 768px) {
                    font-size: 22px;
                }
            }

            &.persone {
                font-size: 16px;
                font-weight: 500;
                padding: 0 10px;
            }
        }
    }
}
</style>