import styled from "styled-components";

export const Seidbar = styled.div` 
/* width: 310px; */
`
export const Container = styled.div` 
width: 310px;
background: #FBFBFB;
margin-top: 46px;
`
Container.Title = styled.h4` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-left: 18px;
padding-top: 14px;
`
export const Menu = styled.div` 
display: flex;
justify-content: space-between;
`
export const Content = styled.h4` 
width: 124px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 40px;
color: #3D3D3D;
padding-left: 30px;
span{
    color: #46A358;
}
`
export const Num = styled.h5` 
width: 48px;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 40px;
text-align: right;
color: #3D3D3D;
padding-right: 24px;
span{
    color: #46A358;
}
`
export const Range = styled.div` 

`
Range.Title = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-top: 36px;
padding-left: 18px;
`
Range.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-top: 15px;
padding-left: 30px;
span{
    color: #46A358;
}
`
Range.Btn = styled.button` 
background: #46A358;
border-radius: 6px;
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #FFFFFF;
border: 0;
width: 90px;
height: 35px;
margin-top: 16px;
margin-left: 30px;
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
export const Size = styled.div` 

`
Size.Title = styled.h5` 
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: #3D3D3D;
padding-left: 18px;
padding-top: 50px;
`
export const Super = styled.img` 

`