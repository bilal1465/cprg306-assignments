'use client'

import ItemList from "./item-list"
import NewItem  from "./new-item"
import itemsData from "./item.json"
import { useState } from "react"


export default function Page() {

    const [items, setItems] = useState(itemsData)

    const handleAddItem = (item) => {
      setItems([...items, item]);
    };

    return (
      <main className="text-center p-6">
        <h1 className="text-3xl text-blue-900">Shopping List</h1>
        <div className="text-left">
          <div className="mx-auto max-w-lg bg-white p-4 shadow-lg rounded-lg">
            <ItemList items={items}/>
          </div>
          <div>
            <NewItem onAddItem={handleAddItem}/>
          </div>
        </div>
      </main>
    );
  }