import styled from "styled-components";
import { ReactComponent as logo } from '../../assets/svg/Group.svg'
import { ReactComponent as laka } from '../../assets/svg/Location.svg'
import { ReactComponent as meseg } from '../../assets/svg/Message.svg'
import { ReactComponent as phone } from '../../assets/svg/Calling.svg'
import { ReactComponent as face } from '../../assets/svg/Facebook.svg'
import { ReactComponent as insta } from '../../assets/svg/Instagram.svg'
import { ReactComponent as twiter } from '../../assets/svg/Twitter.svg'
import { ReactComponent as linke } from '../../assets/svg/Linkedin.svg'
import { ReactComponent as union } from '../../assets/svg/Union.svg'

export const Container = styled.div` 
padding-top: 100px;
display: flex;
align-items: center;
`
export const Card = styled.div` 
height: 240px;
width: 280px;
box-shadow: 0 0 1px #CCC;
margin-right: 40px;
`
Card.Img = styled.img` 
margin-left: 25px;
margin-top: 20px;
cursor: pointer;
`
Card.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
padding-top: 18px;
padding-bottom: 6px;
padding-left: 23px;
`
Card.Text = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #727272;
width: 204px;
padding-left: 23px;
`
export const Form = styled.div` 
margin-left: 40px;
`
Form.Title = styled.h2` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 18px;
`
export const Content = styled.div` 

`
export const Input = styled.input` 
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.06);
border-radius: 6px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #ACACAC;
padding-left: 15px;
width: 310px;
height: 40px;
border: 0;
outline: none;
`
export const Btn = styled.button` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #FFFFFF;
background: #46A358;
border-radius: 0px 6px 6px 0px;
width: 85px;
height: 40px;
border: 0;
:hover{
    background-color: #3BEF52;
    transition: 0.2s;
}
:active{
    background: none;
    border: 1px solid #46A358;
    color: #46A358;
}
`
Content.Text = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 22px;
width: 354px;
color: #727272;
padding-top: 18px;
`
export const Green = styled.div` 
width: 100%;
height: 88px;
background: rgba(70, 163, 88, 0.1);
display: flex;
align-items: center;
justify-content: space-between;
`
Green.Logo = styled(logo)`
margin-left: 20px;
cursor: pointer;
`
export const Lakatsy = styled.div` 
display: flex;
align-items: center;
gap: 12px;
`
Lakatsy.Img = styled(laka)` 

`
Lakatsy.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #3D3D3D;
width: 176px;
`
export const Email = styled.div`
display: flex;
align-items: center;
gap: 12px;
`
Email.Img = styled(meseg)` 

`
Email.Text = styled.a` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #3D3D3D;
text-decoration:none;
`
export const Phone = styled.div` 
display: flex;
align-items: center;
gap: 12px;
margin-right: 20px;
`
Phone.Img = styled(phone)` 

`
Phone.Text = styled.a` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: #3D3D3D;
text-decoration: none;
`
export const Foter = styled.div` 

`
export const Flex = styled.div` 
display: flex;
justify-content:space-between;
padding-top: 32px;
`
export const Accaunt = styled.div` 
padding-left: 20px;
`
Accaunt.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 8px;
`
Accaunt.Text = styled.h6`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #3D3D3D;
width: 81px;
`
export const Help = styled.div` 

`
Help.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 8px;
`
Help.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #3D3D3D;
width: 137px;
`
export const Category = styled.div` 

`
Category.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 8px;
`
Category.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #3D3D3D;
width: 93px;
`
export const Media = styled.div` 
margin-right: 20px;
`
Media.Title = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-bottom: 20px;
`
Media.Box = styled.div` 
border: 1px solid rgba(70, 163, 88, 0.2);
border-radius: 4px;
width: 31px;
height: 30px;
`
Media.Img = styled(face)` 
margin-left: 11px;
cursor: pointer;
`
Media.Card = styled.div`
display: flex;
gap: 10px;
`
Media.Inst = styled(insta)` 
margin-left:7.5px;
margin-top: 1px;
cursor: pointer;
`
Media.Twiter = styled(twiter)` 
margin-left: 8px;
margin-top: 1px;
cursor: pointer;
` 
Media.Linke = styled(linke)`
margin-left: 7px;
cursor: pointer;
`
Media.Union = styled(union)` 
margin-left: 6px;
margin-top: 1px;
cursor: pointer;
`
Media.Text = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
padding-top: 30px;
padding-bottom: 15px;
color: #3D3D3D;`
Media.Info = styled.img` 
cursor: pointer;
`
export const Border = styled.div` 
border: 2px solid rgba(70, 163, 88, 0.2);
`
export const End = styled.div` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 30px;
color: #3D3D3D;
text-align: center;
padding-top:8px ;
padding-bottom: 15px;
`