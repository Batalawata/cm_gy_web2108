import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const dbCollection = process.env.MONGODB_COLLECTION     // item collection

const ItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
})

const ItemModel = new mongoose.model(dbCollection, ItemSchema)

export default ItemModel
