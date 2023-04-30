import React from "react";
import { BackGround, MainTitle, TweetsButton, Container } from "./Home.styled";



function HomePage(){  
return(
    <Container>
        <BackGround>
        <MainTitle>Welcome To The App!</MainTitle>
        <TweetsButton to="/tweets">Check out tweets!</TweetsButton>
        </BackGround>
    </Container>
)
}

export default HomePage;