import React from 'react'
import Reviews from '@/components/Reviews'
import { Particles , BoxReveal , SparklesText , WordRotate , InteractiveHoverButton , MagicCard } from '@/components/ui'
import { Link } from 'react-router';

function Home() {
    const whyus = [
        {
            title: 'Quality Products',
            description: 'We provide the best quality products',
            icon: '🛍️'
        },
        {
            title: 'Fast Delivery',
            description: 'We provide the fastest delivery services',
            icon: '🚀'
        },
        {
            title: '24/7 Customer Support',
            description: 'We provide 24/7 customer support',
            icon: '📞'
        }
    ];
    

    return (
        <>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className='particles-wrapper absolute inset-0 z-0'>
                    <Particles
                        quantity={200}
                        ease={80}
                        refresh
                    />
                </div>
                <div className='text-center mt-20 font-bold'>
                    <BoxReveal boxColor='#303030' >
                    <SparklesText className="text-5xl lg:text-6xl" text="Shop with onlineDukaan" />
                    </BoxReveal>
                </div>
                <span className='text-center mt-5 font-semibold'>
                <BoxReveal boxColor='#303030' delay={0.6}>
                    Buy your favorite products at the best prices
                </BoxReveal>
                </span>
               <div className='mt-5'>
                <Link to={'/shop'}>
                    <InteractiveHoverButton>Shop Now</InteractiveHoverButton>
                </Link>
               </div>
            </div>
            <div className='mt-10 mx-10'>
                <div className='text-center my-5 text-3xl font-bold'>
                    <WordRotate words={['Why Choose Us?']} />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        whyus.map((item)=>{
                            return (
                                <MagicCard key={item.title}>
                                <div  className=' p-5 rounded-md '>
                                    <p className='text-3xl my-2'>{item.icon}</p>
                                    <p className='font-bold my-2'>{item.title}</p>
                                    <p className='mt-2 my-2'>{item.description}</p>
                                </div>
                                </MagicCard>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-10'>
                <Reviews/>
            </div>
        </>
    )
}

export default Home