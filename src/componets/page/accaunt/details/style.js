import styled from "styled-components";
import { ReactComponent as icon } from '../../../../assets/svg/ico.svg'

export const Container = styled.div` 

`
export const Content = styled.div` 
padding-right: 80px;
padding-top: 50px;
`
Container.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 20px;
`
export const Input = styled.input` 
width: 417px;
height: 40px;
border: 1px solid #EAEAEA;
border-radius: 3px;
outline: none;
padding-left: 15px;
:focus{
    border: 1px solid #55AFD1;
}
`
Content.Text = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
span{
    color: #F03800;
    font-size: 20px;
}
`
export const Flex = styled.div` 
display: flex;
`
export const Select = styled.select` 
width: 78px;
height: 40px;
border: 1px solid #EAEAEA;
border-radius: 3px;
outline: none;
padding-left: 15px;
cursor: pointer;
:focus{
    border: 1px solid #55AFD1;
}
`
export const Inpu = styled.input` 
width: 329px;
height: 40px;
border: 1px solid #EAEAEA;
border-radius: 3px;
outline: none;
padding-left: 15px;
margin-left: 10px;
:focus{
    border: 1px solid #55AFD1;
}
`
export const Box = styled.div` 
width: 50px;
height: 50px;
border: 1px solid #EAEAEA;
border-radius: 50%;
`
Box.Img = styled(icon)` 
margin-top: 12px;
margin-left: 12px;
cursor: pointer;
`
export const Btn = styled.button` 
background: #46A358;
border-radius: 3px;
width: 98px;
height: 40px;
font-style: normal;
font-weight: 700;
font-size: 14px;
border: 0;
color: #FFFFFF;
:hover{
    background-color:#38DF4F;
    transition: 0.2s;
}
:active{
    background: none;
    border: 1px solid #46A358;
    color: #46A358;
}
`
export const Display = styled.div` 
display: flex;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #3D3D3D;
align-items: center;
gap: 23px;
/* padding-right: 80px; */
padding-top: 38px;
`
export const Form = styled.div` 

`
Form.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 37px;
`
export const Curret = styled.div` 
width: 417px;
height: 40px;
border: 1px solid #EAEAEA;
border-radius: 3px;
display: flex;
align-items: center;
`
Curret.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
padding-top: 20px;

`
export const Eirclose = styled.img` 
width: 20px;
height: 20px;
cursor: pointer;
`
export const Eiropen = styled.img` 
width: 20px;
height: 18px;
cursor: pointer;
`
export const Formu = styled.input` 
outline: none;
padding-left: 15px;
width: 380px;
height: 38px;
border: 0;
margin-left: 5px;
`
export const Btns = styled.button` 
width: 131px;
height: 40px;
background: #46A358;
border-radius: 3px;
border: 0;
font-style: normal;
font-weight: 700;
font-size: 14px;
margin-top: 50px;
color: #FFFFFF;
:hover{
    background-color:#38DF4F;
    transition: 0.2s;
}
:active{
    background: none;
    border: 1px solid #46A358;
    color: #46A358;
}
`