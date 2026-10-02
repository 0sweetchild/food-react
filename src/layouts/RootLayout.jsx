import { Outlet } from "react-router"
import Footer from "../components/Footer"
import Header from "../components/Header"

function RootLayout() {
  return (
    <div>

<Header/>

<main className="min-h-[70vh]"> </main>
<Outlet/>
<Footer/>

    </div>
  )
}

export default RootLayout