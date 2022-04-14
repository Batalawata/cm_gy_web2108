import Card from './Card'
import css from './Table.module.css'

const CardList = ({ items }) => {

    return (
        <>
            { items.length === 0 ? <><div>You have no todos!</div></> : <table className={ css.border }>
                <thead>
                <tr className={ css.border }>
                    <th className={ `${ css.border }, ${ css.idWidth }` }>Id</th>
                    <th className={ `${ css.border }, ${ css.nameWidth }` }>Title</th>
                    <th className={ `${ css.border }, ${ css.ageWidth }` }>Deadline</th>
                    <th className={ `${ css.border }, ${ css.genderWidth }` }>isDone</th>
                </tr>
                </thead>
                <tbody>
                { items.map(item => (
                    <Card key={ item._id } item={ item }/>
                )) }
                </tbody>

            </table> }
        </>
    )
}

export default CardList
