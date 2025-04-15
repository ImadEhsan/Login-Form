


import { useState, useEffect } from 'react'
import axios from "axios"
import { GiAchillesHeel} from 'react-icons/gi'
import Loader from '../components/loader'
import ProductCard from '../components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])
  const [loader, setLoader] = useState(false)
 
  useEffect (()=> {
     fetchProducts ()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoader(true)
      const api = 'https://fakestoreapi.com/products';
      const {data} = await axios.get(api);
        setProducts(data)
      console.log(products)
      setLoader(false)

    } catch (error){3
      setLoader(false)
      console.log(error.message)

    }
  }
  return (
    
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
           

           {
            loader ? <Loader /> :  products.map( (product,index) =>

                <ProductCard key={index} product={product} />


               )
           }
           
           
           
            {/*  */}
      
    </section>

  )
}

export default Home
