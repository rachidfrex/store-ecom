import React from 'react'

function ProductDetails() {
  return (
    <div>
        <h1 className="text-3xl text-center font-bold mt-10">Product Details</h1>
        <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="col-span-1">
            <img src="https://images.unsplash.com/photo-1624223902823-7d6c7e4f5f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjU0NjN8MHwxfGFsbHwxf" alt="product" className="w-full h-96 object-cover" />
            </div>
            <div className="col-span-2">
                <h2 className="text-2xl font-semibold">Product Name</h2>
                <p className="text-lg">Product Description</p>
                <p className="text-lg">Price: $100</p>
                <button className="bg-violet-500 text-white px-4 py-2 rounded-md mt-4">Add to Cart</button>
                </div>

                </div>

    </div>
  )
}

export default ProductDetails