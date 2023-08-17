import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/svg/Group.svg'
import {ReactComponent as search} from '../../assets/svg/Vector.svg'
import {ReactComponent as shop} from '../../assets/svg/Vector (1).svg'


export const Content = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top:26px;
`
export const Logo  = styled.div` 

`
Logo.Green = styled(logo)`
cursor: pointer;
`
export const Login = styled.div` 
display: flex;
align-items: center;
gap: 30px;
`
Login.Search = styled(search)` 
cursor: pointer;
`
Login.Shop = styled(shop)` 
cursor: pointer;
`
Login.Btn = styled.button` 
display: flex;
align-items: center;
justify-content: center;
background: #46A358;
border-radius: 6px;
gap: 10px;
width: 100px;
height: 35px;
border: 0;
`
Login.Out = styled.img` 

`
export const Menu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
`
Menu.Title = styled.h5`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
color: #3D3D3D;
cursor: pointer;
`
export const Border = styled.div` 
border: 0.3px solid rgba(70, 163, 88, 0.5);
margin-top: 25px;
`