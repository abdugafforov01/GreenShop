import React from 'react'
import { Card, Col, Container } from './style'
import nature from '../../assets/img/01.png'
import icon from '../../assets/img/Stroke 3.png'
import top from '../../assets/img/02.png'
import cacti from '../../assets/img/03.png'
import best from '../../assets/img/04.png'

export default function Post() {
  return (
    <Container>
      <Container.Title>Our Blog Posts</Container.Title>
      <Container.Text>We are an online plant shop offering a wide range of cheap and trendy plants. </Container.Text>
      <Col>
        <Card>
          <Card.Img src={nature} />
          <Card.Title>September 12  I Read in 6 minutes</Card.Title>
          <Card.Text>Cactus & Succulent Care Tips</Card.Text>
          <Card.Foter>Cacti are succulents are easy care plants for any home or patio. </Card.Foter>
          <Card.More>Read More <img src={icon} alt="" /></Card.More>
        </Card>
        <Card>
          <Card.Img src={top} />
          <Card.Title>September 13  I Read in 2 minutes </Card.Title>
          <Card.Text>Top 10 Succulents for Your Home</Card.Text>
          <Card.Foter>Best in hanging baskets. Prefers medium to high light. </Card.Foter>
          <Card.More>Read More <img src={icon} alt="" /></Card.More>
        </Card>
        <Card>
          <Card.Img src={cacti} />
          <Card.Title>September 15  I Read in 3 minutes</Card.Title>
          <Card.Text>Cacti & Succulent Care Tips</Card.Text>
          <Card.Foter>Cacti and succulents thrive in containers and because most are..</Card.Foter>
          <Card.More>Read More <img src={icon} alt="" /></Card.More>
        </Card>
        <Card>
          <Card.Img src={best} />
          <Card.Title>September 15  I Read in 2 minutes</Card.Title>
          <Card.Text>Best Houseplants Room by Room</Card.Text>
          <Card.Foter>The benefits of houseplants are endless. In addition to..</Card.Foter>
          <Card.More>Read More <img src={icon} alt="" /></Card.More>
        </Card>
      </Col>
    </Container>
  )
}