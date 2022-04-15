import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'
import CardList from './cards/CardList'

const UpdateItem = () => {
    const [item, setItem] = useState([])
    const [id, setId] = useState('')
    const [title, setTitle] = useState('new Title')
    const [deadline, setDeadline] = useState('20.04.2022-12:00')
    const [isDone, setIsDone] = useState(false)

    const updateItem = () => {
        const payload = {
            'title': title,
            'deadline': deadline,
            'isDone': isDone
        }
        ItemService.updateItemById(id, payload)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setItem(dataArray)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <article className={ css.container }>
            <h1>Update Item</h1>
            <div className={css.singlediv}>
            Id: <input type='text'
                         id='id'
                         value={ id }
                         onChange={ event => setId(event.target.value) }/>
            </div>
            <div className={css.singlediv}>
            Title: <input type='text'
                         id='title'
                         value={ title }
                         onChange={ event => setTitle(event.target.value) }/>
            </div>
            <div className={css.singlediv}>
            Deadline: <input type='datetime-local'
                        id='deadline'
                        value={ deadline }
                        onChange={ event => setDeadline(Date(event.target.value)) }/>
            <br/></div>
            <div className={css.singlediv}>
            isDone: <input type='checkbox'
                           id='isDone'
                           value={ isDone }
                           onChange={ event => setIsDone(event.target.value) }/>
            <br/></div>

            <button onClick={ function () {
                updateItem()
            } }>Update item
            </button>
            <button onClick={ function () {
                setItem([])
            } }>clear
            </button>
            { item.length > 0 && item[0].message
                ? <p>{ item[0].message }</p>
                : <CardList items={ item }/> }
        </article>
    )
}

export default UpdateItem
