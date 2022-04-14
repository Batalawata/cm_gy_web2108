import http from '../MyApi'

const ItemService = {
    createItem: (item) => {
        return http.post('/item', item)
    },

    getAll: () => {
        return http.get('/item/all')
    },

    getByName: (name) => {
        return http.get(`/item/name/${name}`)
    },

    getById: (id) => {
        return http.get(`/item/${id}`)
    },

    updateItemById: (id, item) => {
        return http.put(`/item/${id}`, item)
    },

    deleteItemById: (id) => {
        return http.delete(`/item/${id}`)
    }
}

export default ItemService
