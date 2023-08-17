import styled from "styled-components";
import { ReactComponent as produc } from '../../../assets/svg/pro.svg'
import { ReactComponent as pro } from '../../../assets/svg/pro3.svg'
import { ReactComponent as search } from '../../../assets/svg/Vector (4).svg'
import { ReactComponent as hart } from '../../../assets/svg/hart.svg'

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
Content.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
`
export const Display = styled.div` 
padding-top: 43px;
display: flex;
justify-content: space-between;
`
export const Product = styled.div` 
display: flex;
gap: 46px;
align-items: center;
position: relative;
`
export const Flex = styled.div` 
display: flex;
flex-direction: column;
`
Product.Img = styled(pro)` 
cursor: pointer;

`
Flex.Img = styled(produc)` 
cursor: pointer;
border: 1px solid #FFFF;
:hover{
    border: 1px solid #46A358;
}
`
Product.Image = styled(search)` 
position: absolute ;
top: 0%;
left: 530px;
cursor: pointer;
`
export const Info = styled.div` 
text-align: left;
`
Info.Title = styled.h3` 
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 16px;
color: #3D3D3D;
`
Info.Text = styled.h5` 
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 16px;
color: #46A358;
padding-top: 18px;
padding-bottom: 14px;
`
export const View = styled.div` 
display: flex;
align-items: center;
`
View.Title = styled.div` 
display: flex;
align-items: center;
padding-left: 250px;
gap: 12px;
`
View.Text = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 12px;
`
export const Short = styled.div` 

`
Short.Title = styled.h3` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
`
Short.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #727272;
width: 673px;
`
export const Size = styled.div` 
`
Size.Box = styled.div` 
width: 28px;
height: 28px;
border: 1px solid #EAEAEA;
border-radius:50%;
color: #2AE294;
padding-left: 9px;
padding-top: 1px;
cursor: pointer;
:hover{
    border: 1px solid #2AE294;
}
:active{
    border: 1px solid #2AE244;
}

`
export const Box = styled.div` 
display: flex;
gap: 10px;
align-items: center;
`
Size.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 20px;
padding-bottom: 10px;
`
export const Count = styled.div` 
display: flex;
align-items: center;
gap: 10px;
padding-top: 25px;
`
Count.Btn = styled.button` 
background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
border-radius: 29px;
width: 33px;
height: 38px;
border: 0;
color: #FFFF;
font-size: 25px;
text-align: center;
cursor: pointer;
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
Count.Btns = styled.button`
background: linear-gradient(180deg, #46A358 0%, rgba(70, 163, 88, 0.8) 100%);
border-radius: 29px;
width: 33px;
height: 38px;
border: 0;
color: #FFFF;
padding-top: 1px;
font-size: 22px;
text-align: center;
cursor: pointer;
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
Count.Text = styled.p` 
font-style: normal;
font-weight: 400;
font-size: 20px;
padding-top: 15px;
color: #3D3D3D;
`
export const Btn = styled.button` 
background: #46A358;
width: 130px;
height: 40px;
border-radius: 6px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
text-transform: uppercase;
color: #FFFFFF;
border: 0;
margin-left: 20px;
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
export const Btns = styled.button` 
background: none;
width: 130px;
height: 40px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 20px;
text-transform: uppercase;
color: #46A358;
border: 1px solid #46A358;
border-radius: 6px;
margin-left: 10px;
:hover{
    background-color:#38DF4F;
    transition: 0.2s;
    color: #FFFF;
    border: none;
}
:active{
    background: none;
    border: 1px solid #46A358;
    color: #46A358;
}
`
export const Hart = styled.button` 
border: 1px solid #46A358;
border-radius: 6px;
width: 40px;
background: none;
height: 40px;
margin-left:10px;
:hover{
    background-color:#6EE17E;
    transition: 0.2s;
}
:active{
    background: none;
border: 1px solid #46A358;

}
`
Hart.Img = styled(hart)` 
`
export const Share = styled.div` 
padding-top: 20px;
`
Share.Title = styled.h4`
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #A5A5A5;
span{
    color:#727272;
}
` 
Share.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #ACACAC;
span{
    color: #727272;
}
padding-top: 10px;
`
Share.Product = styled.div` 
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 18px;
`
Share.Image = styled.img` 
margin-left: 20px;
cursor: pointer;
`
