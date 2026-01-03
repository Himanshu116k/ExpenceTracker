import React from 'react'

const Footer = () => {
  return (
  <div>
   <footer className='w-full h-full flex justify-between items-center p-12  mt-9'>
    <div className='w-[70%] '>
        <p>Owner Of the Project</p>
        <div className='border-1 border-white'>
        </div>
        <div className='flex items-center justify-around w-[20%] mt-2 gap-3.5'>
        <div className=' h-[69px] rounded-[19px] w-[69px]' >
            <img src="https://avatars.githubusercontent.com/u/154299632?v=4" alt="me"  className='object-contain rounded-2xl'/>

        </div>
        <h1 className='font-bold text-2xl'>Himanshu Kumar</h1>
        </div>
    </div>
    <div className='w-[25%] h-full '>
        <p>email</p>
        <p>himanshu1991patna@gmail.com</p>
    </div>
   </footer>
   <div>
    &copy; 2026 All images credit gose to their respective owners.
   </div>
   </div>
  )
}

export default Footer