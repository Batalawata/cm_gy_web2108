import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'

const CreateItem = () => {
    const [text, setText] = useState('')
    const [title, setTitle] = useState('')
    const [deadline, setDeadline] = useState('')
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
                console.error(error.message)
            })
    }

    return (
        <article className={css.container}>
            <h1>Create Item</h1>
            <div className={css.singlediv}>
            Title: <input type='text'
                         id='title'
                         placeholder={ 'New Item' }
                         value={ title }
                         onChange={ event => setTitle(event.target.value) }/>
            <br/>
            </div>
            <div className={css.singlediv}>
            Deadline: <input type='datetime'
                        id='deadline'
                        placeholder={ '2022-05-01' }
                        value={ deadline }
                        onChange={ event => setDeadline(event.target.value) }/>
            <br/>
            </div>
            <div className={css.singlediv}>
            IsDone: <input type='checkbox'
                           id='isDone'
                           disabled={true}
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
