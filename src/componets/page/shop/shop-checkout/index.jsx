import React from 'react'
import { Border, Check, Btn, Container, Nume, Content, Display, Flex, Flow, Form, Foter, Input, Num, Order, Product, Select, Subtotal, Textarea, Cunt, Click, Count, View, Total, Paymet } from './style'
import { NavLink } from 'react-router-dom'
import Navbar from '../../../shop-navbar'
import Footer from '../../../shop-footer'
import flower from '../../../../assets/img/image 11 (1).png'
import flowe from '../../../../assets/img/image 15.png'
import flow from '../../../../assets/img/image 16.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { Spiner } from '../../../shop-home/style'
import {  Modal } from 'antd';
import CheckOrder from '../check-order'

export default function Checkout() {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const [load, setLoad] = useState(false)
    useEffect(() => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }, [])
    return (
        <>
            {
                load ?
                    <Spiner><BeatLoader
                        color='green'
                    /></Spiner>
                    :
                    <Container>
                        <Navbar />
                        <Content>
                            <Content.Title><NavLink to='/' className='act'>Home</NavLink></Content.Title>
                            <Content.Title>/</Content.Title>
                            <Content.Title><NavLink className='act' to='/shop'>Shop</NavLink></Content.Title>
                            <Content.Title>/</Content.Title>
                            <Content.Title><NavLink className='act' to='/shop-card'>Shopping Card</NavLink></Content.Title>
                            <Content.Title>/</Content.Title>
                            <Content.Title><NavLink className='act' to='/checkout'>Checkout</NavLink></Content.Title>
                        </Content>
                        <Form.Title>Billing Address</Form.Title>
                        <Display>
                            <Foter>
                                <Flex>
                                    <Form>
                                        <Input.Title>First Name <span>*</span></Input.Title>
                                        <Input />
                                    </Form>
                                    <Form>
                                        <Input.Title>Last Name <span>*</span></Input.Title>
                                        <Input />
                                    </Form>
                                </Flex>
                                <Flex>
                                    <Form>
                                        <Input.Title>Country / Region<span>*</span></Input.Title>
                                        <Select>
                                            <option value="">Select a country / region</option>
                                        </Select>
                                    </Form>
                                    <Form>
                                        <Input.Title>Town / City <span>*</span></Input.Title>
                                        <Input />
                                    </Form>
                                </Flex>
                                <Flex>
                                    <Form>
                                        <Input.Title>Street Address <span>*</span></Input.Title>
                                        <Input placeholder='House number and street name' />
                                    </Form>
                                    <Form>
                                        <Input.Title>*</Input.Title>
                                        <Input placeholder='Appartment, suite, unit, etc. (optional)' />
                                    </Form>
                                </Flex>
                                <Flex>
                                    <Form>
                                        <Input.Title>State<span>*</span></Input.Title>
                                        <Select>
                                            <option value="">Select a state</option>
                                        </Select>
                                    </Form>
                                    <Form>
                                        <Input.Title>Zip <span>*</span></Input.Title>
                                        <Input />
                                    </Form>
                                </Flex>
                                <Flex>
                                    <Form>
                                        <Input.Title>Email address<span>*</span></Input.Title>
                                        <Input placeholder='House number and street name' />
                                    </Form>
                                    <Form>
                                        <Input.Title>*</Input.Title>
                                        <Num>
                                            <option value="">+996</option>
                                            <option value="">+998</option>
                                        </Num>
                                    </Form>
                                </Flex>
                                <Check>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    </div>
                                    <Check.Text>Ship to a different address?</Check.Text>
                                </Check>
                                <Textarea>
                                    <Textarea.Text>Order notes (optional)</Textarea.Text>
                                    <Textarea.Input />
                                </Textarea>
                            </Foter>
                            <Order>
                                <Order.Title>Your Order</Order.Title>
                                <Subtotal>
                                    <Subtotal.Title>Products</Subtotal.Title>
                                    <Subtotal.Text>Subtotal</Subtotal.Text>
                                </Subtotal>
                                <Border />
                                <Product>
                                    <Flow>
                                        <Flow.Img src={flower} />
                                        <Flow.Title>Barberton Daisy <br /> <span>SKU: 1995751877966</span></Flow.Title>
                                    </Flow>
                                    <Cunt>(x 2)</Cunt>
                                    <Nume>$238.00</Nume>
                                </Product>
                                <Product>
                                    <Flow>
                                        <Flow.Img src={flowe} />
                                        <Flow.Title>Blushing Bromeliad <br /> <span>SKU: 19957518757065</span></Flow.Title>
                                    </Flow>
                                    <Cunt>(x 6)</Cunt>
                                    <Nume>$834.00</Nume>
                                </Product>
                                <Product>
                                    <Flow>
                                        <Flow.Img src={flow} />
                                        <Flow.Title>Aluminum Plant <br /> <span>SKU: 1995751877786</span></Flow.Title>
                                    </Flow>
                                    <Cunt>(x 9)</Cunt>
                                    <Nume>$1,611.00</Nume>
                                </Product>
                                <Click.Title>Have a coupon code? <span>Click here</span></Click.Title>
                                <Click>
                                    <Count>
                                        <Count.Text>Subtotal</Count.Text>
                                        <Count.Text>Coupon Discount</Count.Text>
                                        <Count.Text>Shiping</Count.Text>
                                    </Count>
                                    <View>
                                        <View.Text>$2,683.00</View.Text>
                                        <View.Title>(-) 00.00</View.Title>
                                        <View.Text>$16.00</View.Text>
                                        <View.Charge>View shipping charge</View.Charge>
                                    </View>
                                </Click>
                                <Total>
                                    <Total.Title>Total</Total.Title>
                                    <Total.Text>$2,699.00</Total.Text>
                                </Total>
                                <Paymet.Title>Payment Method</Paymet.Title>
                                <Paymet>
                                    <div class="form-check ps-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    </div>
                                    <Paymet.Info />
                                </Paymet>
                                <Paymet>
                                    <div class="form-check ps-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    </div>
                                    <Paymet.Text>Dorect bank transfer</Paymet.Text>
                                </Paymet>
                                <Paymet>
                                    <div class="form-check ps-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    </div>
                                    <Paymet.Text>Cash on delivery</Paymet.Text>
                                </Paymet>
                                <Btn onClick={showModal}>Place Order</Btn>
                                <Modal
                                    open={open}
                                    onCancel={handleCancel}
                                    footer={[
                                        <CheckOrder/>
                                    ]}
                                />
                            </Order>
                        </Display>
                        <Footer />
                    </Container>
            }
        </>
    )
}
