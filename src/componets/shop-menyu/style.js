import styled from "styled-components";
import {ReactComponent as stroke} from '../../assets/svg/Stroke 1.svg'

export const Menu = styled.div` 
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
padding-bottom:10px;
:hover{
    color: #51E06D;
}
`
export const Flex = styled.div` 
display: flex;
gap: 40px;
padding-left: 50px;

`
export const Display = styled.div` 
display: flex;
justify-content: space-between;
padding-top: 45px;
`
export const Short = styled.h4` 
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: #3D3D3D;
`
Short.Img = styled(stroke)` 

`