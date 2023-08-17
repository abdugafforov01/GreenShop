import React from 'react'
import { Border, Card, Content, Flower, Product } from './Description'
import Footer from '../../shop-footer'
import flowe from '../../../assets/img/image 7.png'
import flower from '../../../assets/img/image 2 (2).png'
import flo from '../../../assets/img/image 10.png'


export default function Descripton() {
    return (
        <>
            <Content>
                <Content.Text>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </Content.Text>
                <Content.Title>Living Room:</Content.Title>
                <Content.Text>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content.Text>
            <Content.Title>Dining Room:</Content.Title>
            <Content.Text>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</Content.Text>
            <Content.Title>Office:</Content.Title>
            <Content.Text>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Content.Text>
            </Content>
            <Product.Title>Releted Products</Product.Title>
            <Border/>
            <Product>                
                <Card>
                    <Card.Img/>
                    <Card.Title>Beach Spider Lily</Card.Title>
                    <Card.Text>$129.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={flowe}/>
                    <Card.Title>Blushing Bromeliad</Card.Title>
                    <Card.Text>$139.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={flower}/>
                    <Card.Title>Aluminum Plant</Card.Title>
                    <Card.Text>$179.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={flo}/>
                    <Card.Title>Chinese Evergreen</Card.Title>
                    <Card.Text>$39.00</Card.Text>
                </Card>
            </Product>
            <Footer/>
        </>
    )
}
