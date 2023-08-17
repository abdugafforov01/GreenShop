import styled from "styled-components";

export const Container = styled.div` 
`
export const Content = styled.div` 
display: flex;
justify-content: space-between;
`
Content.Title = styled.h3` 
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
span{
    font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 35px;
color: #727272;
}
`
Content.Text = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #46A358;
cursor: pointer;    
`
export const Input = styled.input` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 417px;
height: 40px;
outline: none;
padding-left: 15px;
margin-left: 5px;
:focus{
    border: 1px solid #55AFD1;
}
`
export const Title = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
span{
 color: #F03800;
 font-size:18px;
}
`
export const Display = styled.div` 
padding-right: 80px;
padding-top: 30px;
`
export const Flex = styled.div` 
display: flex;
`
export const Select = styled.select` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 417px;
height: 40px;
outline: none;
padding-left: 15px;
margin-left: 5px;
:focus{
    border: 1px solid #55AFD1;
}
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #A5A5A5;
`
export const Form = styled.select` 
width: 78px;
height: 40px;
border: 1px solid #EAEAEA;
border-radius: 3px;
outline: none;
padding-left: 15px;
margin-left: 5px;
:focus{
    border: 1px solid #55AFD1;
}
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 15px;
color: #3D3D3D;
`
export const Formu = styled.input` 
border: 1px solid #EAEAEA;
border-radius: 3px;
width: 329px;
height: 40px;
outline: none;
padding-left: 15px;
margin-left: 10px;
:focus{
    border: 1px solid #55AFD1;
}
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
export const Adres = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 64px;
padding-bottom: 10px;
`
export const Name = styled.div` 

`
Name.Title = styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 16px;
color: #3D3D3D;
`
Name.Text = styled.h6` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
color: #727272;
`
export const Add = styled.div` 
display: flex;
align-items: center;
`
Add.Box = styled.div` 
width: 16px;
height: 16px;
border-radius:50%50%;
 border: 1.5px solid #46A358;
`
Add.Text = styled.h3` 
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #3D3D3D;
padding-left: 8px;
padding-right: 63px;
padding-top: 5px;
`
Add.Title  =styled.h4` 
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
color: #46A358;
padding-top: 5px;
`