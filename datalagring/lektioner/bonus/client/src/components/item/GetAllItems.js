import { useState } from 'react'
import ItemService from '../../utils/api/service/ItemService'
import CardList from './cards/CardList'
import css from './Container.module.css'

const GetAllItems = () => {
    const [allItems, setAllItems] = useState([])

    const getAllItems = () => {
        ItemService.getAll()
            .then(res => {
                setAllItems(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <article className={css.container}>
            <h1>Get all items</h1>
            <button onClick={ getAllItems }>getItems</button>
            <button onClick={ () => {setAllItems([])} }>clear</button>
            <br/>
            <CardList items={allItems} />
        </article>
    )
}

export default GetAllItems
