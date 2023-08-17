import React from 'react'
import { NavLink } from 'react-router-dom'
import { Display, Flex, Menu, Short } from './style'

export default function Menyu() {
  return (
    <>
      <Display>
        <Flex>
          <NavLink className='link' to='/'>
            <Menu>
              All Plants
            </Menu>
          </NavLink>
          <NavLink className='link' to='/new'>
            <Menu>
              New Arrivals
            </Menu>
          </NavLink>
          <NavLink className='link' to='/sale'>
            <Menu>
              Sale
            </Menu>
          </NavLink>
        </Flex>
        <Short>Short by: Default sorting <Short.Img /></Short>
      </Display>
    </>


  )
}
