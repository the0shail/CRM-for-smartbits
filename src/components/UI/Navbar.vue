<template>
    <nav class="box">
        <router-link to="/" class="nav-brand">
            <div class="cycle"></div>
            <h4 class="nav-text">
                CRM
            </h4>
        </router-link>
        <ul class="nav-collapse">
            <li class="nav-link">
                <router-link to="" class="persone">
                    <font-awesome-icon icon="fa-solid fa-user-group" style="color: #000000;" />
                </router-link>
                <router-link to="" class="persone">
                    <font-awesome-icon icon="fa-solid fa-user-large" style="color: #000000;" />
                </router-link>

            </li>
            <li class="nav-link">
                <span>Иванов Иван (менеджер)</span>
            </li>
            <li class="nav-link">
                <router-link to="">
                    <font-awesome-icon icon="fa-solid fa-right-from-bracket" style="color: #000000;" />
                </router-link>
            </li>
        </ul>

    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({


})
</script>

<style lang="scss" scoped>
nav {
    width: 100%;
    box-shadow: 1px 3px 5px rgb(189, 189, 189);
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;


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
    .nav-collapse{
        display: flex;
        align-items: center;
        list-style: none;

        .nav-link{
            margin: 0 10px;
            font-size: 22px;
            .persone{
                position: relative;
                &:last-child{
                    margin-left: 10px;
                }
                // &::after{
                //     content: '9+';
                //     font-size: 10px;
                //     font-weight: 500;
                //     color: white;
                //     position: absolute;
                //     width: 17px;
                //     height: 17px;
                //     right: -5px;
                //     top: -5px;
                //     border-radius: 50%;
                //     text-align: center;
                //     background-color: rgb(0, 145, 255);
                // }
            }
            span{
                font-size: 18px;
            }
        }
    }
}
</style>