import styled from "styled-components";
import { ReactComponent as vector } from '../../../assets/svg/Vector (2).svg'
import { ReactComponent as hart } from '../../../assets/svg/Vector (3).svg'
import { ReactComponent as search } from '../../../assets/svg/Vector (4).svg'

export const Container = styled.div` 
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
export const Box = styled.div`
margin-top: 38px;
background: #FBFBFB;
width: 258px;
position: relative;
margin-right: 20px;
`
export const Border = styled.div` 
border-top: 2px solid #46A358;
`
Box.Title = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 40px;
`
Box.Text = styled.h5` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #46A358;
span{
    font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 16px;
color: #A5A5A5;
}
`
export const Contact = styled.div` 
display: flex;
align-items: center;
`
Contact.Img = styled(vector)` 
position: absolute;
left: 80px;
cursor: pointer;
`
Contact.Hart = styled(hart)` 
position: absolute;
left: 125px;
width: 18px;
height: 18px;
margin-top: 2px;
cursor: pointer;
`
Contact.Search = styled(search)` 
position: absolute;
left: 165px;
width: 18px;
height: 18px;
margin-top: 2px;
cursor: pointer;
`
export const Flow = styled.img` 
margin-left: 10px;
cursor: pointer;
`