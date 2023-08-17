import React, { useReducer } from 'react'
import { NavLink, Outlet,Link } from 'react-router-dom'
import Navbar from '../../shop-navbar'
import { Box, Btn, Btns, Container, Content, Count, Display, Flex, Hart, Info, Product, Share, Short, Size, View } from './style'
import { Rate } from 'antd';
import face from '../../../assets/img/Facebook.png'
import twiter from '../../../assets/img/Twitter.png'
import ine from '../../../assets/img/Linkedin.png'
import meseg from '../../../assets/img/Vector 13 (Stroke).png'
import { useState } from 'react';
import { useEffect } from 'react';
import { BeatLoader } from 'react-spinners'
import { Spiner } from '../../shop-home/style';


export default function Shop() {
  const [count,despatch] = useReducer((state, action)=>{
    if (action.type == "incer") {
        return state + 1
    }
    if(action.type == "decriment") {
        return state -1
    }
} ,0)
  const [load,setLoad] = useState(false)
  useEffect(()=>{
    setLoad(true)
    setTimeout(()=>{
      setLoad(false)
    },1000)
  },[])
  return (
   <>
   {
    load?
    <Spiner><BeatLoader
    color='green'
    /></Spiner>
    :
     <Container>
      <Navbar />
      <Content>
        <Content.Title><NavLink to='/' className='act'>Home</NavLink></Content.Title>
        <Content.Title>/</Content.Title>
        <Content.Title><NavLink className='act' to='/shop'>Shop</NavLink></Content.Title>
      </Content>
      <Display>
        <Product>
          <Flex>
            <Flex.Img />
            <Flex.Img />
            <Flex.Img />
            <Flex.Img />
          </Flex>
          <Product.Img />
          <Product.Image />
        </Product>
        <Info>
          <Info.Title>Barberton Daisy</Info.Title>
          <View>
            <Info.Text>$119.00</Info.Text>
            <View.Title>
              <Rate />
              <View.Text>19 Customer Review</View.Text>
            </View.Title>
          </View>
          <Short>
            <Short.Title>Short Description:</Short.Title>
            <Short.Text>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </Short.Text>
          </Short>
          <Size.Title>Size:</Size.Title>
          <Box>
            <Size>
              <Size.Box>S</Size.Box>
            </Size>
            <Size>
              <Size.Box>L</Size.Box>
            </Size>
            <Size>
              <Size.Box>S</Size.Box>
            </Size>
            <Size>
              <Size.Box>L</Size.Box>
            </Size>
          </Box>
          <Count>
            <Count.Btn onClick={()=>despatch ({type:"decriment"})}>-</Count.Btn>
            <Count.Text >{count}</Count.Text>
            <Count.Btns onClick={()=>despatch ({type:"incer"})} >+</Count.Btns>
            <Btn>Buy NOW</Btn>
            <Link to='/shop-card'><Btns>Add to cart</Btns></Link>
            <Hart>
              <Hart.Img/>
            </Hart>
          </Count>
          <Share>
            <Share.Title>SKU: <span>1995751877966</span></Share.Title>
            <Share.Text>Categories: <span>Potter Plants</span></Share.Text>
            <Share.Text>Tags: <span>Home, Garden, Plants</span></Share.Text>
            <Share.Product>
            Share this products:
            <Share.Image src={face}/>
            <Share.Image src={twiter}/>
            <Share.Image src={ine}/>
            <Share.Image src={meseg}/>
            </Share.Product>
          </Share>
        </Info>
      </Display>
      <NavLink className='link pro' to='/shop'>Product Description</NavLink>
      <NavLink className='link' to='reviews'>Reviews (19)</NavLink>
      <Outlet/>
    </Container>
   }
   </>
  )
}
