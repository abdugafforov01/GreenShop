import styled from "styled-components";
import Tab from "../../../tab";
import {ReactComponent as flow} from '../../../../assets/svg/image 1.svg'


export const Container = styled.div` 
max-width:1440px;
padding: 0 20px;
margin: 0 auto;
`
export const Content = styled.div` 
display: flex;
gap: 10px;
align-items: center;
padding-top: 36px;
`
Content.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
`
export const Table = styled.div` 
width: 70%;
`
export const Flex = styled.div` 
display: flex;
justify-content: space-between;
padding-top: 50px;
`
Table.Img = styled.img` 

`
Table.Title = styled.h3` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
`
Table.Text = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #A5A5A5;
`
Table.Price = styled.p` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #727272;
padding-top: 26px;
`
export const Btn = styled.button` 
width: 21px;
height: 25px;
background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
border-radius: 29px;
border: 0;
color: #FFFF;
`
Table.Count = styled.h3` 
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 10px;
color: #3D3D3D;
padding-top: 8px;
`
export const Display = styled.div` 
display: flex;
align-items: center;
padding-top: 22px;
gap: 10px;
`
Table.Total = styled.p` 
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #46A358;
padding-top: 26px;
`
export const Total = styled.div` 
text-align: left;
`
Total.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
`
export const Border = styled.div` 
border: 0.3px solid rgba(70, 163, 88, 0.5);
color: 50% #46A35880;
`
Total.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #3D3D3D;
padding-top: 11px;
padding-bottom: 8px;
`
export const Form = styled.div` 
width: 332px;
border: 1px solid #46A358;
border-radius: 3px;
display: flex;
justify-content: space-between;
`
export const Input = styled.input`
width: 215px;
margin-left: 5px;
outline: none;
border:0 ;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #A5A5A5;
`
export const Btns = styled.button` 
width: 112px;
height: 40px;
background: #46A358;
border-radius: 0px 3px 3px 0px;
border: 0;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #FFFFFF;
:hover{
    background-color:#38DF4F;
    transition: 0.2s;
}
:active{
    background: none;
    border-left: 1px solid #46A358;
    color: #46A358;
}
`
export const Chek = styled.div` 
display: flex;
justify-content: space-between;
/* align-items: center; */
padding-top: 30px;
`
export const Subtota = styled.div` 

`
export const Sum = styled.div`

`
Subtota.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 10px;
`
Sum.Title = styled.p` 
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #3D3D3D;
padding-top: 10px;
span{
    font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #46A358;
}
`
Sum.Text = styled.p`    
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
text-align: right;
`
Subtota.Total = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 55px;
`
Sum.Sum = styled.p ` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #46A358;
padding-top: 22px;
`
export const Check = styled.button` 
width: 332px;
height: 40px;
background: #46A358;
border-radius: 3px;
border: 0;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #FFFFFF;
margin-top: 28px;
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
Check.Text = styled.h4  ` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #46A358;
padding-top: 14px;
text-align: center;
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
padding-bottom: 12px;

`
// export const Border =  styled.div` 
// border: 0.3px solid rgba(70, 163, 88, 0.5);
// color: #46A35880 50%;
// margin-top: 12px;

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