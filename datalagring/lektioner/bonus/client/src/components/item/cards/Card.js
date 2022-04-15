import css from './Table.module.css'

// function swedify(input) {
//     let options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
//     return input.toLocaleString('se-SV', options)
// }

const Card = ({ item }) => {
    return (
        <tr className={ css.border }>
            <td className={ css.border }>{ item._id }</td>
            <td className={ css.border }>{ item.title }</td>
            <td className={ css.border }>{ item.deadline }</td>
            <td className={ css.border }>{ <input type="checkbox" checked={item.isDone} onChange={() => {}}/> }</td>
        </tr>
    )
}

export default Card
