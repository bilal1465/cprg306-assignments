'use client'
import { useEffect, useState } from "react";
import "./styles.css"


export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}, `)
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    const item = {
        name,
        quantity,
        category,
    };
 

    return (
        <form>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="bg-blue-800 text-white p-2 rounded"
    placeholder="Name"
  />
  <input
    type="number"
    min={1}
    max={99}
    value={quantity}
    onChange={(e) => setQuantity(e.target.value)}
    required
    className="bg-blue-800 text-white p-2 rounded"
    placeholder="Quantity"
  />
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="bg-blue-800 text-white p-2 rounded"
  >
    <option>Produce</option>
    <option>Dairy</option>
    <option>Bakery</option>
    <option>Frozen Foods</option>
    <option>Canned Goods</option>
    <option>Dry Goods</option>
    <option>Beverages</option>
    <option>Snacks</option>
    <option>Household</option>
    <option>Other</option>
  </select>
  <button
    type="submit"
    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
    onClick={handleSubmit}
  >
    Submit
  </button>
</form>

    )
}