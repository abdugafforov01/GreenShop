import React from 'react'
import { Add, Adres, Btns, Container, Content, Display, Flex, Form, Formu, Input, Name, Select, Title } from './style'

export default function Adress() {
  return (
    <Container>
      <Content>
        <Content.Title>Billing Address <br /><span>The following addresses will be used on the checkout page by default.</span></Content.Title>
        <Content.Text>Add</Content.Text>
      </Content>
    <Flex>
    <Display>
      <Title>First Name <span>*</span></Title>
      <Input />
     </Display>
     <Display>
      <Title>Last Name<span>*</span></Title>
      <Input />
     </Display>
    </Flex>
    <Flex>
    <Display>
      <Title>First Name <span>*</span></Title>
      <Select>
        <option>Select a country / region</option>
      </Select>
     </Display>
     <Display>
      <Title>Last Name<span>*</span></Title>
      <Input />
     </Display>
    </Flex>
    <Flex>
    <Display>
      <Title>Street Address <span>*</span></Title>
      <Input />
     </Display>
     <Display>
      <Title><span>*</span></Title>
      <Input />
     </Display>
    </Flex>
    <Flex>
    <Display>
      <Title>State <span>*</span></Title>
      <Select>
        <option>Select a state</option>
      </Select>
     </Display>
     <Display>
      <Title>Zip<span>*</span></Title>
      <Input />
     </Display>
    </Flex>
    <Flex>
    <Display>
      <Title>Email address <span>*</span></Title>
      <Input />
     </Display>
     <Display>
      <Title>Phone Number<span>*</span></Title>
      <Form>
        <option value="">+998</option>
        <option value="">+996</option>
        <option value="">+555</option>
      </Form>
      <Formu/>
     </Display>
    </Flex>
    <Btns>Save Address</Btns>
    <Adres>
      <Name>
        <Name.Title>Shipping Address</Name.Title>
        <Name.Text>You have not set up this type of address yet.</Name.Text>
      </Name>
      <Add>
        <Add.Box/>
        <Add.Text>Same as billing address</Add.Text>
        <Add.Title>Add</Add.Title>
      </Add>
    </Adres>
    </Container>
  )
}
