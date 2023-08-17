import styled from "styled-components";
import {ReactComponent as flow} from '../../assets/svg/image 14.svg'

export const Container = styled.div` 
padding-top: 60px;
display: flex;
justify-content: space-around;
align-items: center;
`
export const Cactus = styled.div`
display: flex;
align-items: center;
`
Cactus.Img = styled(flow)` 

`
export const Summer = styled.div` 
text-align: right;
`
Summer.Title = styled.h3` 
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 24px;
text-align: right;
text-transform: uppercase;
color: #3D3D3D;
`
Summer.Text = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-align: right;
color: #727272;
width: 292px;
`
Summer.Btn = styled.button` 
width: 140px;
height: 40px;
background: #46A358;
border-radius: 6px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
border: 0;
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
export const Trend = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
`
Trend.Img = styled.img` 

`
export const Stylin = styled.div` 
text-align: right;
`
Stylin.Title = styled.h3` 
font-style: normal;
font-weight: 900;
font-size: 18px;
line-height: 24px;
text-align: right;
text-transform: uppercase;
color: #3D3D3D;
`
Stylin.Text = styled.h5` 
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-align: right;
color: #727272;
width: 292px;
`
Stylin.Btn = styled.button` 
width: 140px;
height: 40px;
background: #46A358;
border-radius: 6px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
border: 0;
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
