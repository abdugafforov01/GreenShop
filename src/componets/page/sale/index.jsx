import React from 'react'
import { useState } from 'react'
import { Box, Container ,Contact, Border,Image, Off} from './style'
import sale from '../../../assets/img/image 7.png'

export default function Sale() {
  const [open,setOpen] =  useState(false)
  const toggle = ()=> setOpen(!open)
  return (
    <Container>
    <Box>
      <Border style={{display: open? "block" : "none"}}/>
      <Off>13% OFF</Off>
      <Image src={sale} onClick={toggle}/>
      <Contact style={{display: open? "block" : "none"}}>
        <Contact.Img/>
        <Contact.Hart/>
        <Contact.Search/>
      </Contact>
      <Box.Title>Barberton Daisy</Box.Title>
      <Box.Text>$119.00</Box.Text>
    </Box>
  </Container>
  )
}
