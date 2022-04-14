import css from './Table.module.css'

const Card = ({ item }) => {
    return (
        <tr className={ css.border }>
            <td className={ css.border }>{ item._id }</td>
            <td className={ css.border }>{ item.name }</td>
            <td className={ css.border }>{ item.age }</td>
            <td className={ css.border }>{ item.gender }</td>
        </tr>
    )
}

export default Card
