import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import PreFooter from './Components/PreFooter'
import Footer from './Components/Footer'
import CopyRight from './Components/CopyRight'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <PreFooter />
      <Footer />
      <CopyRight />
    </>
  )
}

export default Layout