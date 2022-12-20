import React from 'react'


const ProductCategoryRow = ({category})=>{
    return (
        <tr colSpan="2">
            <th>{category}</th>
        </tr>
    );
}

const ProductRow = ({ product }) => {
    const name = product.stocked ? (product.name) : <span
        style={{ color: 'red' }}>{ product.name}</span>
    return (
        <tr>
            <td>{name}</td>
            <td>{ product.price }</td>
        </tr>
    );
}

const ProductTable = ({ products }) => {
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow category={product.category}
                    key={product.category} />
            );
        }

        rows.push(
            <ProductRow key={product.name} product={product} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

const SearchBar = () => {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <br/>
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}


const FilterProductTable = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}


const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

const ThinkingInReact = () => {
    return (
        <div style={{border:'1px solid teal'}}>
            <FilterProductTable products={PRODUCTS} />
        </div>
    )
}

export default ThinkingInReact
