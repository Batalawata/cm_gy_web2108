import ItemController from '../controllers/ItemController.js'

const urls = {
    item: '/item/',
    getItems: '/items'
}

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post(item, ItemController.createItem)
    // READ
    app.get('/item/all', ItemController.getAllItems)
    // app.get('/items/name', ItemController.getItemNames)
    app.get('/item/name/:name', ItemController.getItemByName)
    app.get('/item/:id', ItemController.getItemById)

    // UPDATE
    app.put('/item/:id', ItemController.updateItemById)

    // DELETE
    app.delete('/item/:id', ItemController.deleteItemById)
}

export default {
    routes,
    urls
}
