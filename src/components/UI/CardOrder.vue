<template>
    <div class="order">
        <div class="info_order">
            <div class="info_created">
                <label for="created_date">Дата создания</label>
                <input type="date" id="created_date" value="11.03.2023" disabled>
            </div>
            <div class="info_manager">
                <label for="manager">Менеджер</label>
                <input type="text" id="manager" value="Иванов И.И." disabled>
            </div>
        </div>
        <div class="client">
            <h3>Клиент</h3>
            <div class="client_partner">
                <label for="partner">Менеджер</label>
                <input type="text" id="partner" value="SmartBits">
            </div>
            <div class="client_counterparty">
                <label for="counterparty">Контрагент</label>
                <input type="text" id="counterparty"  value="ООО 'SMARTBITS PRO'">
                <div class="drop">
                    <ul>
                        <li>Петров Петр Петрович</li>
                        <li>Петров Петр Петрович</li>
                        <li>Петров Петр Петрович</li>
                    </ul>
                </div>
            </div>
            <div class="client_contact">
                <label for="contact">Менеджер</label>
                <input type="text" id="contact" value="Петров Петр Петрович">
                <div class="drop">
                    <ul>
                        <li>Петров Петр Петрович</li>
                        <li>Петров Петр Петрович</li>
                        <li>Петров Петр Петрович</li>
                    </ul>
                </div>
            </div>
            <div class="client_comment">
                <label for="comment">Комментарий</label>
                <input type="text" id="comment">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({


})
</script>

<style lang="scss" scoped></style>