import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='w-full h-full flex justify-around items-center pt-29 '>
        {/* Content div */}
        <div className='w-[45%] '>
            <h1 className='text-5xl font-bold mb-6'>Track Your Expenses Effortlessly</h1>
            <p className='text-lg mb-6 '>Manage your finances with our intuitive expense tracker. Stay on top of your spending and achieve your financial goals.</p>
            <div className=' z-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent blur-3xl'>
             Lorem ipsum dolor sit amet consectetur adipisicing hjhfghjghhgj hjfhj hgjhfj hhjhg elit. Labore soluta, dignissimos voluptas velit impedit nobis, veritatis dolores libero ut praesentium et, hic quibusdam!

            </div>
            <button className='bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300'>Get Started</button>
        </div>
        <div>

            <img src='https://www.moneypatrol.com/moneytalk/wp-content/uploads/2023/06/budget185.png' alt='Hero Image' className='w-full rounded-4xl object-cover'/>
        </div>
  
    
       
    </div>
    <div className='flex-col items-center justify-around bg-gradient-to-r from-black via-gray-900 to-black'>
    <div className='w-full h-full flex-col justify-center items-center pt-29'>

        <h1 className='flex justify-center items-center text-5xl font-bold mb-6'>
            Get Every Month expence
        </h1>
        <h1 className='flex justify-center items-center text-5xl font-bold mb-6'>On a Graph</h1>
    </div>
    <div className='flex items-center justify-center'>
        <img src='https://assets.visme.co/templates/banners/thumbnails/i_Personal-Expense-Report-Pie-Chart_full.jpg' alt="Graph image" className=' rounded-4xl h-[50%] w-[50%] object-contain' />
    </div>
    </div>
    </>
  )
}

export default Hero