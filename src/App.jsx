import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import NotFound from './Pages/NotFound'


function App() {

 
  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
