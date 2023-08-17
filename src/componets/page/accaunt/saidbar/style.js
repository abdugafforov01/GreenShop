import styled from "styled-components";
import {ReactComponent as profil} from '../../../../assets/svg/Vector (5).svg'
import {ReactComponent as adres} from '../../../../assets/svg/Location 1.svg'
import {ReactComponent as logn} from '../../../../assets/svg/Group 38.svg'

export const Seidbar = styled.div` 
width: 310px;
height: 500px;
background: #FBFBFB;
`
Seidbar.Title = styled.h3` 
padding-bottom: 10px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-top: 17px;
padding-left: 18px;
`
export const Detal = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 45px;
color: #727272;
display: flex;
align-items: center;
padding-left: 25px;
gap: 14px;

`
Detal.Img = styled(profil)` 
cursor: pointer;

`
Detal.Image = styled(adres)` 
cursor: pointer;
`
export const Menu = styled.div` 
display: flex;
align-items: center;
padding-left: 22px;
gap: 14px;
`
Menu.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 45px;   
color: #727272;
padding-top: 5px;
`
Menu.Img = styled.img` 
cursor: pointer;
`

export const Border = styled.div` 
border: 0.3px solid #46A35880;
`
export const Logn = styled(logn)` 
margin-left: 23px;
margin-top: 19px;
cursor: pointer;    
`