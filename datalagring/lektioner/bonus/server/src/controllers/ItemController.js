// import itemDatabase from '../data/itemDatabase.js' - deprecated
import Logger from '../utils/Logger.js'
import ItemModel from '../models/ItemModel.js'
import StatusCode from '../utils/StatusCode.js'

// Make function asynchronus
const createItem = async (req, res) => {
    Logger.info('createItem()')
    Logger.http(req.body)
    const { title, deadline, isDone } = req.body
    if (title && deadline && isDone) {
        const newObject = {
            title: title,
            deadline: Date(deadline),
            isDone: isDone
        }
        Logger.debug(newObject)
        // Old
        // itemDatabase.push(newObject)
        // Logger.info(itemDatabase[itemDatabase.length - 1])
        // res.status(StatusCode.CREATED).send(itemDatabase[itemDatabase.length - 1])

        // Mongoose
        try {
            const item = new ItemModel(newObject)
            const response = await item.save()
            Logger.debug(response)
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({
                error: 'Error creating item'
            })
        }
    } else {
        Logger.error('title, deadline or isDone failed')
        res.status(StatusCode.NO_CONTENT).send('No body')
    }
}

const getAllItems = (req, res) => {
    // old
    // Logger.info('getAllItems()')
    // res.status(StatusCode.OK).send(itemDatabase)

    // Mongoose
    try {
        // Callback solves error handling, items = response
        ItemModel.find({}, (error, items) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting items'
                })
            } else {
                Logger.info(items)
                res.status(StatusCode.OK).send(items)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting items'
        })
    }
}

// old
// const itemNames = () => {
//     const names = []
//     itemDatabase.forEach(item => {
//         names.push({
//             name: item.name
//         })
//     })
//     return names
// }

const getItemNames = (req, res) => {
    // old
    // const responseFromDb = itemNames()
    // res.status(StatusCode.OK).send(responseFromDb)

    // Mongoose
    try {
        ItemModel.find({}, 'titles', (error, items) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting items'
                })
            } else {
                Logger.info(items)
                res.status(StatusCode.OK).send(items)
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting items'
        })
    }
}

// old
// const searchItemByName = (name) => {
//     let object = `Could not find "${ name }" in database`
//     itemDatabase.forEach(item => {
//         if (name === item.name) {
//             object = item
//             return item
//         }
//     })
//     return object
// }

const getItemByName = (req, res) => {
    // const name = req.params.name
    // const responseFromDb = searchItemByName(name)
    // res.status(StatusCode.OK).send(responseFromDb)

    // Mongoose
    try {
        ItemModel.find({ name: req.params.name }, (error, item) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting item'
                })
            } else {
                Logger.info(item)
                res.status(StatusCode.OK).send(item.length > 0 ? item : {
                    message: `Item with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting item'
        })
    }
}

const getItemById = (req, res) => {
    try {
        ItemModel.findById(req.params.id, (error, item) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting item'
                })
            } else {
                Logger.info(item)
                res.status(StatusCode.OK).send(item ? item : {
                    message: `Item with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting item'
        })
    }
}

// old
// const modifyItemByName = (name, newName, age, gender) => {
//     let object = `Could not find "${ name }" in database`
//     itemDatabase.forEach(item => {
//         if (name === item.name) {
//             item.name = newName
//             item.age = age
//             item.gender = gender
//             object = item
//             return item
//         }
//     })
//     return object
// }
// const updateItemByName = (req, res) => {
//     const { name, newName, age, gender } = req.body
//     const response = modifyItemByName(name, newName, age, gender)
//     res.status(202).send(response)
// }

// Update item parametersname
const updateItemById = (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    try {
        const updatedItem = {
            title: req.body.title,
            deadline: req.body.deadline.toLocaleString('sv-SE', options),
            isDone: req.body.isDone
        }
        Logger.debug(req.params.id)
        Logger.debug(updatedItem)
        ItemModel.findByIdAndUpdate(req.params.id, updatedItem, { new: true }, (error, item) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating item with id ' + req.params.id
                })
            } else {
                Logger.info(item)
                res.status(StatusCode.OK).send(item ? item : {
                    message: `Item with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating item'
        })
    }
}
// write update function for item model


// old
// const removeItemByName = (name) => {
//     let text = `Item with name: "${ name }" `
//
//     for (let i = 0; i < itemDatabase.length; i++) {
//         if (name === itemDatabase[i].name) {
//             text += `was deleted from database!`
//             itemDatabase.splice(i, 1)
//             return text
//         }
//     }
//
//     text += `don't exist in database!`
//     return text
// }
// const deleteItemByName = (req, res) => {
//     const name = req.params.name
//     const responseFromDB = removeItemByName(name)
//     res.status(StatusCode.OK).send(responseFromDB)
// }

const deleteItemById = (req, res) => {
    try {
        ItemModel.findByIdAndRemove(req.params.id, (error, item) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting item'
                })
            } else {
                Logger.info(item)
                res.status(StatusCode.OK).send(
                    item
                        ? {
                            message: `Item with id '${ req.params.id }' was deleted from database!`
                        }
                        : {
                    message: `Item with id '${ req.params.id }' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting item'
        })
    }
}
export default {
    createItem,
    getAllItems,
    getItemNames,
    getItemByName,
    getItemById,
    updateItemById,
    deleteItemById
}
