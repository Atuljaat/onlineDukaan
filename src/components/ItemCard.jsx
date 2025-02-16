import React from 'react'
import { Button } from './ui'
import { Card ,  
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from './ui/card'
import useStore from './context/store'

function ItemCard({image,title,description,price,data}) {
    const addToCart = useStore((state) => state.addToCart)
    const cartItems = useStore((state) => state.cartItems)
  return (
    <>
    <Card className='w-auto pb-5'>
        <CardHeader>
            <img 
            src={image} 
             alt={title}
             className='h-52 rounded'
             />
        </CardHeader>
        <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDescription 
            className='mt-4'
            >{description}</CardDescription>
        </CardContent>
       <CardContent>
        <div className='text-xl font-bold'>
            {` $${price}`}
        </div>
       </CardContent>
        <CardFooter>
        <div className='flex flex-col md:flex-row gap-3 items-center justify-center'> 
            <div>
            <Button className="w-full" onClick={() => {
                addToCart(data);
                console.log(cartItems);
                }} >
                Add to Cart
                </Button>
            </div>
            <div>
                <Button className="w-full">
                More Info
                </Button>
            </div>
      </div>
        </CardFooter>
    </Card>
    </>
  )
}

export default ItemCard