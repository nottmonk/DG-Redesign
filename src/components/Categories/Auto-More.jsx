import React from 'react'

const AutoMore = ({ products }) => {
    console.log(products)
    return (
        <div>
            {products.map(product => (
                <div>
                    <p>{product.title}</p>
                </div>
            ))}




        </div>
    )
}





export default AutoMore
