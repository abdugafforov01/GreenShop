import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Menyu from '../shop-menyu'
import { Container, Page } from './style'

export default function Content() {
  return (
    <Container>
      <Menyu/>
      <Outlet/>
    </Container>
    
  )
}
