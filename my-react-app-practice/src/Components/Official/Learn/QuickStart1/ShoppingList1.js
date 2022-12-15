import React from 'react'


const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];


const ShoppingList = () => {

    const listItems = products.map((items) => {
        return (
            <li key={items.id}
                style={{ color: items.isFruit ? 'Red' : 'Green' }}
            >{items.title}</li>
        )
    });

    return (
        <div>
            <h3>map for array</h3>
            <ul>{listItems}</ul>
        </div>
    )
}

export default ShoppingList;
