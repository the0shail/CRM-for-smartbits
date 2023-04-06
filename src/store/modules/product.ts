const product = {
    namespaced: true,
    state: {
        products: [
            {
                "id": "101",
                "created_date": "11.03.2023",
                "manager": "не назначен",
                "status": "новый",
                "info_lid": "Алексей +99812345678",
                "comment": ""
            }
        ]
    },
    getters: {
        vuexGetProducts: ({ products }) => products,
    },
    mutations: {

    },
    actions: {

    },
}

export default product