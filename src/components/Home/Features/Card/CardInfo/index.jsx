import { View, Text } from "react-native"
import React, {useEffect, useState} from 'react'
import { Container, ButtonText, Button, InfoContainer, InfoTitle, InfoContent } from "./styled";

const CardInfo = ({totalLimit}) => {
  return (
    <>
      <Container>
        <Button background={"#d8d8d8"}>
          <ButtonText>PREVIOUS</ButtonText>
        </Button>
        <InfoContainer>
          <InfoTitle>NEXT INSTALLMENTS</InfoTitle>
          <InfoContent color={"#000000"}>RS$640,53</InfoContent>
        </InfoContainer>
      </Container>
      <Container>
        <Button background={"#F5C6C7"}>
          <ButtonText color={"#e53d41"}>SEE INSTALLMENT</ButtonText>
        </Button>
        <InfoContainer>
          <InfoTitle>CURRENT LIMIT</InfoTitle>
          <InfoContent color={"#e53d41"}>RS$2.640,53</InfoContent>
        </InfoContainer>
      </Container>
      <Container>
        <Button background={"#98E9D4"}>
          <ButtonText color={"#00BA80"}>SEE INSTALLMENT</ButtonText>
        </Button>
        <InfoContainer>
          <InfoTitle>TOTAL LIMIT</InfoTitle>
          <InfoContent color={"#00BA80"}>RS${totalLimit}</InfoContent>
        </InfoContainer>
      </Container>
    </>
  )
}
export default CardInfo;
