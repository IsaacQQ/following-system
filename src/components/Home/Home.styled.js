import styled from "styled-components";
import imgBack from "../../img/background.png"
import { Link } from 'react-router-dom';



export const BackGround = styled.div`
background-image: url(${imgBack});
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
height: 100vh;
  width: 100vw;
  display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const MainTitle = styled.h2`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 22px;
text-transform: uppercase;
color:#e9d9c0;
`
export const TweetsButton = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: relative;
width: 210px;
height: 50px;
background: #d6d1c0;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
text-decoration: none;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
text-transform: uppercase;
color: #373737;
`

export const Container = styled.div`
display: flex;
height: 100vh;
width: 100%;
overflow: hidden;
`