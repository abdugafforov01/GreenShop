import styled from "styled-components";

export const Container = styled.div` 
padding-top: 138px;
`
Container.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 16px;
text-align: center;
color: #3D3D3D;
`
Container.Text = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-align: center;
color: #727272;
`
export const Card = styled.div` 
width: 270px;
height: 370px;
`
Card.Img = styled.img` 
cursor: pointer;
`
Card.Title = styled.h6`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #46A358;
text-align: center;
`
Card.Text = styled.h5`  
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
color: #3D3D3D;
width: 199px;
padding-left: 15px;

`
Card.Foter = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #727272;
width: 242px;
padding-left: 15px;

`
Card.More = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #3D3D3D;
padding-left: 15px;
`
export const Col = styled.div` 
display: flex;
justify-content: space-between;
padding-top: 36px;
`