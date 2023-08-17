import React from 'react'
import Main from '../main'
import Saidbar from '../saidbar'
import { Container } from './style'

export default function Head() {
    return (
        <>
           <Container>
           <Saidbar />
            <Main />
           </Container>
        </>

    )
}
