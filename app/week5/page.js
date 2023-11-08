'use client'

import ItemList from "./item-list"


export default function Page() {
    return (
      <main className="text-center p-6">
        <h1 className="text-3xl text-blue-900">Shopping List</h1>
        <div className="text-left">
          <div className="mx-auto max-w-lg bg-white p-4 shadow-lg rounded-lg">
            <ItemList />
          </div>
        </div>
      </main>
    );
  }