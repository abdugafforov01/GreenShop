import React from 'react'
import { Outlet } from 'react-router'
import Flowers from '../shop-flowers'
import Footer from '../shop-footer'
import Header from '../shop-header'
import Main from '../shop-main'
import Navbar from '../shop-navbar'
import Post from '../shop-post'
import { BeatLoader } from 'react-spinners'
import { Container, Content, Spiner } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
export default function Home() {
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
                   <Spiner> <BeatLoader 
                   color="green"
                   /></Spiner>
                    :
                    <Container>
                        <Navbar />
                        <Main />
                        <Header />
                        <Flowers />
                        <Post />
                        <Footer />
                    </Container>
            }
        </>

    )
}
