import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'
import { useState } from 'react'

const DeleteItem = () => {
    const [text, setText] = useState('')
    const [id, setId] = useState('')

    const deleteItemById = () => {
        ItemService.deleteItemById(id)
            .then(res => {
                setText(res.data.message)
            })
            .catch(err => {
                setText(err.response.data.message)
            })
    }

    return (
        <article className={ css.container }>
            <h1>DeleteItem</h1>

            Id: <input type='string'
                       id='id'
                       value={ id }
                       onChange={ event => setId(event.target.value) }/>
            <br/>

            <button onClick={ function () {
                deleteItemById()
            } }>Delete item
            </button>
            <button onClick={ function () {
                setText('')
            } }>clear
            </button>
            <p>{ text }</p>
        </article>
    )
}

export default DeleteItem
