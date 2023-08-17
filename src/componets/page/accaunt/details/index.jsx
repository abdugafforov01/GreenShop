import React from 'react'
import { Box, Btn, Btns, Container, Content, Curret, Display, Eirclose, Eiropen, Flex, Form, Formu, Inpu, Input, Pasword, Select } from './style'
import close from '../../../../assets/img/eirclose.png'
import ope from '../../../../assets/img/eiropen.png'
import { useState } from 'react'
export default function Details() {
  const [open,setOpen] = useState(true)
  const toggle = () => setOpen(!open)
  return (
    <Container>
      <Container.Title>Personal Information</Container.Title>
      <Flex>
        <Content>
          <Content.Text>First Name <span>*</span></Content.Text>
          <Input />
        </Content>
        <Content>
          <Content.Text>Last Name <span>*</span></Content.Text>
          <Input />
        </Content>
      </Flex>
      <Flex>
        <Content>
          <Content.Text>Email address <span>*</span></Content.Text>
          <Input />
        </Content>
        <Content>
          <Content.Text>Phone Number <span>*</span></Content.Text>
          <Select>
            <option>+996</option>
            <option>+75</option>
            <option>+1</option>
            <option>+998</option>
          </Select>
          <Inpu />
        </Content>
      </Flex>
      <Flex>
        <Content>
          <Content.Text>Username <span>*</span></Content.Text>
          <Input />
        </Content>
        <Display>
          <Box><Box.Img/></Box>
          <Btn>Change</Btn>
          Remove
        </Display>
      </Flex>
      <Form>
        <Form.Text>Password change</Form.Text>
        <Curret.Text>New password</Curret.Text>
        <Curret>
          <Formu type={open? "password" : "text"}/>
          <Eirclose onClick={toggle} style={{ display:open? "block" : "none"}}  src={close}/>
          <Eiropen onClick={toggle} style={{display:open? "none" : "block"}} src={ope}/>
        </Curret>
        <Btns>Save Change</Btns>
      </Form>
    </Container>
  )
}
