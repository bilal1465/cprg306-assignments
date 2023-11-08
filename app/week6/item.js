'use client'

export default function Item({name, quantity, category}) {
    return(
        <li>
            <span>{name} </span>
            <span>buy {quantity} </span>
            <span>in {category}</span>
        </li>
    )
}
