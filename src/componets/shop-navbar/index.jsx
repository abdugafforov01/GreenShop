import React from 'react'
import { Border, Content, Login, Logo, Menu } from './style'
import { Link, NavLink } from 'react-router-dom'
import Madal from '../modal/Modal'

export default function Navbar() {
    return (
        <>
            <Content>
                <Logo>
                    <Link to='/'><Logo.Green /></Link>
                </Logo>
                <Menu>
                    <Menu.Title><NavLink to='/' className='link'>Home</NavLink></Menu.Title>
                    <Menu.Title><NavLink to='/shop' className='link'>Shop</NavLink></Menu.Title>
                    <Menu.Title>Plant Care</Menu.Title>
                    <Menu.Title>Blogs</Menu.Title>
                </Menu>
                <Login>
                    <Login.Search />
                    <Login.Shop />
                    <Madal/>
                </Login>
            </Content>
            <Border />
        </>
    )
}
