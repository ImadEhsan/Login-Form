


import React, { useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'
import products from '../products'
import axios from 'axios'
import Loader from '../components/loader'


const SingleProduct = () => {

    const {id} = useParams()
    // const product = products.find(product => product.id == id)

    const [product, setProducts] = useState({})
    const [loader, setLoader] = useState(false)



    useEffect(()=>{
      fetchProduct()
    },[])

    const fetchProduct = async () => {
      try {
        setLoader(true)
        const api = 'https://fakestoreapi.com/products';
        const {data} = await axios.get('https://fakestoreapi.com/products/' + id)
        setProducts(data)
        setLoader(false)
    } catch (error){
      setLoader(false)
      console.error(error.message);
    }
  }

  return (
  <>
     { 
      loader ? <div className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'><Loader /></div>: (
        product && <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
        <div className="md:flex-1 px-4">
          <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img class="w-full h-full object-cover" src={product && product.image} alt="Product Image"/>  </div>
          <div className="flex -mx-2 mb-4">
            <div className="w-1/2 px-2">
              <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
            </div>
            <div className="w-1/2 px-2">
              <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
            </div>
          </div>
        </div>
        <div className="md:flex-1 px-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {product && product.title}
          </h2>
          
          <div className="flex mb-4">
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
              <span className="text-gray-600 dark:text-gray-300">
                Rs  {product && product.price}
              </span>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
              {/* {product && product.rating.count > 0 ? (
                  <span className="text-gray-600 dark:text-gray-300">
                  Stock: {product && product.rating.count} </span>
              ): (
                  <span className="text-red-500 text-2xl">
                      Out of Stock
                  </span>
              ) } */}
            </div>
          </div>
                {/* <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                  <div className="flex items-center mt-2">
                    <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                    <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                  </div>
                </div> */}
                {/* <div className="mb-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                  <div className="flex items-center mt-2">
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                    <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                  </div>
                </div> */}
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                   {product && product.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )
     
     }
  </>
  )
}

export default SingleProduct
