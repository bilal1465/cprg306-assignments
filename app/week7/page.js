'use client'

import ItemList from "./item-list"
import NewItem  from "./new-item"
import itemsData from "./item.json"
import { useState } from "react"
import MealIdeas from "./meal-ideas"


export default function Page() {

    const [items, setItems] = useState(itemsData)
    const [selectedItemName, setItemName] = useState("")

    const handleAddItem = (item) => {
      setItems([...items, item]);
    };

    const handleItemSelect = (event) => {
      let itemName = event.target.closest('li').querySelector('span').textContent;
      itemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
      itemName = itemName.trim();
      itemName = itemName.split(",")[0];
      setItemName(itemName);    
    }

    console.log(selectedItemName);
    return (
      <main className="text-center p-6 flex">
        <div className="flex flex-col mr-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList className="" onItemSelect={handleItemSelect} items={items} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  }