import styled from "styled-components";
import {ReactComponent as info} from '../../../../assets/svg/info.svg'

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
export const Display = styled.div` 
padding-bottom: 150px;
display: flex;
justify-content: space-between;
`
export const Form = styled.div` 

`
export const Order = styled.div` 
text-align: left;
width: 30%;
`
Form.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
padding-top: 36px;
`
export const Input = styled.input` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 350px;
height: 40px;
outline: none;
padding-left: 10px;
margin-right: 48px;
::placeholder{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #A5A5A5;
}
:focus{
    border: 1px solid #6EB6E1;
}
`
Input.Title = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
padding-top: 30px;
span{
    color: #F03800;
    font-size: 18px;
}
`
export const Flex = styled.div`
display: flex;

`
export const Select = styled.select` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 350px;
height: 40px;
outline: none;
padding-left: 10px;
margin-right: 48px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #A5A5A5;
:focus{
    border: 1px solid #6EB6E1;
}
`
export const Num = styled.select` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 78px;
height: 40px;
outline: none;
padding-left: 10px;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
:focus{
    border: 1px solid #6EB6E1;
}
`
export const Check = styled.div` 
display: flex;
align-items: center;
padding-top: 32px;
`
Check.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 8px;
`
export const Textarea = styled.div` 
padding-top: 54px;
`
Textarea.Input = styled.input` 
width: 350px;
height: 152px;
border: 1px solid #EAEAEA;
border-radius: 3px;
outline: none;
`
Textarea.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
`
export const Foter = styled.div` 

`
Order.Title = styled.h4` 

font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
`
export const Subtotal = styled.div` 
display: flex;
justify-content: space-between;
padding-top: 21px;
`
Subtotal.Title = styled.h4`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;

`
Subtotal.Text =  styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
`
export const Border = styled.div` 
border: 0.3px solid rgba(70, 163, 88, 0.5);
margin-top: 11px;
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
export const Click = styled.div` 
display: flex;
justify-content: space-between;
padding-top: 20px;
padding-left: 50px;
`
Click.Title = styled.div` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-align: right;
color: #3D3D3D;
padding-top: 17px;

span{
    color: #46A358;
}
`
export const Count = styled.div` 

`
export const View = styled.div` 

`
Count.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 21px;
`
View.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #3D3D3D;
padding-top: 21px;
`
View.Title = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 21px;
text-align: right;
`
View.Charge  = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
color: #46A358;
padding-top: 8px;
`
export const Total = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 16px;
padding-left: 50px;
`
Total.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #3D3D3D;
`
Total.Text = styled.h5` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
text-align: right;
color: #46A358;
`
export const Paymet = styled.div` 
width: 321px;
height: 45px;
border: 1px solid #EAEAEA;
border-radius: 3px;
margin-left: 70px;
display: flex;
align-items: center;
margin-top: 15px;
`
Paymet.Title  =styled.h2` 
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
padding-top: 47px;
padding-bottom: 19px;
padding-left: 50px;
`
Paymet.Info = styled(info)` 

`
Paymet.Text  =styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 5px;
`
export const Btn = styled.button` 
width: 321px;
height: 40px;
background: #46A358;
border-radius: 3px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
border: 0;
color: #FFFFFF;
margin-left: 70px;
margin-top: 45px;
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