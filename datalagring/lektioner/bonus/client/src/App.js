import css from './App.module.css'
import Alive from './components/Alive'
import CreateItem from './components/item/CreateItem'
import GetAllItems from './components/item/GetAllItems'
import GetItemById from './components/item/GetItemById'
import UpdateItem from './components/item/UpdateItem'
import DeleteItem from './components/item/DeleteItem'

function App() {
    return (
        <>
            <h1>App</h1>
            <Alive/>

            <div className={css.container}>
                <div>
                    <GetAllItems/>
                    <GetItemById/>
                </div>
                <div>
                    <CreateItem/>
                    <UpdateItem/>
                    <DeleteItem/>
                </div>
            </div>

        </>
    )
}

export default App
