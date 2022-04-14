import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'

const CreateItem = () => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('Item title')
    const [deadline, setDeadline] = useState(Date.now().toLocaleString)
    const [isDone, setIsDone] = useState('Female')

    const createItem = () =>{
        const payload = {
            'title': title,
            'deadline': deadline,
            'isDone': isDone
        }
        ItemService.createItem(payload)
            .then(response => {
                setText(response.statusText)
            })
            .catch(error => {
                console.error(error.messdeadline)
            })
    }

    return (
        <article classTitle={css.container}>
            <h1>Create Item</h1>
            Title: <input type='text'
                         id='title'
                         value={ title }
                         onChange={ event => setTitle(event.target.value) }/>
            <br/>

            Deadline: <input type='date'
                        id='deadline'
                        value={ deadline }
                        onChange={ event => setDeadline(event.target.value) }/>
            <br/>

            IsDone: <input type='text'
                           id='isDone'
                           value={ isDone }
                           onChange={ event => setIsDone(event.target.value) }/>
            <br/>

            <button onClick={ function () {
                createItem()
            } }>Create item
            </button>
            <button onClick={ function () {
                setText('')
            } }>clear
            </button>
            <p>{ text }</p>

        </article>
    )
}

export default CreateItem
