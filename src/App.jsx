import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './componets/page/about'
import Accaunt from './componets/page/accaunt'
import Adress from './componets/page/accaunt/adress'
import Details from './componets/page/accaunt/details'
import Blog from './componets/page/blog'
import Care from './componets/page/care'
import New from './componets/page/contact'
import Sale from './componets/page/sale'
import Shop from './componets/page/shop'
import Descripton from './componets/page/shop/Descripton'
import Reviews from './componets/page/shop/Reviews'
import ShopCard from './componets/page/shop/shop-card'
import Checkout from './componets/page/shop/shop-checkout'
import Home from './componets/shop-home'

export default function App() {
   return (
      <>
         <Routes>
            <Route path='/' element={<Home />}>
               <Route path='/' element={<About />} />
               <Route path='/new' element={<New />} />
               <Route path='/sale' element={<Sale />} />
            </Route>
            <Route path='/shop' element={<Shop />}>
               <Route path='/shop' element={<Descripton/>}/>
               <Route path='reviews' element={<Reviews/>}/>
            </Route>
            <Route path='/blog' element={<Blog />} />
            <Route path='/care' element={<Care />} />
            <Route path='/accaunt' element={<Accaunt />}>
               <Route path='/accaunt' element={<Details />} />
               <Route path='adress' element={<Adress/>}/>
            </Route>
            <Route path='/shop-card' element={<ShopCard/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
         </Routes>
      </>

   )
}
