import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'
import CardList from './cards/CardList'

const UpdateItem = () => {
    const [item, setItem] = useState([])
    const [id, setId] = useState('')
    const [name, setName] = useState('Adam')
    const [age, setAge] = useState(29)
    const [gender, setGender] = useState('Male')

    const updateItem = () => {
        const payload = {
            'name': name,
            'age': age,
            'gender': gender
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

            Id: <input type='string'
                       id='id'
                       value={ id }
                       onChange={ event => setId(event.target.value) }/>
            <br/>

            Name: <input type='text'
                         id='name'
                         value={ name }
                         onChange={ event => setName(event.target.value) }/>
            <br/>

            Age: <input type='number'
                        id='age'
                        value={ age }
                        onChange={ event => setAge(Number(event.target.value)) }/>
            <br/>

            Gender: <input type='text'
                           id='gender'
                           value={ gender }
                           onChange={ event => setGender(event.target.value) }/>
            <br/>

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
