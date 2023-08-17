import React from 'react'
import { Outlet } from 'react-router'
import { Container } from './style'


export default function Main() {
  return (
    <Container>
        <Outlet/>
    </Container>
  )
}
