import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './components/About.jsx'
import Body from './components/Body.jsx'
import ResturantDetail from './components/ResturantDetail.jsx'
import {Provider} from "react-redux"
import appStore from './utils/appStore.js'
import CartDetail from './components/CartDetail.jsx'
// import Grocery from 
const Grocery = lazy(()=>import('./components/Grocery.jsx'));

const appRouter = createBrowserRouter([

      {
        path:'/',
        element:<App/>,
        children:[
          {
            path:'/',
            element:<Body/>
          },
          {
            path:'/about',
            element:<About/>
          },
          {
            path:'/resturant/:resId',
            element:<ResturantDetail/>
          },
          {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading Grocery Store...</h1>}><Grocery/></Suspense>
          },
          {
            path:'/cartDetail',
            element:<CartDetail/>
          }
        ]
      },
   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={appStore}> <RouterProvider router={appRouter}/></Provider>
  </StrictMode>,
)
