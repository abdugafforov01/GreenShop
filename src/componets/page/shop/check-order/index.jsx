import React from 'react'
import { Container, Content, Flex, Number, Order, Product, Flow, Nume, Cunt, Shiping, Dat, Btns } from './style'
import flower from '../../../../assets/img/image 11 (1).png'
import flowe from '../../../../assets/img/image 15.png'
import flow from '../../../../assets/img/image 16.png'

export default function CheckOrder() {

    return (
        <Container>
            <Content>
                <Content.Img />
                <Content.Text>Your order has been received</Content.Text>
            </Content>
            <Flex>
                <Number>
                    <Number.Text>Order Number</Number.Text>
                    <Number.Title>19586687</Number.Title>
                </Number>
                <Number>
                    <Number.Text>Date</Number.Text>
                    <Number.Title>15 Sep, 2021</Number.Title>
                </Number>
                <Number>
                    <Number.Text>Total</Number.Text>
                    <Number.Title>2,699.00</Number.Title>
                </Number>
                <Number>
                    <Number.Text>Payment Method</Number.Text>
                    <Number.Title>Cash on delivery</Number.Title>
                </Number>
            </Flex>
            <Order>
                <Order.Flex>
                    <Order.Title>Order Details</Order.Title>
                    <Order.Title>Products</Order.Title>
                </Order.Flex>
                <Order.Qty>
                    <Order.Title>Qty</Order.Title>
                </Order.Qty>
                <Order.Flex>
                    <Order.Title>Subtotal</Order.Title>
                </Order.Flex>
            </Order>
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
            <Shiping.Flex>
                <Shiping>
                    <Shiping.Title>Shiping</Shiping.Title>
                    <Shiping.Text>Total</Shiping.Text>
                </Shiping>
                <Shiping>
                    <Shiping.Num>$16.00</Shiping.Num>
                    <Shiping.Nume>$2,699.00</Shiping.Nume>
                </Shiping>
            </Shiping.Flex>
            <Dat>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</Dat>
            <Btns>Track your order</Btns>
        </Container>
    )
}
