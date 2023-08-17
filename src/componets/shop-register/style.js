import styled from "styled-components";
import { ReactComponent as google } from '../../assets/svg/google 1.svg'
import { ReactComponent as facebook } from '../../assets/svg/facebook 1.svg'

export const Content = styled.div` 
text-align: center;
`
Content.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 17px;
padding-top: 30px;
`
export const Btns = styled.button` 
background: #46A358;
border-radius: 5px;
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
width: 200px;
height: 35px;
border: 0;
margin-top: 15px;
:hover{
    background-color: #1CEC1D;
    transition:0.2s;
}
:active{
    background: none;
    border: 1px solid #46A358;
    color: #46A358;
}
`
export const Out = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
color: #3D3D3D;
padding-top: 30px;
padding-bottom: 20px;
`
export const Btn = styled.button` 
border: 1px solid #EAEAEA;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
border-radius: 5px;
background: #FFFFFF;
font-style: normal;
font-weight: 500;
font-size: 13px;
text-align: center;
color: #727272;
width: 200px;
height: 35px;
:hover{
    background-color: #E5E6E5;
    transition:0.2s;
}
:active{
    background:#FFFFFF;
}
`
Btn.Google = styled(google)`
margin-right: 5px;
`
Btn.Facebook = styled(facebook)`
margin-right: 5px;
`
export const Butto = styled.div` 
margin-top: 15px;
`
