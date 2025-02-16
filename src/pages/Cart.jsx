import React, { useEffect, useState } from 'react'
import useStore from '@/components/context/store'
import { Button } from '@/components/ui';

function Cart() {
  const cartItems = useStore(state => state.cartItems);
  let total = useStore(state => state.total)
  
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => {
        return acc + item.price;
    } , 0);
    useStore.setState({total: total});
  },[cartItems]);

  return (
    <div>
        <div className='text-4xl mx-5 font-semibold'>Cart</div>
        <div>
            <div className='grid grid-cols-4 my-5'>
                <div className='text-center text-3xl'>Products</div>
                <div className='text-center text-3xl'>Quantity</div>
                <div className='text-center text-3xl'>Price</div>
            </div>
            <div className='mx-5 border-b-2 text-pretty border-gray-300 gap-5  py-5 text-center'>
                {
                    cartItems.map((item) => {
                        return (
                            <div key={item.title} className='flex flex-row my-5 justify-center gap-48'>
                                <div>{item.title}</div>
                                <div>{item.quantity}</div>
                                <div>{item.price}</div>
                                <div>
                                    <Button>Remove</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-right text-3xl font-semibold mx-16 mt-2'>Total: ${total}</div>

        </div>
    </div>
  )
}

export default Cart