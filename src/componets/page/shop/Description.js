import styled from "styled-components";
import {ReactComponent as flow} from '../../../assets/svg/image 1.svg'
export const Content = styled.div` 
padding-top: 30px;
`
Content.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #727272;
/* padding-top: 30px; */
`
Content.Title  = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
color: #3D3D3D;

`
export const Product = styled.div` 
display:flex;
justify-content: space-between;
padding-top: 64px;
padding-bottom: 100px;
`
Product.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 16px;
color: #46A358;
padding-top: 120px;

`
export const Border =  styled.div` 
border: 0.3px solid rgba(70, 163, 88, 0.5);
color: #46A35880 50%;
margin-top: 12px;
`
export const Card = styled.div` 
width: 220px;
height: 320px;
`
Card.Img = styled(flow)` 
cursor: pointer;
`
Card.Title =  styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-left: 15px;
padding-top: 12px;
`
 Card.Text = styled.p` 
 font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #46A358;
padding-left: 15px;

 `
Card.Image = styled.img` 
cursor: pointer;
`