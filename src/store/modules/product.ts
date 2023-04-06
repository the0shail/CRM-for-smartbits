const product = {
    namespaced: true,
    state: {
        applications: [
            {
                "id": "101",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "info_lid": "Алексей +99812345678",
                "comment": ""
            }, {
                "id": "101",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "info_lid": "Алексей +99812345678",
                "comment": ""
            }, {
                "id": "101",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "info_lid": "Алексей +99812345678",
                "comment": ""
            }
        ],
        orders: [
            {
                "id": "104",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",
                "manager": "Иванов И.И.",
                "client": "Петров Петр",
                "comment": ""
            }, {
                "id": "104",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",
                "manager": "Иванов И.И.",
                "client": "Петров Петр",
                "comment": ""
            }, {
                "id": "104",
                "created_date": "11.03.2023",
                "price": "132",
                "status_payment": "Счёт выставлен",
                "status_product": "Товар забронирован",
                "manager": "Иванов И.И.",
                "client": "Петров Петр",
                "comment": ""
            }
        ]
    },
    getters: {
        vuexGetApplications: ({ applications }) => applications,
        vuexGetOrders: ({ orders }) => orders,
    },
    mutations: {

    },
    actions: {

    },
}

export default product