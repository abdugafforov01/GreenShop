import styled from "styled-components";
import { ReactComponent as Thank } from '../../../../assets/svg/Group (1).svg'

export const Container = styled.div` 

`
export const Content = styled.div` 
width: 100%;
height: 156px;
background: rgba(70, 163, 88, 0.06);
text-align: center;
`
Content.Img = styled(Thank)` 
margin-top: 15px;
`
Content.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
text-align: center;
color: #727272;
padding-top: 16px;
`
export const Number = styled.div` 
text-align: left;
padding-top: 15px;
`
Number.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #727272;
`
Number.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #727272;
`
export const Flex = styled.div` 
display: flex;
justify-content: space-between;
border-top: 1px solid rgba(70, 163, 88, 0.2);
border-bottom: 1px solid rgba(70, 163, 88, 0.2);
`
export const Order = styled.div` 
padding-top: 18px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(70, 163, 88, 0.2);

`
Order.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
text-align: left;
`
Order.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 12px;
`
Order.Flex = styled.div` 

`
Order.Qty = styled.div` 
padding-left: 70px;
`
export const Product = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 14px;
`
export const Flow = styled.div` 
display: flex;
gap: 10px;
align-items: center;
`
Flow.Img = styled.img` 

`
Flow.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-top: 5px;
span{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #A5A5A5;
}
`
export const Nume = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #46A358;
`
export const Cunt = styled.div` 
display: flex;
justify-content: center;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #727272;
`
export const Shiping = styled.div` 
text-align: left;
padding-top: 35px;
/* display: flex; */
`
Shiping.Title = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-left: 160px;

`
Shiping.Text = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
padding-left: 160px;
padding-top: 35px;
`
Shiping.Num = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #3D3D3D;
`
Shiping.Flex = styled.div` 
display: flex;
justify-content: space-between;
`
Shiping.Nume = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #46A358;
padding-top: 35px;

`
export const Dat = styled.div` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
text-align: center;
color: #727272;
padding-top: 30px;
`
export const Btns = styled.button` 
background: #46A358;
border-radius: 5px;
width: 162px;
height: 40px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #FFFFFF;
border: 0;
margin-top: 45px;
margin-right: 140px;
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