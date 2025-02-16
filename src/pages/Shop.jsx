import React, { useRef } from 'react'
import { useState , useEffect } from 'react'
import getProfuctsInfo from '@/hooks/getProductInfo'
import { Input , Button , ItemCard } from '@/components/ui';
import useStore from '@/components/context/store';

function Shop() {
  const cartItems = useStore(state => state.cartItems)
  const count = useStore(state => state.count)
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const input = useRef(null)
  const [productsBackup, setProductsBackup] = useState([])


  useEffect(() => {
    const data = getProfuctsInfo()
    .then((data) => {
      setProductsBackup(data.slice(2,31))
      setProducts(data.slice(2,31))
      setLoading(false)
    })
}, [])

useEffect(() => {
  if (!search) {
    setProducts(productsBackup);
  }
}, [search])

function searchProducts (e) {
  e.preventDefault();
  if (!search) {
    setProducts(productsBackup)
    console.log('No search query')
    console.log(productsBackup)
  } else {
    let filteredProducts = products.filter((item)=>{
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    setProducts(filteredProducts)
  }
};

if (loading) {
  return <div className='min-h-screen text-center font-semibold text-5xl'>Loading...</div>
} else {
  return (
    <>
    <Button onClick={() => console.log(cartItems)} > ok </Button>
    <form onSubmit={searchProducts} >
      <div>
        <div className='flex flex-row justify-center gap-5 my-5'>
          <Input
          ref={input}
          className='w-1/2' 
          type='text' 
          placeholder='Search Products' 
          value={search} 
          onChange={(e)=>setSearch(e.target.value)}
          />
          <Button
          onClick={searchProducts}
          >Search</Button>
        </div>
      </div>
      </form>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-10 '>
          {
            products.map((item)=>{
              item.quantity = 1;
              return (
                <ItemCard 
                key={item.id} 
                image={item.images[0]} 
                title={item.title} 
                description={item.description}
                price={item.price}
                data={item}
                />
              )
            })
          }
      </div>
    </>
  )
}
}

export default Shop