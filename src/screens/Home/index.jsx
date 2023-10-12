import { View, Text } from "react-native";
import React from "react";
import { Container, MainInfoContainer } from "./styled";
import Header from "../../components/Home/Header";
import MoneyBalance from "../../components/Home/MoneyBalance";


const Home = () => {
  return(
    <Container>
      <MainInfoContainer>
        <Header />
        <MoneyBalance />
      </MainInfoContainer>
    </Container>
  )
}

export default Home;