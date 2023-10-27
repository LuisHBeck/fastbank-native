import { View, Text } from "react-native"
import React from 'react'
import { Container, ButtonContainer, Button, ButtonText } from "./styled";

import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Footer = ({ setFeature }) => {
  return (
    <Container source={require("../../../../assets/footer-bg.png")}>
      <ButtonContainer>
        <Button>
          <AntDesign name="barcode" size={25} color={"#ffffff"}/>
          <ButtonText>Payment</ButtonText>
        </Button>
        <Button>
          <MaterialIcons name="attach-money" size={31} color={"#e53d41"}/>
          <ButtonText>Statement</ButtonText>
        </Button>
        <Button onPress={() => {
          setFeature("Investment")
        }}>
          <FontAwesome name="bitcoin" size={25} color={"#ffffff"}/>
          <ButtonText>Invest</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}
export default Footer;
