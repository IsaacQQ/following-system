import styled from 'styled-components';


export const UserCard = styled.div`
background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
border-radius: 20px;
width: 380px;
height: 460px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
`

export const BackGroundImg = styled.img`
width: 308px;
height: 168px;
`


export const NickName =styled.h3`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`

export const Img = styled.img`
border-radius: 85.9232px;
width: 80px;
height: 80px;
`


export const Tweets = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`

export const Followers = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
text-transform: uppercase;
color: #EBD8FF;
`


export const Button = styled.button`
background-color: ${({ isFollowing }) => (isFollowing ? "#5CD3A8;" : "#EBD8FF;")};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
width: 196px;
height: 50px;
padding: 14px 28px;
gap: 6px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 22px;
/* identical to box height */

text-transform: uppercase;
`