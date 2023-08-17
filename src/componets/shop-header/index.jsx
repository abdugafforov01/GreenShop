import React from 'react'
import Content from '../shop-content'
import Saidbar from '../shop-saidbar'
import { Container } from './style'

export default function Header() {
    return (
        <Container>
            <Saidbar />
            <Content />
        </Container>

  )
}
