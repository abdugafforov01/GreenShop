import React from 'react'
import { useState } from 'react'
import { Box, Container ,Contact, Border} from './style'

export default function About() {
  const [open,setOpen] =  useState(false)
  const toggle = ()=> setOpen(!open)

  return (
    <Container>
      <Box>
        <Border style={{display: open? "block" : "none"}}/>
        <Box.Img onClick={toggle}/>
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
