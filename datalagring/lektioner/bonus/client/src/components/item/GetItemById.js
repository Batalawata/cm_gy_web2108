import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import css from './Container.module.css'
import CardList from './cards/CardList'

const GetItemById = () => {
    const [oneItem, setOneItem] = useState([])
    const [id, setId] = useState('')

    const getItemById = () => {
        ItemService.getById(id)
            .then(response => {
                const dataArray = []
                dataArray.push(response.data)
                console.log(dataArray)
                setOneItem(dataArray)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <article className={ css.container }>
            <h1>Get item by Id</h1>
            Id: <input type='text'
                       id='id'
                       value={ id }
                       onChange={ event => setId(event.target.value) }/>

            <button onClick={ getItemById }>getItem</button>

            <button onClick={ () => setOneItem([]) }>clear</button>
            <br/>

            { oneItem.length > 0 && oneItem[0].message
                ? <p>{ oneItem[0].message }</p>
                : <CardList items={ oneItem }/> }
        </article>
    )
}

export default GetItemById
