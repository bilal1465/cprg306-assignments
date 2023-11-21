'use client'

export default function Item({name, quantity, category, onSelect}) { 

    return(
        <li onClick={onSelect}>
            <span>{name} </span>
            <span>buy {quantity} </span>
            <span>in {category}</span>
        </li>
    )
}
