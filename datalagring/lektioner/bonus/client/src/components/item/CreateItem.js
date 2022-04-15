import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'

const CreateItem = () => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('Item title')
    const [deadline, setDeadline] = useState('22-04-20 ')
    const [isDone, setIsDone] = useState(false)

    const createItem = () =>{
        const payload = {
            'title': title,
            'deadline': deadline,
            'isDone': isDone
        }
        ItemService.createItem(payload)
            .then(response => {
                setText(response.statusText)
                setTitle('')
                setDeadline('')
                setIsDone(false)
            })
            .catch(error => {
                console.error(error.messdeadline)
            })
    }

    return (
        <article className={css.container}>
            <h1>Create Item</h1>
            <div className={css.singlediv}>
            Title: <input type='text'
                         id='title'
                         value={ title }
                         onChange={ event => setTitle(event.target.value) }/>
            <br/>
            </div>
            <div className={css.singlediv}>
            Deadline: <input type='datetime-local'
                        id='deadline'
                        value={ deadline }
                        onChange={ event => setDeadline(event.target.value) }/>
            <br/>
            </div>
            <div className={css.singlediv}>
            IsDone: <input type='checkbox'
                           id='isDone'
                           value={ isDone }
                           onChange={ event => setIsDone(event.target.value) }/>
            <br/>
            </div>
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
