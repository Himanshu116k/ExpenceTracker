"use client"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/app/context/AuthContext"
import { useRouter , setUser} from 'next/navigation';


const Navbar = () => {
  const router = useRouter();
  const {user}= useAuth();

  const logout = async()=>{
   try {
     await fetch('api/auth/logout',{
        method: "POST",
        headers: { "Content-Type": "application/json" }
        ,}
       
      );
           
    router.refresh();     
    router.push('/login'); 
   } catch (error) {
    console.log(error);
     alert("Error logging out");
   }
  }
  return (
    
<nav className="fixed top-0 left-0 z-50 flex h-12 w-full gap-8 items-center justify-around bg-black">      <section className="text-green-300 p-3 w-[25%] text-2xl flex justify-around items-center ">
      <div className="  flex items-center justify-center">
        <Image
      
        alt="logo"
        src='/images.png'
        height={52}
        width={43}
        className="rounded-2xl"
        priority={true}

        />
      </div>
      <div >
        <h1 className="flex items-center justify-around">Expence &nbsp;<p className="text-red-400">T</p>racker</h1>
      </div>

      </section>
      <section className=" flex w-[45%] justify-around items-center gap-4"> 
        <Link href='/' className="hover:border-b-2 border-red-400">Home</Link>
        <Link href='/about' className="hover:border-b-2 border-red-400">About</Link>
        <Link href='/tracker' className="hover:border-b-2 border-red-400">Tracker</Link>
        <Link href='/community' className="hover:border-b-2 border-red-400">Community</Link>
      </section>
      <section className=" flex w-[15%] p-3 gap-4 items-center ">
        {user? <button type="button" className="bg-red-500 px-3 py-1 rounded-2xl cursor-pointer" onClick={logout}>Logout</button>: <div className=" flex w-[15%] p-3 gap-4 items-center ">
        <Link href='/signup' className="bg-blue-500 px-3 py-1 rounded-2xl cursor-pointer " >SignUp</Link>
        <Link href='/login' className="bg-blue-500 px-3 py-1 rounded-2xl cursor-pointer">Login</Link>
         </div>} </section>
   </nav>
  )
}

export default Navbar