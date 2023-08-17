import React from 'react'
import { Container, Content, Menu, Num, Range, Seidbar, Size, Super, } from './style'
import { Slider } from 'antd';
import banner from '../../assets/img/Super Sale Banner.png'

export default function Saidbar() {
  return (
    <>
      <Seidbar>
        <Container>
          <Container.Title>Categories</Container.Title>
          <Menu>
            <Content>
              <span> House Plants</span><br />
              Potter Plants
              Seeds
              <br />
              Small Plants
              Big Plants
              Succulents
              Trerrariums
              Gardening
              Accessories
            </Content>
            <Num>
              <span>(33)</span>
              (12)
              (65)
              (39)
              (23)
              (17)
              (19)
              (13)
              (18)
            </Num>
          </Menu>
          <Range>
            <Range.Title>Price Range</Range.Title>
            <Slider className='range' style={{ width: "80%" }} range={{ draggableTrack: true, }} defaultValue={[20, 50]} />
            <Range.Text>Price: <span>$39 - $1230</span></Range.Text>
            <Range.Btn>Filter</Range.Btn>
          </Range>
          <Size>
            <Size.Title>Size</Size.Title>
            <Menu>
              <Content>
                Small
                Medium
                Large
              </Content>
              <Num>
                (119)
                (86)
                (78)
              </Num>
            </Menu>
          </Size>
        </Container>
        <Super src={banner} />
      </Seidbar>
    </>

  )
}
