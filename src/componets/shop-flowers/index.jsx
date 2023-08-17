import React from 'react'
import { Cactus, Container, Stylin, Summer, Trend } from './style'
import flower from '../../assets/img/image 2 (2).png'
export default function Flowers() {
  return (
    <Container>
      <Cactus>
        <Cactus.Img />
        <Summer>
          <Summer.Title>Summer cactus & succulents</Summer.Title>
          <Summer.Text>We are an online plant shop offering a wide range of cheap and trendy plants</Summer.Text>
          <Summer.Btn>Find More</Summer.Btn>
        </Summer>
      </Cactus>
      <Trend>
        <Trend.Img src={flower}/>
        <Stylin>
          <Stylin.Title>Styling Trends& much more</Stylin.Title>
          <Stylin.Text>We are an online plant shop offering a wide range of cheap and trendy plants</Stylin.Text>
          <Stylin.Btn>Find More</Stylin.Btn>
        </Stylin>
      </Trend>
    </Container>
  )
}
