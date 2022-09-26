import React from "react";
import styled from "styled-components";
import MaleHand from "../images/blckhnd.png";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 70px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 80%;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={MaleHand} />
      </Left>
      <Right>
        <Title>
          <b>fresh</b> designs
          <br />
          <b>strong</b> businesses
        </Title>
        <SubTitle>We know what good businesses need.</SubTitle>
        <Desc>
          With our help our clients succeed in creating brand identities, digital
          experiences, and print materials that communicate smoothly, achieve
          milestone goals and look great.
        </Desc>
        <Desc>
          We care about your business and your success.
        </Desc>
        <Button>Learn more</Button>
      </Right>
    </Container>
  );
};

export default Feature;
