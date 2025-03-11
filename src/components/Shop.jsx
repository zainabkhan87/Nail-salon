import React from 'react'
import cream1 from '../assets/cream1.jpg'
import cream2 from '../assets/cream2.jpg'


const products=[
    {
        id: 1,
        name:"ANISE SHORT BREAD HAND CREAM",
        image:cream1,
    },
    {
        id: 2,
        name:"TENDERNESS HAND CREAM",
        image:cream2,
    },
    {
        id: 3,
        name:"ANISE SHORT BREAD HAND CREAM",
        image:cream1,
    }
]
function Shop() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <h2 className=" italic text-3xl font-bold text-gray-800">Our Shop</h2>
      <p className="text-gray-500 text-sm text-center max-w-lg mt-2">
        THE LATEST COLLECTION FROM OUR FAVORITE PROFESSIONAL BRAND. VISIT OUR STORE FOR SKIN CARE AND OTHER PROFESSIONAL.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-contain" />
            <h3 className=" font-bold mt-4 text-lg font-medium text-black text-center">{product.name}</h3>
            <button className=" font-semibold mt-4 bg-white border-3 text-black px-4 py-2 rounded-md hover:bg-pink-500">
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Shop
