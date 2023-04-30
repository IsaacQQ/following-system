import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:15px;
    padding 10px;
`

export const BackButton = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 6px;
position: relative;
width: 196px;
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
background-color: #a6a1cc;
background-size: cover;
min-height:100vh;
  width: 100vw;
`