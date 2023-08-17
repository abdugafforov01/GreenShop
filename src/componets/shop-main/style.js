import styled from "styled-components";
import { ReactComponent as flow } from '../../assets/svg/01 1.svg'
import { ReactComponent as flower } from '../../assets/svg/01 2.svg'

export const Content = styled.div` 
display: flex;
justify-content: space-around;
margin-top: 12px;
/* position: relative; */
background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
`
export const Make = styled.div` 
`
Make.Title = styled.h5` 
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #3D3D3D;
`
Make.Text = styled.h1` 
span{
    color: #46A358;
}
font-style: normal;
font-weight: 900;
font-size: 70px;
line-height: 70px;
text-transform: uppercase;
color: #3D3D3D;
width: 530px;
`
Make.Planet = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #727272;
width: 557px;
padding-top:5px;
padding-bottom:44px;
`
Make.Btn = styled.button` 
width: 140px;
height: 40px;
background: #46A358;
border-radius: 6px;
font-style: normal;
font-weight: 700;
font-size: 16px;
/* line-height: 20px;    */
border: 0;
text-transform: uppercase;
color: #FFFFFF;
:hover{
    background-color: #70DA21;
    transition:0.2s;
}
:active{
    background-color:#FFFFFF;
    color: #46A358;
    transition:none;
    border:1px solid #46A358;
}
`
export const Img = styled.div` 
`
Img.Flow = styled(flow)` 
cursor: pointer;
`
Img.Flower = styled(flower)`
cursor: pointer;
position: absolute;
top: 350px;
`