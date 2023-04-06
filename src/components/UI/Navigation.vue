<template>
    <nav class="navigation">
        <ul class="nav_list">
            <li data-href-activate="/"><router-link to="/">Заявки</router-link></li>
            <li data-href-activate="/orders"><router-link to="/orders">Заказы</router-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Navigation',
    methods: {
        activateLink() {
            const links: NodeListOf<HTMLElement> = document.querySelectorAll('.nav_list li');

            links.forEach((link) => {
                let linkDataset = link.dataset.hrefActivate;
                if (linkDataset === this.$route.fullPath) link.classList.add('active');
            })
        }
    },
    mounted() {
        this.activateLink()
    }
})
</script>

<style lang="scss" scoped>
nav.navigation {
    // #554D85
    border-bottom: 1px solid #E5E0E5;
    margin: 20px 0;

    .nav_list {
        display: flex;
        // align-items: end;
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            padding: 10px 0px;

            a {
                text-decoration: none;
                font-weight: 600;
                font-size: 24px;
                color: #636363;
                padding: 10px 20px;
            }

            &.active {
                border-bottom: 3px solid #554D85;

                a {
                    color: #554D85;
                }
            }
        }
    }
}
</style>