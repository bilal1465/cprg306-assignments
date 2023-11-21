'use client'

import { useState } from "react"
import Item from "./item"

export default function ItemList( {items, onItemSelect} ) {   
    
    const [sortBy, setSortBy] = useState("name")

    function setSortByName() {
        setSortBy("name");
    }

    function setSortByCategory() {
        setSortBy("category");
    }
    

    let sortedItems;
    
    if (sortBy == "name") {
        sortedItems = items.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        sortedItems = items.sort((a, b) => a.category.localeCompare(b.category));
    }

    console.log(sortedItems);

    return (
       <div>
            <div className="flex items-center">
                <h3 className="text-black px-5">Sort By: </h3>
                <button id="nameButton" className={`${
                sortBy === "name" ? "bg-green-300" : "bg-gray-300"} hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded`}
                onClick={setSortByName}>Name</button>
                <button id="categoryButton" className={`${
                sortBy === "category" ? "bg-green-300" : "bg-gray-300"} hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded`} onClick={setSortByCategory}>Category</button>
            </div>
        <ul className="text-white text-left">
        {sortedItems.map((item) => (
            <Item  onSelect={onItemSelect} key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
        ))}
        </ul>
       </div>
    )
}