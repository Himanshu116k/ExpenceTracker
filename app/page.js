import Footer from "@/components/footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/navbar"

const page =async () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default page