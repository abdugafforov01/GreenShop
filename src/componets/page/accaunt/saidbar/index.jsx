import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Border, Detal, Logn, Menu, Seidbar } from './style'
import corzin from '../../../../assets/img/Vector (4).png'
import hart from '../../../../assets/img/heart 1.png'
import activy from '../../../../assets/img/Activity.png'
import dowlan from '../../../../assets/img/Download.png'
import danger from '../../../../assets/img/Danger Triangle.png'

export default function Saidbar() {
  return (
    <Seidbar>
      <Seidbar.Title>My Account</Seidbar.Title>
      <NavLink className='detal' to='/accaunt'><Detal><Detal.Img/> Account</Detal></NavLink>
      <NavLink className='detal' to='adress'><Detal><Detal.Image/> Address</Detal></NavLink>
      <Menu>
        <Menu.Img src={corzin}/>
        <Menu.Title>Orders</Menu.Title>
      </Menu>
      <Menu>
        <Menu.Img src={hart}/>
        <Menu.Title>Wishlist</Menu.Title>
      </Menu>
      <Menu>
        <Menu.Img src={activy }/>
        <Menu.Title>Reports</Menu.Title>
      </Menu>
      <Menu>
        <Menu.Img src={dowlan}/>
        <Menu.Title>Downloads</Menu.Title>
      </Menu>
      <Menu>
        <Menu.Img src={danger}/>
        <Menu.Title>Support</Menu.Title>
      </Menu>
      <Border/>
     <Link to='/'> <Logn/></Link>
    </Seidbar>
  )
}
