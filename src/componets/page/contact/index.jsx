import React from 'react'
import { useState } from 'react'
import { Box, Container ,Contact, Border, Flow} from './style'
import flow from '../../../assets/svg/image 2.svg'

export default function New() {
  const [open,setOpen] =  useState(false)
  const toggle = ()=> setOpen(!open)
  return (
    <Container>
      <Box>
        <Border style={{ display: open ? "block" : "none" }} />
       <Flow src={flow} onClick={toggle}/>
        <Contact style={{ display: open ? "block" : "none" }}>
          <Contact.Img />
          <Contact.Hart />
          <Contact.Search />

          
        </Contact>
        <Box.Title>African Violet</Box.Title>
        <Box.Text>$199.00 <span>$229.00</span></Box.Text>
      </Box>
    </Container>
  )
}
