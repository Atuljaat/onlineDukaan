import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements , RouterProvider , createBrowserRouter , Route } from 'react-router'
import { Home , Shop , Contact , Cart } from './pages'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App/>} path='/'>
      <Route element={<Home/>} path='/' />
      <Route element={<Shop/>} path='/shop'  />
      <Route element={<Contact/>} path='/contact' />
      <Route element={<Cart/>} path='/cart' />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}>
    <StrictMode>
      <App />
    </StrictMode>
  </RouterProvider>
)
