import React from "react";
import { Container, Logo, UserPhotoContainer, UserPhotoImage } from "./styled";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return(
    <Container>
      <MaterialCommunityIcons name="dots-vertical" size={40} color="#e53d41"/>
      <Logo source={require("../../../../assets/becks-logo.png")}/>
      <UserPhotoContainer>
        <UserPhotoImage source={require("../../../../assets/becks-logo.png")}/>
      </UserPhotoContainer>
    </Container>
  )
}

export default Header;