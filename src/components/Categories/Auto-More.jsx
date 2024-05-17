import React from 'react'

const AutoMore = ({ products }) => {
    console.log(products)
    return (
        <div>
            {products.map(product => (
                <div>
                    <h1>{product.title}</h1>

                </div>
            ))}




        </div>
    )
}





export default AutoMore
