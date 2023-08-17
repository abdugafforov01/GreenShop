import React from 'react'
import { Accaunt, Border, Btn, Card, Category, Container, Content, Email, End, Flex, Form, Foter, Green, Help, Input, Lakatsy, Media, Phone } from './style'
import plant from '../../assets/img/Group 18.png'
import plan from '../../assets/img/Group 19.png'
import info from '../../assets/svg/info.svg'

export default function Footer() {
    return (
        <>
            <Container>
                <Card>
                    <Card.Img src={plant} />
                    <Card.Title>Garden Care</Card.Title>
                    <Card.Text>We are an online plant shop offering a wide range of cheap and trendy plants.</Card.Text>
                </Card>
                <Card>
                    <Card.Img src={plan} />
                    <Card.Title>Garden Care</Card.Title>
                    <Card.Text>We are an online plant shop offering a wide range of cheap and trendy plants.</Card.Text>
                </Card>
                <Card>
                    <Card.Img src={plant} />
                    <Card.Title>Garden Care</Card.Title>
                    <Card.Text>We are an online plant shop offering a wide range of cheap and trendy plants.</Card.Text>
                </Card>
                <Form>
                    <Form.Title>Would you like to join newsletters?</Form.Title>
                    <Content>
                        <Input placeholder='enter your email address...' />
                        <Btn>Join</Btn>
                    </Content>
                    <Content.Text>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </Content.Text>
                </Form>
            </Container>
            <Green>
                <Green.Logo />
                <Lakatsy>
                    <Lakatsy.Img />
                    <Lakatsy.Text>70 West Buckingham Ave.Farmingdale, NY 11735</Lakatsy.Text>
                </Lakatsy>
                <Email>
                    <Email.Img />
                    <Email.Text href='email:contact@greenshop.com'>contact@greenshop.com</Email.Text>
                </Email>
                <Phone>
                    <Phone.Img />
                    <Phone.Text href='tel:+88 01911 717 490'>+88 01911 717 490</Phone.Text>
                </Phone>
            </Green>
            <Foter>
                <Flex>
                    <Accaunt>
                        <Accaunt.Title>My Account</Accaunt.Title>
                        <Accaunt.Text>
                            My Account
                            Our stores
                            Contact us
                            Career
                            Specials
                        </Accaunt.Text>
                    </Accaunt>
                    <Help>
                        <Help.Title>Help & Guide</Help.Title>
                        <Help.Text>
                            Help Center
                            How to Buy
                            Shipping & Delivery
                            Product Policy
                            How to Return
                        </Help.Text>
                    </Help>
                    <Category>
                        <Category.Title>Categories</Category.Title>
                        <Category.Text>
                            House Plants
                            Potter Plants
                            Seeds
                            Small Plants
                            Accessories
                        </Category.Text>
                    </Category>
                    <Media>
                        <Media.Title>Social Media</Media.Title>
                        <Media.Card>
                            <Media.Box>
                                <Media.Img />
                            </Media.Box>
                            <Media.Box>
                                <Media.Inst />
                            </Media.Box>
                            <Media.Box>
                                <Media.Twiter />
                            </Media.Box>
                            <Media.Box>
                                <Media.Linke />
                            </Media.Box>
                            <Media.Box>
                                <Media.Union />
                            </Media.Box>
                        </Media.Card>
                        <Media.Text>We accept</Media.Text>
                        <Media.Info src={info}/>
                    </Media>
                </Flex>
            </Foter>
            <Border/>
            <End>© 2021 GreenShop. All Rights Reserved.</End>
        </>


    )
}
