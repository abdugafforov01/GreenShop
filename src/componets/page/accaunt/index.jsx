import React from 'react'
import Navbar from '../../shop-navbar'
import Head from './header'
import { Container } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { Spiner } from '../../shop-home/style'

export default function Accaunt() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return (
        <>
            {
                loading ?
                    <Spiner><BeatLoader color='green'/></Spiner>
                    :
                    <Container>
                        <Navbar />
                        <Head />
                    </Container>
            }
        </>
    )
}
