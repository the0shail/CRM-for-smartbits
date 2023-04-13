const product = {
    namespaced: true,
    state: {
        demand: [
            {
                "id": "101",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "name_company": "ООО 'SMARTBITS PRO'",
                "info_lid": {
                    "name": "Алексей",
                    "phone": " +99812345678"
                },
                "status_application": "correction",
                "comment": ""
            },
            {
                "id": "102",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "name_company": "ООО 'SMARTBITS PRO'",
                "info_lid": {
                    "name": "Алексей",
                    "phone": " +99812345678"
                },
                "status_application": "correction",
                "comment": ""
            },
            {
                "id": "103",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "name_company": "ООО 'SMARTBITS PRO'",
                "info_lid": {
                    "name": "Алексей",
                    "phone": " +99812345678"
                },
                "status_application": "correction",
                "comment": ""
            },
        ],
        orders: [
            {
                "id": "101",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",

                "status_order": "delivery",
                "manager": "Иванов И.И.",
                "partner": "SmartBits",
                "counterparty": {
                    "1": "ООО 'SMARTBITS PRO'",
                    "2": "ООО 'SMARTBITS PRO'",
                    "3": "ООО 'SMARTBITS PRO'"
                },
                "contact_user": {
                    "user_name": "Петров Петр Петрович",
                    "user_position": "Менеджер закупок",
                    "phone_number": "234-56-78",
                    "mobile_number": "+7-987-654-32-10",
                    "email": "sale@example.ru",
                    "telegram": "@Petior",
                },
                "client": "Петров Петр",
                "product_info": [
                    { "id": "1", "name_product": "Доставка груза VAS554676", "quantity": "1", "price": "5045" }
                ],
                "comment": ""
            },
            {
                "id": "102",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",

                "status_order": "delivery",
                "manager": "Иванов И.И.",
                "partner": "SmartBits",
                "counterparty": {
                    "1": "ООО 'SMARTBITS PRO'",
                    "2": "ООО 'SMARTBITS PRO'",
                    "3": "ООО 'SMARTBITS PRO'"
                },
                "contact_user": {
                    "user_name": "Петров Петр Петрович",
                    "user_position": "Менеджер закупок",
                    "phone_number": "234-56-78",
                    "mobile_number": "+7-987-654-32-10",
                    "email": "sale@example.ru",
                    "telegram": "@Petior",
                },
                "client": "Петров Петр",
                "product_info": [
                    { "id": "1", "name_product": "Доставка груза VAS554676", "quantity": "1", "price": "5045" }
                ],
                "comment": ""
            },
            {
                "id": "103",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",

                "status_order": "delivery",
                "manager": "Иванов И.И.",
                "partner": "SmartBits",
                "counterparty": {
                    "1": "ООО 'SMARTBITS PRO'",
                    "2": "ООО 'SMARTBITS PRO'",
                    "3": "ООО 'SMARTBITS PRO'"
                },
                "contact_user": {
                    "user_name": "Петров Петр Петрович",
                    "user_position": "Менеджер закупок",
                    "phone_number": "234-56-78",
                    "mobile_number": "+7-987-654-32-10",
                    "email": "sale@example.ru",
                    "telegram": "@Petior",
                },
                "client": "Петров Петр",
                "product_info": [
                    { "id": "1", "name_product": "Доставка груза VAS554676", "quantity": "1", "price": "5045" }
                ],
                "comment": ""
            },
            {
                "id": "104",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",

                "status_order": "delivery",
                "manager": "Иванов И.И.",
                "partner": "SmartBits",
                "counterparty": {
                    "1": "ООО 'SMARTBITS PRO'",
                    "2": "ООО 'SMARTBITS PRO'",
                    "3": "ООО 'SMARTBITS PRO'"
                },
                "contact_user": {
                    "user_name": "Петров Петр Петрович",
                    "user_position": "Менеджер закупок",
                    "phone_number": "234-56-78",
                    "mobile_number": "+7-987-654-32-10",
                    "email": "sale@example.ru",
                    "telegram": "@Petior",
                },
                "client": "Петров Петр",
                "product_info": [
                    { "id": "1", "name_product": "Доставка груза VAS554676", "quantity": "1", "price": "5045" }
                ],
                "comment": ""
            },

        ]
    },
    getters: {
        vuexGetDemand: ({ demand }) => demand,
        vuexGetOrders: ({ orders }) => orders,
        vuexGetDemandAsId: (state) => (id) => {
            return state.demand.find(todo => todo.id === id)
        },
        vuexGetOrdersAsId: (state) => (id) => {
            return state.orders.find(todo => todo.id === id)
        }
    },
    mutations: {

    },
    actions: {

    },
}

export default product