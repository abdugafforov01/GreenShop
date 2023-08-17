import React from 'react'
import { Border, Btn, Btns,Card,Product, Check, Chek, Container, Content, Display, Flex, Form, Input, Subtota, Sum, Table, Total } from './style'
import Navbar from '../../../shop-navbar'
import { Link, NavLink } from 'react-router-dom'
import floww from '../../../../assets/img/image 11 (1).png'
import { useReducer } from 'react'
import flowe from '../../../../assets/img/image 15.png'
import flower from '../../../../assets/img/image 16.png'
import f from '../../../../assets/img/image 7.png'
import m from '../../../../assets/img/image 2 (2).png'
import n from '../../../../assets/img/image 10.png'
import Footer from '../../../shop-footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { Spiner } from '../../../shop-home/style'


export default function ShopCard() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    const [count, setCount] = useReducer((state, action) => {
        if (action.type == 'incer') {
            return state + 1
        }
        if (action.type == 'decriment') {
            return state - 1
        }
    }, 0)
    const [counter, setCounter] = useReducer((state, action) => {
        if (action.type == 'incer') {
            return state + 1
        }
        if (action.type == 'decriment') {
            return state - 1
        }
    }, 0)
    const [counte, setCounte] = useReducer((state, action) => {
        if (action.type == 'incer') {
            return state + 1
        }
        if (action.type == 'decriment') {
            return state - 1
        }
    }, 0)
    return (
        <>
        {
            loading?
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
            </Content>
            <Flex>
                <Table>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='d-flex align-items-center' scope="row">
                                    <Table.Img src={floww} />
                                    <Table.Title className='pt-3 ps-2'>Barberton Daisy <Table.Text>SKU: 1995751877966</Table.Text></Table.Title>
                                </th>
                                <td ><Table.Price>$119.00</Table.Price></td>
                                <td>
                                    <Display>
                                        <Btn onClick={() => setCount({ type: 'decriment' })}>-</Btn>
                                        <Table.Count>{count}</Table.Count>
                                        <Btn onClick={() => setCount({ type: 'incer' })}>+</Btn>
                                    </Display>
                                </td>
                                <td><Table.Total>$238.00</Table.Total></td>
                            </tr>
                            <tr>
                                <th className='d-flex align-items-center' scope="row">
                                    <Table.Img src={flowe} />
                                    <Table.Title className='pt-3 ps-2'>Blushing Bromeliad <Table.Text>SKU: 19957518757065</Table.Text></Table.Title>
                                </th>
                                <td ><Table.Price>$139.00</Table.Price></td>
                                <td>
                                    <Display>
                                        <Btn onClick={() => setCounter({ type: 'decriment' })}>-</Btn>
                                        <Table.Count>{counter}</Table.Count>
                                        <Btn onClick={() => setCounter({ type: 'incer' })}>+</Btn>
                                    </Display>
                                </td>
                                <td><Table.Total>$834.00</Table.Total></td>
                            </tr>
                            <tr>
                                <th className='d-flex align-items-center' scope="row">
                                    <Table.Img src={flower} />
                                    <Table.Title className='pt-3 ps-2'>Aluminum Plant<Table.Text>SKU: 1995751877786</Table.Text></Table.Title>
                                </th>
                                <td ><Table.Price>$179.00</Table.Price></td>
                                <td>
                                    <Display>
                                        <Btn onClick={() => setCounte({ type: 'decriment' })}>-</Btn>
                                        <Table.Count>{counte}</Table.Count>
                                        <Btn onClick={() => setCounte({ type: 'incer' })}>+</Btn>
                                    </Display>
                                </td>
                                <td><Table.Total>$1,611.00</Table.Total></td>
                            </tr>
                        </tbody>
                    </table>
                </Table>
                <Total>
                    <Total.Title>Cart Totals</Total.Title>
                    <Border/>
                    <Total.Text>Coupon Apply</Total.Text>
                    <Form>
                        <Input placeholder='Enter coupon code here...'/>
                        <Btns>Apply</Btns>
                    </Form>
                    <Chek>
                        <Subtota>
                            <Subtota.Title>Subtotal</Subtota.Title>
                            <Subtota.Title>Coupon Discount</Subtota.Title>
                            <Subtota.Title>Shiping</Subtota.Title>  
                            <Subtota.Total>Total</Subtota.Total>
                        </Subtota>
                        <Sum>
                            <Sum.Title>$2,683.00</Sum.Title>
                            <Sum.Text>(-) 00.00</Sum.Text>
                            <Sum.Title>$16.00 <br /> <span>View shipping charge</span></Sum.Title>  
                            <Sum.Sum>$2,699.00</Sum.Sum>  
                        </Sum>
                    </Chek>
                   <Link to='/checkout'> <Check>Proceed To Checkout</Check></Link>
                    <Check.Text>Continue Shopping</Check.Text>
                </Total>
            </Flex>
            <Product.Title>You may be interested in</Product.Title>
            <Border/>
            <Product>                
                <Card>
                    <Card.Img/>
                    <Card.Title>Beach Spider Lily</Card.Title>
                    <Card.Text>$129.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={f}/>
                    <Card.Title>Blushing Bromeliad</Card.Title>
                    <Card.Text>$139.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={m}/>
                    <Card.Title>Aluminum Plant</Card.Title>
                    <Card.Text>$179.00</Card.Text>
                </Card>
                <Card>
                    <Card.Image src={n}/>
                    <Card.Title>Chinese Evergreen</Card.Title>
                    <Card.Text>$39.00</Card.Text>
                </Card>
            </Product>
            <Footer/>
        </Container>
        }
        </>
    )
}
