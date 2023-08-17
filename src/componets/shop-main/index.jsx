import React from 'react'
import { Content, Img, Make } from './style'
import { Carousel } from 'antd';

export default function Main() {
    return (
        <Carousel autoplay>
            <Content>
              <div className='carusel'>
              <Make>
                    <Make.Title>Welcome to GreenShop</Make.Title>
                    <Make.Text>Let’s Make a Better <span>Planet</span></Make.Text>
                    <Make.Planet>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Make.Planet>
                    <Make.Btn>SHOP NOW</Make.Btn>
                </Make>
                <Img>
                    <Img.Flower />
                    <Img.Flow />
                </Img>
              </div>
            </Content>
            <Content>
              <div className='carusel'>
              <Make>
                    <Make.Title>Welcome to GreenShop</Make.Title>
                    <Make.Text>Let’s Make a Better <span>Planet</span></Make.Text>
                    <Make.Planet>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Make.Planet>
                    <Make.Btn>SHOP NOW</Make.Btn>
                </Make>
                <Img>
                    <Img.Flower />
                    <Img.Flow />
                </Img>
              </div>
            </Content>
            <Content>
              <div className='carusel'>
              <Make>
                    <Make.Title>Welcome to GreenShop</Make.Title>
                    <Make.Text>Let’s Make a Better <span>Planet</span></Make.Text>
                    <Make.Planet>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</Make.Planet>
                    <Make.Btn>SHOP NOW</Make.Btn>
                </Make>
                <Img>
                    <Img.Flower />
                    <Img.Flow />
                </Img>
              </div>
            </Content>
        </Carousel>
    )
}
